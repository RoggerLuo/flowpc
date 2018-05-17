import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js'
import { Editor, EditorState, ContentState } from 'draft-js'
import decorator from './decorator'
const { hasCommandModifier, isCtrlKeyCommand } = KeyBindingUtil

export function handleKeyCommand(command) {
    if (command === 'myeditor-save') {
        this.setState({editorState:EditorState.createEmpty(decorator)})
        return 'handled'
    }
    if (command === 'myeditor-new') {
        this.props.dispatch({ type: 'editor/new', ...this.props })
        return 'handled'
    }
    return 'not-handled'
}

export function myKeyBindingFn(e) {
    if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
        return 'myeditor-save'
    }
    if (e.keyCode === 78 /* `S` key */ && isCtrlKeyCommand(e)) {
        return 'myeditor-new'
    }
    return getDefaultKeyBinding(e)
}