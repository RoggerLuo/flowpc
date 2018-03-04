export function serverSave(){
    const note = global.flow.utils.findCurrentNote()
    global.flow.dispatch({ type: 'server/post', note })
}

const debounceSave = global.flow.utils.debounce(serverSave,2000)

export function onChange(event) {
    global.flow.notSave = true
    global.flow.dispatch({ type: 'localData/modify_note_content', content: event.target.value })
    global.flow.dispatch({ type: 'localData/change', key: 'notSave', value: true })    
    debounceSave()
}

