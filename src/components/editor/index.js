// import { serverSave, onChange } from './update'
import { Model } from 'dva'
import component from './Editor'
// import keyboard from './keyboard'
export default component
export function createNew(itemId){
    Model.dispatch({type:'editor/createNote',itemId})
}
// const editor = {}
// editor.onChange = onChange
// editor.serverSave = serverSave
// editor.component = component
// editor.component2 = component2
// editor.keyboard = keyboard

// global.flow.editor = editor