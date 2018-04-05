import React from 'react'
import { connect } from 'dva'
import s from './s.css'

// const flow = global.flow
function Editor({ content }) {
    let style = { 
        width:'100%',
        padding:'10px',
        fontSize:'19px',
        color:'black',
        border:'none',
        backgroundColor:'white',
        outline:'none'
    }
    return (
        <div style={{height:'100%',width:'100%',minWidth:'238px',display:'flex'}}>
            <textarea 
                style={style} 
                rows={4} 
                placeholder="put text..." 
                value={content}
                id="editor"
                className={s.scrollbar}
            />
        </div>
    )
}

function mapStateToProps(state) {
    const note = state.localData.index2
    return { content: note[2] }
}

export default connect(mapStateToProps)(Editor)
