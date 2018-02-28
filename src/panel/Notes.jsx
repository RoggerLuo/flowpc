import React from 'react'
import { connect } from 'dva'
import Note from './note/Note.c'

function Notes({ notes, index, dispatch }) {
    return (
      <div style={{width:'100%'}}>
          {notes.map((entry,ind) => <Note entry={entry} index={ind} _index={index} dispatch={dispatch} key={ind}/>)}
      </div>
    )
}

function mapStateToProps(state) {
    return { 
        notes: state.localData.notes,
        index: state.localData.index
    }
}

export default connect(mapStateToProps)(Notes)

