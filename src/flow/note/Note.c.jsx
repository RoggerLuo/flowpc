import React from 'react'
import { Note, NoteWrapper } from './Note.p'

function NoteContainer({ entry, index, _index, dispatch }){
    const content = entry[2]     
    const seleted = (_index === index)
    const click = () => {
        if(global.flow.notSave){
            global.flow.editor.serverSave()
            return
        }
        dispatch({ type: 'localData/load', index }) //itemId, content 
    }
    return (
        <NoteWrapper selected={seleted}>
            <Note click={click} content={content}/>
        </NoteWrapper> 
    )
}

export default NoteContainer