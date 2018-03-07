import { serverSave, onChange } from './update'
import component from './component'
import keyboard from './keyboard'

const editor = {}
editor.onChange = onChange
editor.serverSave = serverSave
editor.component = component
editor.keyboard = keyboard

global.flow.editor = editor