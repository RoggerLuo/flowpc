import React from 'react'
import { connect } from 'dva'
import { Input } from 'antd'
import { onChange } from './actions'
const { TextArea } = Input

function Editor({ content }) {
  return (
    <div style={{height:'100%',width:'100%',display:'flex'}}>
        <TextArea rows={4} 
            style={{fontSize:'17px',color:'black',border:'none',backgroundColor:'white'}} 
            placeholder="put text..." 
            value={content}
            onChange={onChange}
            id="editor"
        />
    </div>
  )
}

function mapStateToProps(state) {
    const itemId = state.localData.itemId
    const note = state.localData.notes.filter(el => el[1] === itemId)[0]
    if(note === undefined){
      return { content: '' }      
    }
    return { content: note[2] }
}

export default connect(mapStateToProps)(Editor)
