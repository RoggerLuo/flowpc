function moveCursorBeforeDelete(notes,itemId,dispatch){
    notes.some((entry,ind,arr)=>{
        if(entry[1].toString() === itemId.toString()){
            if(ind === 0){ //是最前
                dispatch({ type: 'localData/loadnext' })
                return true
            }
            //是普通 或者 是最后
            dispatch({ type: 'localData/loadlast' })
            return true
        }
        return false
    })    
}

export default () => {
    if(!window.confirm("confirm delete?")) return
    
    const dispatch = global.app._store.dispatch
    const state = global.app._store.getState()
    const itemId = state.localData.itemId
    const notes = state.localData.notes
    
    moveCursorBeforeDelete(notes,itemId,dispatch)

    dispatch({ type: 'localData/deleteNote', itemId })
    dispatch({ type: 'server/delete', itemId}) 
}
