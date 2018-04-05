import { _delete, touch, get } from '../services/notes'
export default {
    namespace: 'remote',
    state: {},
    reducers: {},
    effects: {
        * touch({ note }, { call, put }) { // create and update
            const itemId = note[1]
            const content = note[2]
            const rs = yield call( touch, itemId, content)
            if(rs === 'ok'){
                // save成功的标志
            }
        },
        * read({ placeholder }, { call, put, select }) {
            const _notes = yield select(state => state.notes.notes)
            if(_notes.length === 0){
                const notes = yield call(get)
                yield put({ type: 'notes/load', notes })                
            }
        },
        * delete({ itemId }, { call, put }) {
            const rs = yield call(_delete, itemId)
            if(rs === 'ok'){
                // 删除成功cb
            }
        }
    },
    subscriptions: {
        setup() {}
    }
}

