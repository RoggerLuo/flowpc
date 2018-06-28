// import { initListData } from 'components/list'
// import { replace } from 'components/editor'

export default {
    namespace: 'app',
    state: {
        notes: [],
        index: null,
        // content: '',
        // listComponent: ()=>null,
        // editorComponent: ()=>null
    },
    reducers: {
    },
    effects: {
        * fetchNotes({ cb }, { fetch, call, put }) {
            const notes = yield call(fetch,'notes')
            yield put({ type: 'change', key: 'notes', value: notes })
            // if (notes.length != 0) {
            //     yield put({ type: 'load', index: 0 })
            // }
        },
    },
    event: {
        onReady(dispatch) {
            // 应该在高层调用低层应用方法
        }
    }
}