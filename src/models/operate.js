import { _delete, post } from '../services/note'

export default {
    namespace: 'operate',
    state: {
        content: '',
        itemId: '',
        desc: false
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        },
    },
    effects: {
        * sortByTime({ placehoder }, { call, put, select }) {
            const _notes = yield select(state => state.notes.notes)
            const notes = _notes.slice(0)
            const desc = yield select(state => state.operate.desc)
            if(desc){
                notes.sort((a,b) =>  b[3] - a[3])
            }else{
                notes.sort((a,b) =>  a[3] - b[3])                
            }
            yield put({type:'notes/load',notes})
            yield put({type:'change',key:'desc',value: !desc })
        },
        * reorder({ placehoder }, { call, put, select }) { // ctrl + r
            const _notes = yield select(state => state.notes.notes)
            const notes = _notes.slice(0)
            notes.sort((a,b) =>  b[3] - a[3])
            yield put({type:'notes/load',notes})
            yield put({type:'change',key:'desc',value: true })
        },
        * delete({ itemId }, { call, put }) {
            yield call(_delete, itemId)
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname, query }) => {})
        }
    }
}

