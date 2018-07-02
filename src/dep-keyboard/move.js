const flow = global.flow
export function moveup() {
    if(global.flow.notSave){
        global.flow.editor.serverSave()
        return
    }

    flow.dispatch({ type: 'localData/loadlast' })
    const noteDom = document.getElementsByClassName('selectedNote')[0]
    if (noteDom) {
        const top = noteDom.offsetTop
        const cant_see_the_note = (noteDom.offsetTop <= (noteDom.parentNode.parentNode.scrollTop))
        if (cant_see_the_note) {
            console.log(top)
            // scrollTo是滑块，数值越大，向下滚得越多
            noteDom.parentNode.parentNode.scrollTo(0, top-40) //因为header所以有些变化
        }
    }
}

export function movedown() {
    if(global.flow.notSave){
        global.flow.editor.serverSave()
        return
    }

    flow.dispatch({ type: 'localData/loadnext' })
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
