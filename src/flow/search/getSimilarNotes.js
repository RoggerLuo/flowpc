<<<<<<< HEAD
function measureSimilarity(cloned_list,wordList,ind){
    const note = cloned_list[ind]//.slice(0)
=======
function measureSimilarity(notes,wordList,ind){
    const note = notes[ind]
>>>>>>> 8ea7acdb2cfca869473942b3a3307553b4e9d0ea
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
<<<<<<< HEAD
        global.flow.dispatch({ type:'localData/sortNotes', note }) //然后这个触发1        
    }
    if(ind !== (cloned_list.length-1)){
        setTimeout(function(){
            measureSimilarity(cloned_list,wordList,ind+1)
=======
        global.flow.dispatch({ type:'localData/pushNotes', note }) //然后这个触发1        
    }
    if(ind !== (notes.length-1)){
        setTimeout(function(){
            measureSimilarity(notes,wordList,ind+1)
>>>>>>> 8ea7acdb2cfca869473942b3a3307553b4e9d0ea
        })
    }
}

function getSimilarNotes(){
    const state = global.app._store.getState()
<<<<<<< HEAD
    const cloned_list = state.localData.notes.slice(0)
    // global.flow.dispatch({type:'localData/change',key:'notes', value:[]}) //然后这个触发1
=======
    const notes = state.localData.notes.slice(0)
    global.flow.dispatch({type:'localData/change',key:'notes', value:[]}) //然后这个触发1
>>>>>>> 8ea7acdb2cfca869473942b3a3307553b4e9d0ea
    const wordList = []
    state.search.result.forEach(el => {
        el.forEach(wordEntry => {
            wordList.push(wordEntry.word)
        })
    })
<<<<<<< HEAD
    measureSimilarity(cloned_list,wordList,0)    
=======
    measureSimilarity(notes,wordList,0)    
>>>>>>> 8ea7acdb2cfca869473942b3a3307553b4e9d0ea
}

export default getSimilarNotes


