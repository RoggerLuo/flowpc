import request from '../utils/request'
import { host } from './config'

export function search(text) {
    const options = { method: "GET" }
    return request(host + '/search/' + text, options)
}
