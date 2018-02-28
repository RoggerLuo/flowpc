import React from 'react'
import { connect } from 'dva'
import { Note, NoteWrapper } from './Note.p'

function NoteContainer({ entry, ind, _itemId, dispatch }){
    const itemId = entry[1]
    const content = entry[2]     
    const seleted = (_itemId === itemId)
    const click = () => dispatch({ type: 'localData/load', itemId, content  }) //ind
    return (
        <NoteWrapper selected={seleted}>
            <Note click={click} content={content}/>
        </NoteWrapper> 
    )
}

function mapStateToProps(state) {
    return { _itemId: state.localData.itemId}
}

export default connect(mapStateToProps)(NoteContainer)

