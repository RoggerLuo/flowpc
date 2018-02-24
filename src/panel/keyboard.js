import { save, _new, del } from './actions'

const withMeta = (event, preset_keyCode, cb) => {
  const { ctrlKey, metaKey, keyCode } = event
  if ((ctrlKey || metaKey)) {
    if (keyCode === preset_keyCode){
        cb()
        event.preventDefault()
    } 
  }
}

const ctrl_s = (event) => withMeta(event, 83, save)
const ctrl_n = (event) => withMeta(event, 78, _new)
const ctrl_d = (event) => withMeta(event, 68, del)

export default function(event){
    // ctrl n, command n无法做到
    ctrl_s(event)
    ctrl_n(event)
    ctrl_d(event)
}
