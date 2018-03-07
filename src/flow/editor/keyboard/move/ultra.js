import { findLineStart, findLineEnd } from '../findStart'


export const ultraLeft = (e) => {
    const editor = e.target
    let ind = editor.selectionStart
    const start = findLineStart(editor,ind)
    editor.selectionStart = start
    editor.selectionEnd = start
}

export const ultraRight = (e) => {
    const editor = e.target
    let ind = editor.selectionEnd
    const End = findLineEnd(editor,ind)
    editor.selectionStart = End
    editor.selectionEnd = End
}

export const ultraUp = (e) => {
    const editor = e.target 
    editor.selectionStart = 0
    editor.selectionEnd = 0
    editor.scrollTo(0,0)
}

export const ultraDown = (e) => {
    const editor = e.target
    editor.selectionStart = editor.value.length-1
    editor.selectionEnd = editor.value.length-1
    editor.scrollTo(0,editor.scrollHeight - editor.offsetHeight)
}
