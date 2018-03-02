export const _delete = () => {
    if(global.confirm('Confirm delete?')){
        global.flow.dispatch({type: 'localData/delete'})        
    }
}

export const create = () => {
    if(global.flow.notSave){
        global.flow.editor.serverSave()
    }
    global.flow.dispatch({ type: 'localData/createNote' })
    global.flow.utils.editorFocus()
}

