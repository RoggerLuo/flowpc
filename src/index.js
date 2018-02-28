import flow from './flow'
import app from './app'
import './keyboard'
import './index.css'

flow.dispatch = app._store.dispatch

