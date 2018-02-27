const rdx = global.rdx

export function editorFocus(){
    const editor = document.getElementById('editor')
    editor.focus()
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

export function serverSave(){
    console.log('serverSave ...')
    const note = rdx.findCurrentNote()
    rdx.dispatch({ type: 'server/post', note })
}

export function onChange(event) {
    rdx.dispatch({ type: 'localData/modify_note_content', content: event.target.value })
    debounce(serverSave,300)()
}

export function clickNote(itemId, content) {
    rdx.dispatch({ type: 'localData/load', itemId, content })
}

export function _new() {
    const itemId = Date.parse(new Date()) / 1000
    rdx.dispatch({ type: 'localData/createNote', itemId })
    editorFocus()
    // rdx.dispatch({ type: 'server/post', itemId, content:'a 123'})
}

export function del() {
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

export function moveup() {
    rdx.dispatch({ type: 'localData/loadlast' })
    const noteDom = document.getElementsByClassName('selectedNote')[0]
    if (noteDom) {
        const top = noteDom.offsetTop
        const cant_see_the_note = (noteDom.offsetTop <= (noteDom.parentNode.parentNode.scrollTop))
        if (cant_see_the_note) {
            // scrollTo是滑块，数值越大，向下滚得越多
            noteDom.parentNode.parentNode.scrollTo(0, top)
        }
    }
}

export function movedown() {
    rdx.dispatch({ type: 'localData/loadnext' })
    const noteDom = document.getElementsByClassName('selectedNote')[0]
    if (noteDom) {
        const top = noteDom.offsetTop
        const domHeight = noteDom.clientHeight
        const cant_see_the_note = (noteDom.offsetTop >= (noteDom.parentNode.parentNode.scrollTop + window.innerHeight))
        if (cant_see_the_note) {
            // scrollTo是滑块，数值越大，向下滚得越多
            noteDom.parentNode.parentNode.scrollTo(0, top - window.innerHeight + domHeight)
        }
    }
}