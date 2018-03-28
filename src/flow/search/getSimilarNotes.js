function markRed(str,keyword){
    const reg = new RegExp("(" + keyword + ")", "g")
    const newstr = str.replace(reg, "<font color='#00a9ff'>$1</font>")
    return newstr
}

function measureSimilarity(cloned_list,wordList,ind){
    const note = cloned_list[ind]//.slice(0)
    const content = note[2]
    if(!note[5]){
        note[5] = 0            
    } 
    if(!note[6]){
        note[6] = note[2]
    }
    wordList.forEach(word => {
        if(content.indexOf(word) !== -1){
            note[5] += 1
            note[6] = markRed(note[6],word)
        }
    })
    if(note[5] && (note[5] > 0)){
        global.flow.dispatch({ type:'localData/sortNotes' }) //然后这个触发1        
    }
    if( (ind+1) < cloned_list.length){
        setTimeout(function(){
            measureSimilarity(cloned_list,wordList,ind+1)
        })
    }
}

function getSimilarNotes(){
    const state = global.app._store.getState()
    const cloned_list = state.localData.notes.slice(0)
    const wordList = []
    state.search.result.forEach(el => {
        el.forEach(wordEntry => {
            wordList.push(wordEntry.word)
        })
    })
    measureSimilarity(cloned_list,wordList,0)    
}

export default getSimilarNotes


