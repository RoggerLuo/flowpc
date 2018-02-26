import React from 'react'
import { connect } from 'dva'
import Search from './Search'
import Notes from './Notes'
import Editor from './Editor'
import bindKeyboard from './keyboard'
import s from './s.css'

document.body.onkeydown = bindKeyboard

function IndexPanel() {
  return (
    <div style={{height:'100%',display:'flex'}} >
      <div className={s.scrollbar} style={{height:'100%',width:'32.2%',overflowY:'auto'}}>
        <Search />
        <Notes />
      </div>
      <div style={{height:'100%',display:'flex',flex:'1'}}>
        <Editor/>
      </div>
    </div>
  )
}

export default connect()(IndexPanel)
