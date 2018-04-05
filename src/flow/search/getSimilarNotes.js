
function measureSimilarity(notes,wordList,ind){
    const note = notes[ind] 
    const content = note[2]
    if(!note[6]) note[6] = note[2]
    wordList.forEach(word => {
        if(content.indexOf(word) !== -1){
            note[5] += 1
            note[6] = markRedStep1(note[6],word)
        }
    })
    if(note[5] && (note[5] > 0)){
        global.flow.dispatch({ type:'localData/sortNotes' }) //然后这个触发1        
    }

    if( (ind+1) < notes.length){
        setTimeout(function(){
            measureSimilarity(notes,wordList,ind+1)
        })
    }else{
        // 进入这里意味着 结束了
        notes.forEach(_note=>{
            _note[6] = markRedStep2(_note[6])
        })
        global.flow.dispatch({ type:'localData/sortNotes' }) //然后这个触发1
    }
}

function getSimilarNotes(notes,wordList){
    measureSimilarity(notes,wordList,0)    
}

export default getSimilarNotes

function markRedStep1(str,keyword){
    try {
        const reg = new RegExp("(" + keyword + ")", "g")
        const newstr = str.replace(reg, " _-_-$1-_-_ ") //"<font color='#00a9ff'>$1</font>"
        return newstr
    }
    catch(err){
        return str
    }
}

function markRedStep2(str){
    while(/\s_-_-/g.test(str)){
        str = str.replace(/\s_-_-/g, `<span style='color:#00a9ff'>`)            
    }
    while(/-_-_\s/g.test(str)){
        str = str.replace(/-_-_\s/g, `</span>`) 
    }
    return str
}

