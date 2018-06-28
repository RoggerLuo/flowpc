import React from 'react'
import { Note, NoteWrapper } from './NoteView'

function NoteContainer({ entry, index, _index, dispatch }){
    const content = entry[6] || entry[2]
    const seleted = (_index === index)
    const click = () => {
        if(global.flow.notSave){
            global.flow.editor.serverSave()
            return
        }
        dispatch({ type: 'localData/point', index }) //itemId, content 
    }
    const modify_time = entry[3]
    const over2months = modify_time < (Date.parse(new Date())/1000 - 2*30*24*60*60)
    return (
        <NoteWrapper selected={seleted} over2months={over2months}>
            <Note click={click} content={content} />
        </NoteWrapper> 
    )
}

export default NoteContainer