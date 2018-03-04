export default (event) => {
<<<<<<< HEAD
    const { ctrlKey, metaKey, keyCode, shiftKey } = event
    return (preset_keyCode,{ meta, ctrl, shift },cb) => {
        if(ctrl){
            if(!ctrlKey) return
        }else{
            if(ctrlKey) return
        }
        if(meta){
            if(!metaKey) return 
        }else{
            if(metaKey) return 
        }
        if(shift){
            if(!shiftKey) return
        }else{
            if(shiftKey) return            
        }
        if(keyCode === preset_keyCode){
            cb()
            event.preventDefault()
        }
    }
}

/*

const withCtrl = (preset_keyCode, cb) => {
    if(!shiftKey){
        if ((ctrlKey)) {
            if (keyCode === preset_keyCode) {
                cb()
                event.preventDefault()
            }
        }
    }
}
const withMetaCtrl = (preset_keyCode, cb) => {
    if(!shiftKey){
        if ((metaKey && ctrlKey)) {
=======
    const { ctrlKey, metaKey, keyCode } = event
    const withMeta = (preset_keyCode, cb) => {
        if ((ctrlKey || metaKey)) {
>>>>>>> 8ea7acdb2cfca869473942b3a3307553b4e9d0ea
            if (keyCode === preset_keyCode) {
                cb()
                event.preventDefault()
            }
        }
    }
<<<<<<< HEAD
}

const withMeta = (preset_keyCode, cb) => {
    if(!shiftKey){
        if ((metaKey)) {
=======
    const withoutMeta = (preset_keyCode, cb) => {
        if (!(ctrlKey || metaKey)) {
>>>>>>> 8ea7acdb2cfca869473942b3a3307553b4e9d0ea
            if (keyCode === preset_keyCode) {
                cb()
                event.preventDefault()
            }
        }
    }
<<<<<<< HEAD
}
const withoutMeta = (preset_keyCode, cb) => {
    if (!(ctrlKey || metaKey)) {
        if (keyCode === preset_keyCode) {
            cb()
            event.preventDefault()
        }
    }
}

const withMetaShift = (preset_keyCode, cb) => {
    if(shiftKey){
        if ((ctrlKey || metaKey)) {
            if (keyCode === preset_keyCode) {
                cb()
                event.preventDefault()
            }
        }
    }
}
return { withMeta, withoutMeta, withMetaShift, withCtrl, withMetaCtrl }
*/
=======
    return { withMeta, withoutMeta }
}

>>>>>>> 8ea7acdb2cfca869473942b3a3307553b4e9d0ea
