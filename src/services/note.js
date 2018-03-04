import request from '../utils/request'
import { host } from './config'

export function _delete(itemId) {
    const options = { method: "DELETE" }
    return request(host + '/note/' + itemId, options)
}

export function post(itemId, content) {
    const options = { method: "POST", body: { content } }
    return request(host + '/note/' + itemId, options)
}
