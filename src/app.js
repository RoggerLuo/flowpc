import React from 'react'
import { connect, Model, Keyboard } from 'dva'
// import Keywords from 'components/Keywords'
import Notes, * as notes from 'components/notes'
import * as editor from 'components/editor'
// import Editor2 from 'components/editor.component2'
// import SearchBar from 'components/search.components.SearchBar'
import AppView from './AppView'
import model from './model'
import keyboardEvents from './keyboard'
Model.create(model)

const ctrlN = () => {
    const itemId = Date.parse(new Date()) / 1000
    editor.createNew(itemId)
    notes.add(itemId)    
}

const NotesContainer = connect(state=>state.app)(app=><Notes notes={app.notes} index={app.index}/>)

const kb = new Keyboard(document.body)
class App extends React.Component {
    constructor(props) {
        debugger
        super(props)
        // this.state = { editorVisible: false }
        notes.fetchData()
    }
    componentDidMount(){
        // history.fetch()
        kb.keybind(({keyMap,meta,ctrl,shift},catcher)=>{
            catcher(keyMap.n, {ctrl} ,ctrlN) 
        })
        //keyboardEvents)
    }
    render(){
        return (
            <AppView 
                Keywords={null} 
                Notes={<NotesContainer/>} 
                SearchBar={null}
            />
        )
    } 
}
export default connect(state=>state.app)(App)
