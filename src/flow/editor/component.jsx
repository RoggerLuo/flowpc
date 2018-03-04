import React from 'react'
import { connect } from 'dva'
import { Input } from 'antd'
const { TextArea } = Input
const flow = global.flow

function Editor({ content, notSave }) {
    let style = {fontSize:'17px',color:'black',border:'none',backgroundColor:'white'}
    if(notSave){
        style = Object.assign({},style,{ backgroundColor:'#f1f6ff' })
    }
    return (
        <div style={{height:'100%',width:'100%',display:'flex'}}>
            <TextArea 
                style={style} 
                rows={4} 
                placeholder="put text..." 
                value={content}
                onChange={flow.editor.onChange}
                id="editor"
            />
        </div>
    )
}

function mapStateToProps(state) {
    const note = state.localData.notes[state.localData.index]
    if(note === undefined){
        return { content: '' }      
    }
    return { content: note[2], notSave: state.localData.notSave }
}

export default connect(mapStateToProps)(Editor)
