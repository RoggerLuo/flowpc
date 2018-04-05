export default {
    namespace: 'notes',
    state: { notes: [] },
    reducers: {
        create(state,{ note }) {
            const notes = state.notes.slice(0)
            notes.unshift(note)
            return Object.assign({},state,{ notes })
        },
        update(state, { index, note }) {
            const notes = state.notes.slice(0)
            notes[index] = note
            return Object.assign({}, state, {notes})
        },
        delete(state, { index }) {
            const notes = state.notes.slice(0)
            notes.splice(index,1)
            return Object.assign({}, state, { notes })
        },
        load(state, { notes }) {
            return Object.assign({}, state, { notes })
        }
    },
    effects: {},
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname, query }) => {
                if (pathname === '/') {
                    dispatch({ type: 'remote/read' })
                }
            })
        }
    }
}


/*
    替换 <span></span> 为 _-_- -_-_
*/
/*
    改多余的属性没关系,
    编辑的时候 把蓝色的字取消，还原原始模式
*/
refreshNotes(state){
    // 克隆一个数组 去那个数组里
},
sortNotes(state){
    // 克隆一个数组 去那个数组里
},