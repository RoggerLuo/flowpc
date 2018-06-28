import React from 'react'
// import { connect } from 'dva'
import Note from './Note'

function Notes({ notes, index }) {
    return (
        <div style={{width:'100%'}}>
            { notes.slice(0,20).map((entry,ind) => <Note entry={entry} index={ind} _index={index} key={ind}/>) }
        </div>
    )
}
export default Notes


