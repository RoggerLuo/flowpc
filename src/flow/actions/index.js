import { serverSave, onChange } from './update'

const actions = {}
actions.onChange = onChange
actions.serverSave = serverSave

actions.delete = () => global.flow.dispatch({type: 'localData/delete'})
actions.create = () => {
    global.flow.dispatch({ type: 'localData/createNote' })
    global.flow.utils.editorFocus()
}
export default actions