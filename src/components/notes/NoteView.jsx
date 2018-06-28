import React from 'react'
// import MDReactComponent from 'markdown-react-js'
import { BaseEditor, startFromText } from 'components/draftEditor'
function Core({ content }) {
    return (<BaseEditor editorState={startFromText(content)} readOnly={true}/>)
}

export function Note({click, content}){
    return (
        <div 
          style={{fontSize:'17px',lineHeight:'1.5',minHeight:'50px',padding:'15px 10px 15px 10px'}} 
          onClick={click}
        >
            <Core content={content}/>
        </div>
    )
}
//<MDReactComponent text={content} /> 

export function NoteWrapper({ selected, children, over2months }){
    let style = { cursor:'pointer'} //, borderRight: '0.5px solid #ccc' borderRight: '0.5px solid #ccc', 
    let _class = ""
    
    if(selected){
        style = { backgroundColor: '#ececec' } 
        _class = "selectedNote"
    }
    if(over2months){
        style = Object.assign({}, style, { color: 'orange' })
    }
    return (
      <div style={style} className={_class}>
          {children}
          <div style={{widht:'100%',height:'1px',borderBottom:'0.5px solid #ccc'}}></div>
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

