// import './flow'
// import './app'
// import './keyboard'
// import './index.css'
import './nw.js'
// global.flow.dispatch = global.app._store.dispatch

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import dva,{ Model, Fetch } from 'dva'
import App from './App'
import './global.css'

const fetch = Fetch({ baseUrl: `http://47.75.9.249:5555` })
dva.start({ sagaInjection: { fetch } })

render(
    <Provider store={dva._store}>
        <App />
    </Provider>,
    document.getElementById('root')
)