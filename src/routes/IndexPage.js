import React from 'react'
import { connect } from 'dva'
import s from './s.css'

function IndexPage() {
    const Keywords = global.flow.search.components.Keywords
    const Notes = global.flow.notes.component
    const Editor = global.flow.editor.component
    const SearchBar = global.flow.search.components.SearchBar
    return (
      <div style={{height:'100%',display:'flex'}} >
          
          <div className={s.scrollbar} style={{height:'100%',width:'32.2%',overflowY:'auto'}}>
              <Keywords/>
              <Notes/>
          </div>
          
          <div style={{height:'100%',display:'flex',flex:'1'}}>
              <Editor/>
          </div>

          <SearchBar/>
      </div>
  )
}

export default connect()(IndexPage)
