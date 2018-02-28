const utils = {}
utils.editorFocus = () => {
    const editor = document.getElementById('editor')
    editor.focus()
}

utils.findCurrentNote = () => {
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

export default utils