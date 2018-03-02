import { serverSave, onChange } from './update'
import component from './component'
const editor = {}
editor.onChange = onChange
editor.serverSave = serverSave
editor.component = component
global.flow = global.flow || {}
global.flow.editor = editor
