import React from 'react'
import { connect } from 'dva'
import s from './s.css'

function IndexPage({ advance, hide }) {
    const Keywords = global.flow.search.components.Keywords
    const Notes = global.flow.notes.component
    const Editor = global.flow.editor.component
    const Editor2 = global.flow.editor.component2
    const SearchBar = global.flow.search.components.SearchBar
    const Header = global.flow.header.component
    let style = {}
    if(hide){
        style = { display: 'none'}
    }
    return (
      <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
        <div style={{height:'40px',width:'100%'}}>
            <Header/>
        </div>

        <div style={{flex:'1',display:'flex'}} >
            <div className={advance?s.editor_a:s.editor} style={{height:'100%'}}>
                <Editor/>
            </div>

            <div className={[s.scrollbar,s.notes].join(' ')} style={style}>
                <Keywords/>
                <Notes/>
            </div>
            <div className={advance?s.editor2_a:s.editor2} style={{height:'100%'}}>
                <Editor2/>
            </div>
        </div>
        <SearchBar/>
      </div>
  )
}
function mapStateToProps(state) {
    return { 
        advance: state.header.advance,
        hide: state.header.hideNotes,
    }
}
export default connect(mapStateToProps)(IndexPage)
