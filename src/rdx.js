const rdx = {}
rdx.dispatch = global.app._store.dispatch
rdx.findCurrentNote = () => {
    const state = global.app._store.getState()
    const itemId = state.localData.itemId
    let target = false
    state.localData.notes.some(el => {
        if(el[1].toString() === itemId.toString()){
            target = el
            return true            
        }
        return false
    })
    return target
}
global.rdx = rdx
