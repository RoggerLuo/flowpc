import { findLineStart, findLineEnd } from './findStart'

export default (e) => {
    const editor = e.target
    let ind = editor.selectionStart
    editor.setSelectionRange(findLineStart(editor,ind), findLineEnd(editor,ind))    
}
