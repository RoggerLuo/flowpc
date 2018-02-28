import React from 'react'
import { connect } from 'dva'
import { Input } from 'antd'
const { TextArea } = Input
const flow = global.flow

function Editor({ content }) {
  return (
    <div style={{height:'100%',width:'100%',display:'flex'}}>
        <TextArea rows={4} 
            style={{fontSize:'17px',color:'black',border:'none',backgroundColor:'white'}} 
            placeholder="put text..." 
            value={content}
            onChange={flow.actions.onChange}
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
    return { content: note[2] }
}

export default connect(mapStateToProps)(Editor)
