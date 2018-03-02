function measureSimilarity(notes,wordList,ind){
    const note = notes[ind]
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
        global.flow.dispatch({ type:'localData/pushNotes', note }) //然后这个触发1        
    }
    if(ind !== (notes.length-1)){
        setTimeout(function(){
            measureSimilarity(notes,wordList,ind+1)
        })
    }
}

function getSimilarNotes(){
    const state = global.app._store.getState()
    const notes = state.localData.notes.slice(0)
    global.flow.dispatch({type:'localData/change',key:'notes', value:[]}) //然后这个触发1
    const wordList = []
    state.search.result.forEach(el => {
        el.forEach(wordEntry => {
            wordList.push(wordEntry.word)
        })
    })
    measureSimilarity(notes,wordList,0)    
}

export default getSimilarNotes


