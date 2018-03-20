export const _delete = () => {
    global.flow.dispatch({type: 'localData/delete'})        
}

export const create = () => {
    if(global.flow.notSave){
        global.flow.editor.serverSave()
        return 
    }
    global.flow.dispatch({ type: 'localData/createNote' })
    global.flow.utils.editorFocus()
}

