const utils = {}
utils.editorFocus = () => {
    const editor = document.getElementById('editor')
    editor.focus()
}

utils.findCurrentNote = () => {
    const state = global.app._store.getState()
    const index = state.localData.index
    return state.localData.notes[index]
}

export default utils