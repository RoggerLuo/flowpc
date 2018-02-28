export default (event) => {
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

