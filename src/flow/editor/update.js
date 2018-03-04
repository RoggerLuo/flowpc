export function serverSave(){
    const note = global.flow.utils.findCurrentNote()
    global.flow.dispatch({ type: 'server/post', note })
}

<<<<<<< HEAD
const debounceSave = global.flow.utils.debounce(serverSave,2000)
=======
const debounceSave = global.flow.utils.debounce(serverSave,500)
>>>>>>> 8ea7acdb2cfca869473942b3a3307553b4e9d0ea

export function onChange(event) {
    global.flow.notSave = true
    global.flow.dispatch({ type: 'localData/modify_note_content', content: event.target.value })
    global.flow.dispatch({ type: 'localData/change', key: 'notSave', value: true })    
    debounceSave()
}

