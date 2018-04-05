// import { findLineStart, findLineEnd } from './findStart'

export const deleteLeft = (e) => {
    const editor = e.target
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

export const deleteRight = (e) => {
    const editor = e.target
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