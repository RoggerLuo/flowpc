import { serverSave, onChange } from './update'
import component from './component'
import component2 from './component2'
import keyboard from './keyboard'

const editor = {}
editor.onChange = onChange
editor.serverSave = serverSave
editor.component = component
editor.component2 = component2
editor.keyboard = keyboard

global.flow.editor = editor