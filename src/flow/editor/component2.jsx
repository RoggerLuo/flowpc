import React from 'react'
import { connect } from 'dva'
import MDReactComponent from 'markdown-react-js'

function Editor({ content }) {
    content = content || ''
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
            <div style={style}>
                <MDReactComponent text={content} />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const note = state.localData.index2
    return { content: note[2] }
}

export default connect(mapStateToProps)(Editor)

/*
import MDReactComponent from 'markdown-react-js'
*/