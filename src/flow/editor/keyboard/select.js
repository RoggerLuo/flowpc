export const selectLeft = (e) => {
    const editor = e.target
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd
    //改变方向
    if(startPos === EndPos){ 
        global.flow.editor.keyboard.direction = 'left'
    }

    if(global.flow.editor.keyboard.direction === 'right'){
        const newPos = EndPos - 1
        editor.selectionEnd = newPos
    }else{
        const newPos = startPos - 1
        editor.selectionStart = newPos
    }
}

export const selectRight = (e) => {
    const editor = e.target
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd
    //改变方向
    if(startPos === EndPos){
        global.flow.editor.keyboard.direction = 'right'
    }

    if(global.flow.editor.keyboard.direction === 'left'){
        const newPos = startPos + 1
        editor.selectionStart = newPos
    }else{
        const newPos = EndPos + 1
        editor.selectionEnd = newPos 
    }
}



