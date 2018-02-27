import React from 'react'

function Note({ content, isSelected, click }){
    let outerStyle = {cursor:'pointer',borderRight: '0.5px solid #ccc'}
    let outerClass = ""
    
    if(isSelected){
        outerStyle = Object.assign({}, outerStyle,{backgroundColor: '#e2e2e2' })
        outerClass = "selectedNote"
    }
    
    return (
      <div style={outerStyle} className={outerClass}>
        <div 
          style={{fontSize:'14px',minHeight:'50px',padding:'15px 4px 15px 10px'}} 
          onClick={click}
        >
          <div>{content}</div>
        </div>
        
        <div style={{widht:'100%',height:'1px',border:'0.5px solid #ccc'}}></div>

      </div>
    )
}

export default Note

