import React from 'react'
import { connect } from 'dva'
import s from './s.css'

function IndexPage() {
    const Keywords = global.flow.search.components.Keywords
    const Notes = global.flow.notes.component
    const Editor = global.flow.editor.component
    const SearchBar = global.flow.search.components.SearchBar
    const Header = global.flow.header.component
    return (
      <div style={{height:'100%'}}>
        <div style={{height:'7%',width:'100%'}}>
            <Header/>
        </div>

        <div style={{height:'93%',display:'flex'}} >
            <div className={s.scrollbar} style={{height:'100%',width:'32.2%',overflowY:'auto'}}>
                <Keywords/>
                <Notes/>
            </div>
            
            <div style={{height:'100%',display:'flex',flex:'1'}}>
                <Editor/>
            </div>

            <SearchBar/>
        </div>
      </div>
  )
}

export default connect()(IndexPage)
