const dis = global.app._store.dispatch
function findCurrentNote(){
    const state = global.app._store.getState()
    const itemId = state.localData.itemId
    let target = false
    state.localData.notes.some(el => {
        if(el[1] == itemId){
            target = el
            return true            
        }
        return false
    })
    return target
}

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
    const note = findCurrentNote()
    dis({ type: 'server/post', note })
}

export function onChange(event) {
    const dis = global.app._store.dispatch
    dis({ type: 'localData/modify_note_content', content: event.target.value })
    debounce(serverSave,300)()
}

export function clickNote(itemId, content) {
    const dis = global.app._store.dispatch
    dis({ type: 'localData/load', itemId, content })
}

export function _new() {
    const itemId = Date.parse(new Date()) / 1000
    const dis = global.app._store.dispatch
    dis({ type: 'localData/createNote', itemId })
    editorFocus()
    // dis({ type: 'server/post', itemId, content:'a 123'})
}

export function del() {
    if(!window.confirm("confirm delete?")) return
    const dis = global.app._store.dispatch
    const state = global.app._store.getState()
    const itemId = state.localData.itemId
    state.localData.notes.some((el,ind,arr)=>{
        if(el[1].toString() === itemId.toString()){
            if(ind === 0){ //是最前
                dis({ type: 'localData/loadnext' })
                return true
            }
            //是普通 或者 是最后
            dis({ type: 'localData/loadlast' })
            return true
        }
        return false
    })    
    dis({ type: 'localData/deleteNote', itemId }) //删除原始的id
    dis({ type: 'server/delete', itemId})
}

export function moveup() {
    const dis = global.app._store.dispatch
    dis({ type: 'localData/loadlast' })
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
    const dis = global.app._store.dispatch
    dis({ type: 'localData/loadnext' })
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