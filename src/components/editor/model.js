export default {
    namespace: 'editor',
    state: {
        content: '',
        itemId: '',
        notSave: false
    },
    reducers: {
        createNote(state, { itemId }) {
            // const itemId = Date.parse(new Date()) / 1000
            return { ...state, itemId, content: '' }
        },
        // createNote(state) {
        //     const itemId = Date.parse(new Date()) / 1000
        //     const newNotes = state.notes.slice(0)
        //     newNotes.unshift([itemId, itemId, '', itemId])
        //     return Object.assign({},state,{ index: 0, notes: newNotes })
        // },

    },
    effects: {
        * saveNote({ callback }, { fetch, call, put, get }) {
            const itemId = get('editor').itemId
            const content = get('editor').content
            const res = yield call(fetch, `note/${itemId}`, { method: "POST", body: { content } })
            callback && callback()
            // global.flow.notSave = false
            // yield put({ type: 'app/change', key: 'notSave', value: false })    
        },
        * delete({ callback }, { fetch, call, put, get }) {
            const itemId = get('editor').itemId
            const content = get('editor').content
            callback && callback()
            if(confirm(`Confirm delete the note: "${content}"?`)){
                // yield put({ type: 'deleteCurrentNote' }) //先获取itemId再删除，以免index搞乱
                const res = yield call(fetch,`note/${itemId}`, { method: "DELETE" })
            }
        }
    }
}

