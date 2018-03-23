import request from '../utils/request'
import { host } from './config'

export function get() {
    const options = { method: "GET" }
    return request(host + '/header', options)
        .then((text)=>{
            const dom = document.getElementById('customized-header-text')
            dom.innerText = text[3]
        })
}

export function post(text) {
    const options = { method: "POST", body: { text } }
    return request(host + '/header', options)
}
