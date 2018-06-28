export default {
    namespace: 'notes',
    state: {
        content: '',
        itemId: '',
        noteCore: null

    },
    reducers: {},
    effects: {
        * post({ note }, { call, put }) {
            const itemId = note[1]
            const content = note[2]
            yield call(fetch, 'notes', itemId, content)

            global.flow.notSave = false
            yield put({ type: 'localData/change', key: 'notSave', value: false })
        },
        * delete({ itemId }, { call, put }) {
            yield call(_delete, itemId)
        }
    }
}