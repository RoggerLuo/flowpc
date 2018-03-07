export function findLineStart(editor,ind){
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

export function findLineEnd(editor,ind){
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
