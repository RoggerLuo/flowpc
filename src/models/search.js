import { search } from '../services/search'

export default {
    namespace: 'search',
    state: {
        visibility: false,
        text: '',
        result: [],
        notes: []
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
        }
    },
    effects: {
        * request({ placeholder }, { call, put, select }) {
            const text = yield select(state => state.search.text)
            if(text){
                const rs = yield call(search, text)
                yield put({ type: 'change', key: 'result', value: rs })
                yield put({ type: 'localData/refreshNotes'})
                global.flow.search.getSimilarNotes()
            }else{
                yield put({ type: 'localData/reorderNotes'})
            }
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