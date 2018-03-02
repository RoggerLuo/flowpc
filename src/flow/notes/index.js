import { create, _delete } from './actions'
import component from './component'

const notes = {}
notes.delete = _delete
notes.create = create
notes.component = component
global.flow = global.flow || {}
global.flow.notes = notes
