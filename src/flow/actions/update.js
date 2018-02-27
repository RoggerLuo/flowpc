const rdx = global.rdx

export function serverSave(){
    console.log('serverSave ...')
    const note = rdx.findCurrentNote()
    rdx.dispatch({ type: 'server/post', note })
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
export function onChange(event) {
    rdx.dispatch({ type: 'localData/modify_note_content', content: event.target.value })
    debounce(serverSave,300)()
}

