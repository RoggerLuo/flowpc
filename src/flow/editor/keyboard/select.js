import { findLineStart, findLineEnd } from './findStart'

export const selectUp = (e) => {
    const editor = e.target
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd
    if(global.flow.editor.keyboard.direction2 === 'down'){
        //end pos往上一行
        const lineStartIndex = findLineStart(editor,EndPos) - 1
        const lineStartIndexOfPrevLine = findLineStart(editor,lineStartIndex)

        if(lineStartIndexOfPrevLine<startPos){
            global.flow.editor.keyboard.direction2 = 'up'
            editor.selectionStart = lineStartIndexOfPrevLine
            editor.selectionEnd = startPos
        }else{
            editor.selectionStart = startPos
            editor.selectionEnd = lineStartIndexOfPrevLine            
        }

    }else{
        //start pos往上一行
        if(startPos===0) return
        const lineStartIndex = findLineStart(editor,startPos) - 1 //如果为0，减去1就变负值了
        const lineStartIndexOfPrevLine = findLineStart(editor,lineStartIndex)
        console.log(lineStartIndexOfPrevLine)
        editor.selectionStart = lineStartIndexOfPrevLine
        editor.selectionEnd = EndPos
        // if(lineStartIndexOfPrevLine > 0){
        // }else{
        //     editor.selectionStart = 0
        //     editor.selectionEnd = EndPos
        // }
    }
}

export const selectDown = (e) => {
    const editor = e.target
    const startPos = editor.selectionStart
    const EndPos = editor.selectionEnd

    if(global.flow.editor.keyboard.direction2 === 'down'){
        //end pos往下一行
        if(EndPos === e.target.value.length) return
        const lineEndIndex = findLineEnd(editor,EndPos) + 1
        const lineEndIndexOfPrevLine = findLineEnd(editor,lineEndIndex)
        editor.selectionStart = startPos
        editor.selectionEnd = lineEndIndexOfPrevLine

    }else{ //当前是up状态 
        //start pos往下一行
        const lineEndIndex2 = findLineEnd(editor,startPos) + 1
        const lineEndIndexOfPrevLine2 = findLineEnd(editor,lineEndIndex2)


        if(lineEndIndexOfPrevLine2 > EndPos){
            global.flow.editor.keyboard.direction2 = 'down'
            editor.selectionStart = EndPos
            editor.selectionEnd = lineEndIndexOfPrevLine2

        }else{

            editor.selectionStart = lineEndIndexOfPrevLine2
            editor.selectionEnd = EndPos
        }
    }
}

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



