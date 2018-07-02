import React from 'react'
import { connect, Model, Keyboard } from 'dva'
// import Keywords from 'components/Keywords'
import Notes from 'components/notes'
// import Editor from 'components/editor'
// import Editor2 from 'components/editor.component2'
// import SearchBar from 'components/search.components.SearchBar'
import AppView from './AppView'
import model from './model'
import keyboardEvents from './keyboard'
Model.create(model)
const NotesContainer = connect(state=>state.app)(app=><Notes notes={app.notes} index={app.index}/>)
const kb = new Keyboard(document.body)
class App extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { editorVisible: false }
        // l.fetchData(notes => l.importDraftjsCore())
        Model.dispatch({ type:'app/fetchNotes' })
    }
    componentDidMount(){
        // history.fetch()
        kb.keybind(keyboardEvents)
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
