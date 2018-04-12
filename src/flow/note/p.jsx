import React from 'react'
import MDReactComponent from 'markdown-react-js'

export function Note({click, content}){
    return (
        <div 
          style={{fontSize:'17px',lineHeight:'1.5',minHeight:'50px',padding:'15px 10px 15px 10px'}} 
          onClick={click}
        >
            <MDReactComponent text={content} /> 
        </div>
    )
}

export function NoteWrapper({ selected, children, over2months }){
    let style = { cursor:'pointer', borderRight: '0.5px solid #ccc' }
    let _class = ""
    
    if(selected){
        style = { borderRight: '0.5px solid #ccc', backgroundColor: '#ececec' } 
        _class = "selectedNote"
    }
    if(over2months){
        style = Object.assign({}, style, { color: 'orange' })
    }
    return (
      <div style={style} className={_class}>
          {children}
          <div style={{widht:'100%',height:'1px',border:'0.5px solid #ccc'}}></div>
      </div>
    )
}

export default Note

/*
<div 
    style={{wordWrap: 'break-word'}}
    dangerouslySetInnerHTML={{__html: content.replace(/\n/g, "<br />") }}
>
</div>        

*/

