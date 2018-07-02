import React from 'react'
import { Model, Keyboard } from 'dva'
import s from './s.css'
import keyboardEvents from './keyboard/keyboardEvents'
function saveNote(){
    Model.dispatch({ type: 'editor/saveNote'})
}
function onChange(e) {
    Model.dispatch({ type: 'editor/change', key:'content', value: e.target.value })
    Model.dispatch({ type: 'editor/change', key: 'notSave', value: true })    
}
class Textarea extends React.Component { 
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        const k = new Keyboard(this.inputRef.current)
        k.keybind(keyboardEvents)
    }
    render() {
        return (
            <textarea 
                style={this.props.style} 
                rows={4} 
                placeholder="Do less, get more" 
                value={this.props.content}
                onChange={onChange}
                ref={this.inputRef}
                className={s.scrollbar}
            />
        )
    }
}
export default Textarea