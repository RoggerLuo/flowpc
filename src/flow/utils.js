const utils = {}

utils.editorFocus = () => {
    const editor = document.getElementById('editor')
    editor.focus()
}

utils.searchFocus = () => {
    const search = document.getElementById('search-wrapper')
    search.children[0].focus()
}

utils.findCurrentNote = () => {
    const state = global.app._store.getState()
    const index = state.localData.index
    return state.localData.notes[index]
}
utils.debounce = function(fn, delay) {
    var timer = null
    return function() {
        var context = this,
            args = arguments
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(context, args)
        }, delay)
    }
}

global.flow = global.flow || {}
global.flow.utils = utils
