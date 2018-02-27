import React from 'react'
import { connect } from 'dva'
const flow = global.flow

function Note({ noteEntry, currentItemId }){
    const itemId = noteEntry[1]
    const content = noteEntry[2]
    
    let style = {cursor:'pointer',borderRight: '0.5px solid #ccc'}
    let classStr = ""
    
    if(itemId === currentItemId){
        style = Object.assign({},style,{backgroundColor: '#e2e2e2'})
        classStr = "selectedNote"
    }
    
    return (
      <div style={style} className={classStr}>
        <div 
          style={{fontSize:'14px',minHeight:'50px',padding:'15px 4px 15px 10px'}} 
          onClick={()=>flow.actions.clickNote(itemId, content)}
        >
          <div>{content}</div>
        </div>
        <div style={{widht:'100%',height:'1px',border:'0.5px solid #ccc'}}></div>
      </div>
    )
}

function Notes({ notes, currentItemId }) {
    return (
      <div style={{width:'100%'}}>
          {notes.map((el,ind)=><Note noteEntry={el} currentItemId={currentItemId} key={ind}/>)}
      </div>
    )
}

function mapStateToProps(state) {
    return { 
      notes:state.localData.notes,
      currentItemId:state.localData.itemId
    }
}

export default connect(mapStateToProps)(Notes)

