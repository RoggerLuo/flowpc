import { note_del, note_touch } from '../services/notes'

export default {
    namespace: 'editor',
    state: {
        content: '',
        itemId: '',
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        },
    },
    effects: {
        * touchNote({ itemId, content }, { call, put }) {
            yield call(note_touch, itemId, content)
        },

        * deleteNote({ itemId }, { call, put }) {
            yield call(note_del, itemId)
            yield put({ type: 'localData/delete' })
        },

    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname, query }) => {})
        }
    }
}


/** loadlast({ placeholder }, { call, put, select }) {
    const itemId = yield select(state => state.editor.itemId)
    const notes = yield select(state => state.localData.notes)
    let index = false
    notes.some((el, ind) => {
        if (el[1] === itemId) {
            if( (ind-1) >= 0 ){
                index = ind - 1
                return true
            }
        }
        return false
    })
    if(index !== false){
        yield put({ type: 'load', itemId:notes[index][1], content:notes[index][2] })                                        
    }
},
* loadnext({ placeholder }, { call, put, select }) {
    const itemId = yield select(state => state.editor.itemId)
    const notes = yield select(state => state.localData.notes)
    let index = false
    notes.some((el, ind) => {
        if (el[1] === itemId) {
            if( (ind+1) < notes.length ){
                index = ind + 1
                return true
            }
        }
        return false
    })
    if(index !== false){
        yield put({ type: 'load', itemId:notes[index][1], content:notes[index][2] })                                        
    }
},*/