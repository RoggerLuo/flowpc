import { serverSave, onChange } from './update'
import component from './component'
const editor = {}
editor.onChange = onChange
editor.serverSave = serverSave
editor.component = component
global.flow = global.flow || {}
global.flow.editor = editor

function findLineStart(editor,ind){
    // 找到行首的位置
    // 如果一开始就是 最开始, 不然不会执行while
    if(ind === 0) return 0
    while(ind !== 0){
        if(editor.value[ind-1] === '\n'){
            return ind
        }
        ind = ind - 1
        // 如果已经退到了最开始
        if(ind === 0) return 0
    }
}

function findLineEnd(editor,ind){
    // 找到行首的位置
    let textLength = (editor.value.length-1)
    // 如果一开始就是 最末端, 不然不会执行while
    if(ind >= textLength) return textLength
    while(ind <= textLength){
        if(editor.value[ind] === '\n'){
            return ind
        }
        ind = ind + 1
        // 如果已经前进到了最末尾
        if(ind === textLength) return textLength
    }
}

global.flow.editor.wholeLine = () => {
    const editor = document.getElementById('editor')
    let ind = editor.selectionStart
    editor.setSelectionRange(findLineStart(editor,ind), findLineEnd(editor,ind))    
}

global.flow.editor.previousLine = () => {
    const editor = document.getElementById('editor')
    let ind = editor.selectionStart

    const finalIndex = findLineStart(editor,ind) - 1
    if(finalIndex > 0){
        const newFinalIndex = findLineStart(editor,finalIndex)
        editor.selectionStart = newFinalIndex
        editor.selectionEnd = newFinalIndex
    }else{
        editor.selectionStart = 0
        editor.selectionEnd = 0
    }
}

global.flow.editor.nextLine = () => {
    const editor = document.getElementById('editor')
    let ind = editor.selectionStart
    const finalIndex = findLineEnd(editor,ind) + 1
    if(finalIndex >= (editor.value.length-1) ){
        editor.selectionStart = (editor.value.length-1)
        editor.selectionEnd = (editor.value.length-1)

    }else{
        editor.selectionStart = finalIndex
        editor.selectionEnd = finalIndex
    }
}

global.flow.editor.tab = () => {
    const editor = document.getElementById('editor')
    const startPos = editor.selectionStart
    editor.value = editor.value.substring(0, startPos) + '    ' + editor.value.substring(startPos, editor.value.length)
    const newPos = startPos + 4
    editor.selectionStart = newPos
    editor.selectionEnd = newPos
    global.flow.editor.onChange({target:{value:editor.value}})
}

global.flow.editor.moveRight = () => {
    const editor = document.getElementById('editor')
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd
    let newPos
    if(startPos === EndPos){
        newPos = EndPos + 1
    }else{
        newPos = EndPos        
    }
    editor.selectionStart = newPos
    editor.selectionEnd = newPos
}

global.flow.editor.moveLeft = () => {
    const editor = document.getElementById('editor')
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd
    let newPos
    if(startPos === EndPos){
        newPos = startPos - 1
    }else{
        newPos = startPos        
    }
    editor.selectionStart = newPos
    editor.selectionEnd = newPos
}

global.flow.editor.deleteLeft = () => {
    const editor = document.getElementById('editor')
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd
    let newPos
    if(startPos === EndPos){ // 是选中了，还是没有选中
        editor.value = editor.value.substring(0, startPos-1) + editor.value.substring(startPos, editor.value.length)
        newPos = startPos - 1 
    }else{
        editor.value = editor.value.substring(0, startPos) + editor.value.substring(EndPos, editor.value.length)
        newPos = startPos
    }
    editor.selectionStart = newPos
    editor.selectionEnd = newPos
    global.flow.editor.onChange({target:{value:editor.value}})
}

global.flow.editor.deleteRight = () => {
    const editor = document.getElementById('editor')
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd
    let newPos
    if(startPos === EndPos){ // 是选中了，还是没有选中
        editor.value = editor.value.substring(0, EndPos) + editor.value.substring(EndPos+1, editor.value.length)
        newPos = startPos 
    }else{
        editor.value = editor.value.substring(0, startPos) + editor.value.substring(EndPos, editor.value.length)
        newPos = startPos
    }
    editor.selectionStart = newPos
    editor.selectionEnd = newPos
    global.flow.editor.onChange({target:{value:editor.value}})
}

global.flow.editor.direction = 'left'
global.flow.editor.selectLeft = () => {
    const editor = document.getElementById('editor')
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd
    //改变方向
    if(startPos === EndPos){ 
        global.flow.editor.direction = 'left'
    }

    if(global.flow.editor.direction === 'right'){
        const newPos = EndPos - 1
        editor.selectionEnd = newPos
    }else{
        const newPos = startPos - 1
        editor.selectionStart = newPos
    }
}

global.flow.editor.selectRight = () => {
    const editor = document.getElementById('editor')
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd
    //改变方向
    if(startPos === EndPos){
        global.flow.editor.direction = 'right'
    }

    if(global.flow.editor.direction === 'left'){
        const newPos = startPos + 1
        editor.selectionStart = newPos
    }else{
        const newPos = EndPos + 1
        editor.selectionEnd = newPos 
    }
}






