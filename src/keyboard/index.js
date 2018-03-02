import eventCatcher from './eventCatcher'
import {moveup, movedown} from './move'
const flow = global.flow

function keyboard(event) { 
    const catcher = eventCatcher(event)

    catcher.withMeta(78, flow.notes.create) //ctrl_n  // command n无法做到
    catcher.withMeta(74, flow.notes.create) //j
    catcher.withMeta(75, flow.notes.create) //k
    catcher.withMeta(76, flow.notes.create) //l
    catcher.withMeta(85, flow.notes.create) //u
    catcher.withMeta(73, flow.notes.create) //i

    catcher.withMeta(68, flow.notes.delete) //ctrl_d
    catcher.withMeta(38, moveup) //press_up
    catcher.withMeta(40, movedown) //press_down
    
    catcher.withMeta(83, flow.search.toggle) //ctrl_s
    catcher.withMeta(13, function(){
        if(global.app._store.getState().search.visibility){
            global.flow.dispatch({ type: 'search/request' })
            global.flow.dispatch({ type: 'search/toggle' })

        }else{
            flow.utils.editorFocus()            
        }
    })
}

document.body.onkeydown = keyboard
