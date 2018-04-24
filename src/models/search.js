import { search } from '../services/search'

export default {
    namespace: 'search',
    state: {
        visibility: false,
        text: '',
        result: [],
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        },
        toggle(state) {
            const visibility = state.visibility
            return Object.assign({}, state, { visibility: !visibility })
        },
    },
    effects: {
        * handleSearch({ rs }, { call, put, select }) {
            yield put({ type: 'change', key:'result', value: remixGroups(rs) })
            yield put({ type: 'countClear' })
            yield put({ type: 'localData/change', key:'index', value: 0 })
            const notes = yield select(state => state.localData.notes)
            global.flow.search.getSimilarNotes(notes,flatWordGroupToList(rs))
        },
        * request({ placeholder }, { call, put, select }) {
            const text = yield select(state => state.search.text)
            if(text){
                const rs = yield call(search, text)
                yield put({ type: 'handleSearch', rs }) 
            }else{
                yield put({ type: 'reborn'})
            }
            yield put({ type:'change', key:'text', value:'' })
        },
        * reborn({ placeholder }, { call, put, select }) {                
            // localData
            const _notes = yield select(state => state.localData.notes)
            const notes = _notes.slice(0)
            notes.sort((a,b) => b[3] - a[3])
            notes.forEach(note => {
                note[5] = 0 //还原计数
                note[6] = note[2] //还原文字
            })
            yield put({ type: 'localData/change', key:'notes', value:notes })
            yield put({ type: 'localData/change', key:'index', value: 0 })
            // 本model
            yield put({ type:'change', key:'result', value:[] })
        },
        * countClear({ placeholder }, { call, put, select }) {                
            const _notes = yield select(state => state.localData.notes)
            const notes = _notes.slice(0)
            notes.forEach(note => {
                note[5] = 0 //还原计数
                note[6] = note[2] //还原文字
            })
            yield put({ type: 'localData/change', key:'notes', value: notes })
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname, query }) => {
                if (pathname === '/') {
                }
            })
        }
    }
}

function flatWordGroupToList(rs){
    const wordList = []
    rs.forEach(el => {
        el.forEach((wordEntry,ind) => {
            if(wordList.indexOf(wordEntry.word) === -1){
                wordList.push({ word: wordEntry.word, weight: Math.pow((16-ind),3) })    
            }
        })
    })
    return wordList
}

function remixGroups(rs){
    const wordList = []
    const groups = []
    rs.forEach(words => {
        words.forEach((el,ind) => {
            if(!groups[ind]){
                groups[ind] = []
            } 
            if(wordList.indexOf(el.word) === -1){
                groups[ind].push(el.word)
                wordList.push(el.word)    
            }
        })
    })
    return groups
}