import React from 'react'
import { connect } from 'dva'
import { Editor, EditorState, ContentState } from 'draft-js'
import decorator from './decorator'

/*

    
        load(text) 
        onChange(function(text){})
    

    1. 加载  props.loadtext
    2. onChange
    3. 标蓝色
    4. 代码块 大\小，可以先不管
*/
const cs = ContentState.createFromText('#text\n##asdfasd\n###asdfasdf')
//EditorState.createWithContent(contentState,decorator)
class MyEditor extends React.Component {
    constructor(props) {
        super(props) 
        // const contentState = ContentState.createFromText(props.text)
        this.state = { editorState: EditorState.createEmpty(decorator) }
    }
    load(){

    }
    onChange(editorState) {
        this.setState({editorState}, () => {
            // editorState = markdownHeader(editorState)
            // this.setState({ editorState })
        })
    }
    render(){
        return <Editor editorState={this.props.editorState} onChange={this.onChange.bind(this)}/>
    }
}

function mapStateToProps(state) {
    const data = state.localData
    const note = data.notes[data.index]
    const contenState = ContentState.createFromText(note[2])
    const editorState = EditorState.createWithContent(contentState,decorator)

    return { editorState }
}
function mapDispatchToProps(dispatch) {
    (editorState) => {
        const contentState = editorState.getCurrentContent()
        const content = contentState.getPlainText()
        dispatch({type:'localData/modify_note_content',content})        
    }
    return

}
export default connect(mapStateToProps,mapDispatchToProps)(MyEditor)



