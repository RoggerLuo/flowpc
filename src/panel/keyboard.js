import { save } from './actions'

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

export default function(event){
    ctrl_s(event)
}
