import eventCatcher from './eventCatcher'
import {moveup, movedown} from './move'
const flow = global.flow

export default function(event) { 
    const catcher = eventCatcher(event)
    catcher.withMeta(83, flow.actions.serverSave) //ctrl_s
    catcher.withMeta(78, flow.actions._new) //ctrl_n  // command n无法做到
    catcher.withMeta(68, flow.actions.delete) //ctrl_d
    catcher.withMeta(38, moveup) //press_up
    catcher.withMeta(40, movedown) //press_down
    catcher.withoutMeta(13, flow.utils.editorFocus)}