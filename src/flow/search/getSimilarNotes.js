function measureSimilarity(cloned_list,wordList,ind){
    const note = cloned_list[ind]//.slice(0)
    const content = note[2]
    wordList.forEach(word => {
        if(content.indexOf(word) !== -1){
            if(note[5]){
                note[5] += 1
            }else{
                note[5] = 1
            }
        }
    })
    if(note[5] && (note[5] > 0)){
        global.flow.dispatch({ type:'localData/sortNotes', note }) //然后这个触发1        
    }
    if(ind !== (cloned_list.length-1)){
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


