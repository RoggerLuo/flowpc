import { findLineStart, findLineEnd } from '../findStart'

export const moveUp = (e) => {
    const editor = e.target
    let ind = editor.selectionStart

    const finalIndex = findLineStart(editor,ind) - 1

    if(finalIndex > 0){
        const newFinalIndex = findLineStart(editor,finalIndex)
        // editor.selectionStart = newFinalIndex
        // editor.selectionEnd = newFinalIndex
        const originalValue = editor.value
        editor.blur()
        editor.value = originalValue.substring(0, newFinalIndex)
        editor.focus()
        editor.value = originalValue
        editor.selectionStart = newFinalIndex
        editor.selectionEnd = newFinalIndex

    }else{
        editor.selectionStart = 0
        editor.selectionEnd = 0
    }
}

export const moveDown = (e) => {
    const editor = e.target
    let ind = editor.selectionStart
    const finalIndex = findLineEnd(editor,ind) + 1
    if(finalIndex >= (editor.value.length) ){
        editor.selectionStart = (editor.value.length)
        editor.selectionEnd = (editor.value.length)
    }else{
        const originalValue = editor.value
        editor.blur()
        editor.value = originalValue.substring(0, finalIndex)
        editor.focus()
        editor.value = originalValue
        editor.selectionStart = finalIndex
        editor.selectionEnd = finalIndex
    }
}

export const moveRight = (e) => {
    const editor = e.target
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

export const moveLeft = (e) => {
    const editor = e.target
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



