import './rdx'

import actions from './actions'
import keyboard from './keyboard'

const flow = {}
flow.actions = actions
//flow.keyboard = keyboard
document.body.onkeydown = keyboard


flow.html = {}


flow.utils = {}
flow.utils.editorFocus = () => {
    const editor = document.getElementById('editor')
    editor.focus()
}


global.flow = flow

//const rdx = global.rdx
