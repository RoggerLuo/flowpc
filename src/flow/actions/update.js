export function serverSave(){
    console.log('serverSave ...')
    const note = global.flow.utils.findCurrentNote()
    global.flow.dispatch({ type: 'server/post', note })
}

function debounce(fn, delay) {
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
const debounceSave = debounce(serverSave,1000)
export function onChange(event) {
    global.flow.dispatch({ type: 'localData/modify_note_content', content: event.target.value })
    debounceSave()
}

