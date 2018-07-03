import { Model } from 'dva'
// import { create, _delete } from './actions'
import component from './Notes'
export default component
// const notes = {}
// notes.delete = _delete
// notes.create = create
// notes.component = component

// global.flow = global.flow || {}
// global.flow.notes = notes
export function add(itemId){
    Model.dispatch({type:'notes/add',itemId})
}
export function fetchData(){
    Model.dispatch({ type:'notes/fetchNotes' })
}