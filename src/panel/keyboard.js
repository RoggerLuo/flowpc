import { save, _new, del, moveup, movedown } from './actions'

const keyboard = (event) => {
    const { ctrlKey, metaKey, keyCode } = event
    const withMeta = (preset_keyCode, cb) => {
        if ((ctrlKey || metaKey)) {
            if (keyCode === preset_keyCode) {
                cb()
                event.preventDefault()
            }
        }
    }
    const withoutMeta = (preset_keyCode, cb) => {
        if (!(ctrlKey || metaKey)) {
            if (keyCode === preset_keyCode) {
                cb()
                event.preventDefault()
            }
        }
    }
    return { withMeta, withoutMeta }
}

export default function(event) { 
    const kb = keyboard(event)
    kb.withMeta(83, save) //ctrl_s
    kb.withMeta(78, _new) //ctrl_n  // command n无法做到
    kb.withMeta(68, del) //ctrl_d
    kb.withoutMeta(38, moveup) //press_up
    kb.withoutMeta(40, movedown) //press_down
}