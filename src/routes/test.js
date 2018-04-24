import React from 'react'
import { Editor, EditorState } from 'draft-js'
class MyEditor extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }
    onChange(editorState) {
        this.setState({editorState})
    }
    render(){
        return <Editor editorState={this.state.editorState} onChange={this.onChange.bind(this)}/>
    }
}
export default MyEditor
