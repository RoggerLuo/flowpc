import React from 'react'
import { connect } from 'dva'
import Note from './note/Note.c'

function Notes({ notes }) {
    return (
      <div style={{width:'100%'}}>
          {notes.map((entry,ind) => <Note entry={entry} ind={ind} key={ind}/>)}
      </div>
    )
}

function mapStateToProps(state) {
    return { notes: state.localData.notes}
}

export default connect(mapStateToProps)(Notes)

