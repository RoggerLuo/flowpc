import React from 'react'

export function Note({click, content}){
    return (
        <div 
          style={{fontSize:'14px',minHeight:'50px',padding:'15px 4px 15px 10px'}} 
          onClick={click}
        >
            <div style={{wordWrap: 'break-word'}}>{content}</div>        
        </div>
    )
}

export function NoteWrapper({ selected, children }){
    let style = {cursor:'pointer',borderRight: '0.5px solid #ccc'}
    let _class = ""
    
    if(selected){
        style = Object.assign({}, style, {backgroundColor: '#e2e2e2' })
        _class = "selectedNote"
    }
    
    return (
      <div style={style} className={_class}>
          {children}
          <div style={{widht:'100%',height:'1px',border:'0.5px solid #ccc'}}></div>
      </div>
    )
}

export default Note

