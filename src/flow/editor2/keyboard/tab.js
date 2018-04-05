
export default (e) => {
    const editor = e.target
    const startPos = editor.selectionStart
    editor.value = editor.value.substring(0, startPos) + '    ' + editor.value.substring(startPos, editor.value.length)
    const newPos = startPos + 4
    editor.selectionStart = newPos
    editor.selectionEnd = newPos
    global.flow.editor.onChange({target:{value:editor.value}})
}
