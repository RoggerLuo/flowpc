import React from 'react'
import { connect, Model } from 'dva'
import img from './bg.png'
import s from './s.css'
import model from './model'
Model.create(model)
function saveNote(){
    Model.dispatch({ type: 'editor/saveNote'})
}

function onChange(e) {
    // global.flow.notSave = true
    Model.dispatch({ type: 'editor/change', key:'content', value: e.target.value })
    Model.dispatch({ type: 'editor/change', key: 'notSave', value: true })    
}

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
            <textarea 
                style={style} 
                rows={4} 
                placeholder="Do less, get more" 
                value={content}
                onChange={onChange}
                id="editor"
                className={s.scrollbar}
            />
        </div>
    )
}
export default connect(state=>state.editor)(Editor)
