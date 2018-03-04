export default (event) => {
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
            if (keyCode === preset_keyCode) {
                cb()
                event.preventDefault()
            }
        }
    }
}

const withMeta = (preset_keyCode, cb) => {
    if(!shiftKey){
        if ((metaKey)) {
            if (keyCode === preset_keyCode) {
                cb()
                event.preventDefault()
            }
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
