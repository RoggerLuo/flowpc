import { editor, notelist, panel } from './keybind'
import eventCatcher from './eventCatcher'

function keyboard(event) { 
    const catcher = eventCatcher(event)
    notelist(catcher)
    panel(catcher)

}

document.body.onkeydown = keyboard
document.getElementById('editor').onkeydown = function(event){
    const catcher = eventCatcher(event)
    editor(catcher)
}