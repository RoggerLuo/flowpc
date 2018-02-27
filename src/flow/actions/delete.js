const rdx = global.rdx

export default () => {
    if(!window.confirm("confirm delete?")) return
    const state = global.app._store.getState()
    const itemId = state.localData.itemId
    state.localData.notes.some((el,ind,arr)=>{
        if(el[1].toString() === itemId.toString()){
            if(ind === 0){ //是最前
                rdx.dispatch({ type: 'localData/loadnext' })
                return true
            }
            //是普通 或者 是最后
            rdx.dispatch({ type: 'localData/loadlast' })
            return true
        }
        return false
    })    
    rdx.dispatch({ type: 'localData/deleteNote', itemId }) //删除原始的id
    rdx.dispatch({ type: 'server/delete', itemId})
}
