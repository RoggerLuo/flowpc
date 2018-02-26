import request from '../utils/request';
import { host } from './config'

export function notes_get() {
    const options = { method: "GET" }
    return request(host + '/notes', options)
        .then(data => data.data)
}
export function note_del(itemId) {
    const options = { method: "DELETE" }
    return request(host + '/note/' + itemId, options)
        .then(data => data.data)
}

export function note_touch(itemId, content) {
    const options = { method: "POST", body: { content } }
    return request(host + '/note/' + itemId, options)
        .then(data => data.data)
}



export function getCommentReq(dirId) {
    const options = { method: "GET" }
    return request(host + '/comment/' + dirId, options)
        .then(function(data) {
            // console.log(data.results)
            return data.results
        })
}

export function createCommentReq(dirId, content) {

}

export function getShortcutsReq(appId) {
    const options = { method: "GET" }
    return request(host + '/detail/getShortcuts/' + appId, options)
        .then(function(data) {
            console.log(data.results)
            return data.results
        })
}


export function fileDownload() {
    const options = { method: "GET" }
    return request(host + '/detail/download?mediaId=Z3JvdXAxL00wMC8wNi8yMi9DaTh4Q0ZtQzdpbUFZRG1SQUFBMnJ5QTlBTDQ0OS5qcGVn', options)
        .then(function(data) {
            console.log(data.results)
            return data.results
        })
}


export function createDirReq(fileName, father, appId) {
    const options = { method: "POST", body: { fileName, father, appId } }
    return request(host + '/detail/createDir', options)
        .then(function(data) {
            return data.results
        })
}
export function createLinkReq(fileName, father, appId, link) {
    const options = { method: "POST", body: { link, fileName, father, appId } }
    return request(host + '/detail/createLink', options)
        .then(function(data) {
            return data.results
        })
}

export function refresh(appKey, hash) {
    const options = { method: "GET" }
    return request(host + '/bug/' + appKey + hash, options)
        .then(function(data) {
            console.log(data.results)
            return data.results
        })
}




export function getType(appKey) {
    const options = { method: "GET" }
    return request(host + '/bug/type/' + appKey, options)
        .then(function(data) {
            return data.results
        })
}