import React from 'react'
import s from './s.css'
import Editor from 'components/editor'
import Header from 'components/header'

function AppView({ Keywords, Notes, SearchBar }) {
    return (
      <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
        <div style={{height:'40px',width:'100%'}}>
            <Header/>
        </div>
        <div style={{flex:'1',display:'flex'}} >
            <div className={s.editor} style={{height:'100%'}}>
                <Editor/>
            </div>
            <div className={[s.scrollbar,s.notes].join(' ')}>
                {Keywords}
                {Notes}
            </div>
        </div>
        {SearchBar}
      </div>
  )
}
export default AppView
