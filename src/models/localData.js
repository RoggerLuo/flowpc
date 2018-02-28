// import { fromJS, List } from 'immutable'
import { notes_get } from '../services/notes'

export default {
    namespace: 'localData',
    state: {
        notes: [],
        index: 0,
        appKey: '',
        isLoading: false,
        showSuccessWord: false,
        settingModal: false
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        },
        createNote(state) {
            const itemId = Date.parse(new Date()) / 1000
            const newState = Object.assign({}, state, { index: 0 })
            newState.notes.unshift([itemId, itemId, ''])
            return newState
        },
        deleteCurrentNote(state) {
            const index = state.index
            const newNotes = state.notes.slice(0)
            newNotes.splice(index,1)
            if (index === (state.notes.length-1) ) { //如果是最后一个
                return Object.assign({}, state, { index: index - 1, notes: newNotes })
            }
            return Object.assign({}, state, { index: index, notes: newNotes })
        },
        modify_note_content(state, { content }) {
            const index = state.index
            const newNotes = state.notes.slice(0)
            newNotes[index][2] = content
            return Object.assign({}, state, {notes: newNotes})
        },
        load(state, { index }) {
            return Object.assign({}, state, { index })
        },
        loadlast(state) {
            const index = state.index
            if ((index - 1) >= 0) {
                return Object.assign({}, state, { index: index - 1 })
            }
            return state
        },
        loadnext(state) {
            const index = state.index
            if ((index + 1) < state.notes.length) {
                return Object.assign({}, state, { index: index + 1 })
            }
            return state
        },
    },
    effects: {
        * getNotes({ placeholder }, { call, put }) {
            const notes = yield call(notes_get)
            yield put({ type: 'change', key: 'notes', value: notes })
            if (notes.length !== 0) {
                yield put({ type: 'load', itemId: notes[0][1] })
            }
        },
        * delete({ placeholder }, { call, put, select }) {
            const index = yield select(state => state.localData.index)
            const notes = yield select(state => state.localData.notes)
            const itemId = notes[index][1]
            yield put({type: 'deleteCurrentNote'}) //先获取itemId再删除，以免index搞乱
            yield put({ type: 'server/delete', itemId}) 
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname, query }) => {
                if (pathname === '/') {
                    dispatch({ type: 'getNotes' })
                }
            })
        },
    }
}