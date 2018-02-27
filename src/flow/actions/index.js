import { serverSave, onChange } from './update'
import _delete from './delete'
const rdx = global.rdx
const flow = global.flow

const actions = {}
actions.delete = _delete
actions.onChange = onChange
actions.serverSave = serverSave
actions.clickNote = (itemId, content) => {
    rdx.dispatch({ type: 'localData/load', itemId, content })
}
actions.new = () => {
    const itemId = Date.parse(new Date()) / 1000
    rdx.dispatch({ type: 'localData/createNote', itemId })
    flow.utils.editorFocus()
    // rdx.dispatch({ type: 'server/post', itemId, content:'a 123'})
}
export default actions