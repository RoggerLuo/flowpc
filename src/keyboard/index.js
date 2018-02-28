import eventCatcher from './eventCatcher'
import {moveup, movedown} from './move'
const flow = global.flow

function keyboard(event) { 
    const catcher = eventCatcher(event)
    // catcher.withMeta(83, flow.actions.serverSave) //ctrl_s

    catcher.withMeta(78, flow.actions.create) //ctrl_n  // command n无法做到
    catcher.withMeta(68, flow.actions.delete) //ctrl_d
    catcher.withMeta(38, moveup) //press_up
    catcher.withMeta(40, movedown) //press_down
    catcher.withMeta(13, flow.utils.editorFocus)
}

document.body.onkeydown = keyboard
