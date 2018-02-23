import React from 'react'
import { connect } from 'dva'
import { clickNote } from './actions'

function Note({data}){
    return (
      <div style={{cursor:'pointer'}}>
        <div style={{minHeight:'50px',padding:'10px 5px'}} onClick={()=>clickNote(data[1],data[2])}>
          <div>{data[2]}</div>
        </div>
        <div style={{widht:'100%',height:'1px',border:'0.5px solid #ccc'}}></div>
      </div>
    )
}

function Notes({notes}) {
  return (
    <div style={{width:'100%'}}>
        {notes.map((el,ind)=><Note data={el} key={ind}/>)}
    </div>
  )
}

function mapStateToProps(state) {
    return {notes:state.data.notes}
}

export default connect(mapStateToProps)(Notes)

/*
style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap',overflow: 'hidden',maxHeigth: '100px'}}
*/