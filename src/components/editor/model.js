export default {
    namespace: 'editor',
    state: {
        content: '',
        itemId: '',
        notSave: false
    },
    reducers: {},
    effects: {
        * saveNote({ callback }, { fetch, call, put, get }) {
            const itemId = get('editor').itemId
            const content = get('editor').content
            yield call( fetch, `note/${itemId}`, { method: "POST", body: { content } })
            callback && callback()
            // global.flow.notSave = false
            // yield put({ type: 'app/change', key: 'notSave', value: false })    
        },
        * delete({ itemId }, { call, put }) {
            yield call(_delete, itemId)
        }
    }
}

