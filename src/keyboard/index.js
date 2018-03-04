import { editor, notelist, panel } from './keybind'
import eventCatcher from './eventCatcher'

function keyboard(event) { 
    const catcher = eventCatcher(event)
    editor(catcher)
    notelist(catcher)
    panel(catcher)
}

document.body.onkeydown = keyboard
