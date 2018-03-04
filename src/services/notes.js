import request from '../utils/request'
import { host } from './config'

export function notes_get() {
    const options = { method: "GET" }
    return request(host + '/notes', options)
}
export function note_del(itemId) {
    const options = { method: "DELETE" }
    return request(host + '/note/' + itemId, options)
}

export function note_touch(itemId, content) {
    const options = { method: "POST", body: { content } }
    return request(host + '/note/' + itemId, options)
}

