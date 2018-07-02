import React from 'react'
import { connect, Model } from 'dva'
import model from './model'
Model.create(model)
import img from './bg.png'
import Textarea from './Textarea'
function Editor({ content, notSave }) {
    let style = { 
        width:'100%',
        padding:'10px',
        fontSize:'19px',
        color:'black',
        border:'none',
        backgroundColor:'white',
        outline:'none',
        marginTop:'1px'
    }
    if(notSave) style = { ...style, backgroundImage:`url(${img})` }
    return (
        <div style={{height:'100%',width:'100%',minWidth:'238px',display:'flex',borderRight: '1px solid #ccc'}}>
            <Textarea style={style} content={content}/>
        </div>
    )
}
export default connect(state=>state.editor)(Editor)