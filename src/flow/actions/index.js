import { serverSave, onChange } from './update'
import _delete from './delete'
const flow = global.flow

const actions = {}
actions.delete = _delete
actions.onChange = onChange
actions.serverSave = serverSave
actions.create = () => {
    const dispatch = global.app._store.dispatch
    const itemId = Date.parse(new Date()) / 1000
    dispatch({ type: 'localData/createNote', itemId })
    flow.utils.editorFocus()
}
export default actions