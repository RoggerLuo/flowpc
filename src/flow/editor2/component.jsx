import React from 'react'
import { connect } from 'dva'
import img from './bg.png'

const flow = global.flow
function Editor({ content, notSave }) {
    let style = { 
        width:'100%',
        padding:'10px',
        fontSize:'19px',
        color:'black',
        border:'none',
        backgroundColor:'white',
        outline:'none'
    }
    if(notSave){
        style = Object.assign({},style,{ backgroundImage:`url(${img})` })
    }
    return (
        <div style={{height:'100%',width:'100%',minWidth:'238px',display:'flex'}}>
            <textarea 
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
