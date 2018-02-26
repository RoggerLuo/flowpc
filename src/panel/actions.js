export function clickNote(itemId, content) {
    const dis = global.app._store.dispatch
    dis({ type: 'localData/load', itemId, content })
}
export function onChange(event) {
    const dis = global.app._store.dispatch
    dis({ type: 'localData/modify_note_content', content: event.target.value })
}
//数据唯一的存在data，edit只是操作
export function save() {
    const dis = global.app._store.dispatch
    dis({ type: 'editor/save' })
    console.log('save...')
}

export function _new() {
    const dis = global.app._store.dispatch
    dis({ type: 'localData/createNote' })
    const editor = document.getElementById('editor')
    editor.focus()
}

export function del() {
    const dis = global.app._store.dispatch
    dis({ type: 'editor/del' })
    console.log('del...')
}

export function moveup() {
    const dis = global.app._store.dispatch
    
    dis({ type: 'editor/loadlast' })

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

    dis({ type: 'editor/loadnext' })

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