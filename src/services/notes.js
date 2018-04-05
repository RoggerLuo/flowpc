import request from '../utils/request'
import { host } from './config'

export function get() {
    const options = { method: "GET" }
    return request(host + '/notes', options)
}

export function _delete(itemId) {
    const options = { method: "DELETE" }
    return request(host + '/note/' + itemId, options)
}

export function touch(itemId, content) {
    const options = { method: "POST", body: { content } }
    return request(host + '/note/' + itemId, options)
}
