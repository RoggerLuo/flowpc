import { fromJS, List } from 'immutable'
import { notes_get } from '../services/notes'

export default {
    namespace: 'localData',
    state: {
        notes: [],
        appKeyModalVisible: false,
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
        createNote(state, { itemId }) {
            const newState = Object.assign({}, state, { itemId }) //load + copy
            newState.notes.unshift([itemId, itemId, ''])
            return newState
        },
        deleteNote(state, { itemId }) {
            const data = fromJS(state)
            const index = data.get('notes').findIndex((el) => el.get(1).toString() === itemId.toString())
            return data.updateIn(['notes'], List(), (el) => el.delete(index) ).toJS()
        },
        modify_note_content(state, { content }) {
            const data = fromJS(state)
            const itemId = state.itemId
            const index = data.get('notes').findIndex((el) => el.get(1).toString() === itemId.toString())
            return data.updateIn(['notes', index, 2], List(), () => content ).toJS()
        },
        load(state, { itemId }) {
            return Object.assign({}, state, { itemId })
        },
        loadlast(state) {
            const itemId = state.itemId
            const notes = state.notes
            let index = false
            notes.some((el, ind) => {
                if (el[1] === itemId) {
                    if ((ind - 1) >= 0) {
                        index = ind - 1
                        return true
                    }
                }
                return false
            })
            if (index !== false) {
                return Object.assign({}, state, { itemId: notes[index][1] })
            }
            return state
        },
        loadnext(state) {
            const itemId = state.itemId
            const notes = state.notes
            let index = false
            notes.some((el, ind) => {
                if (el[1] === itemId) {
                    if ((ind + 1) < notes.length) {
                        index = ind + 1
                        return true
                    }
                }
                return false
            })
            if (index !== false) {
                return Object.assign({}, state, { itemId: notes[index][1] })
            }
            return state
        }

    },
    effects: {
        * getNotes({ placeholder }, { call, put }) {
            const notes = yield call(notes_get)
            yield put({ type: 'change', key: 'notes', value: notes })
            if (notes.length !== 0) {
                yield put({ type: 'load', itemId: notes[0][1] })
            }
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