import request from '../utils/request';
import { host } from './config'

export function notes_get(){
    const options = { method: "GET" }
    return request(host + '/notes', options)
        .then(data=>data.data)
}

export function getCommentReq(dirId) {
    const options = { method: "GET" }
    return request(host + '/comment/'+dirId, options)
        .then(function(data) {
            // console.log(data.results)
            return data.results
        })
}

export function createCommentReq(dirId,content) {
    
}

export function getShortcutsReq( appId ) {
    const options = { method: "GET" }
    return request(host + '/detail/getShortcuts/' + appId, options)
        .then(function(data) {
            console.log(data.results)
            return data.results
        })
}

export function logReq(fileId,appId) {
    const options = { method: "POST", body: {fileId,appId} }
    return request(host + '/detail/insertOneLog', options)
        .then(function(data) {
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

export function get( appKey, father) {
    const options = { method: "GET" }
    return request(host + '/detail/getList/' + appKey + '/' + father, options)
        .then(function(data) {
            // console.log(data.results)
            return data.results
        })
}

export function upload( formData, uploading, notiKey) {
    return new Promise(resolve => {
        const option = {
            url:host + '/detail/upload',
            uploading
        } 
        const xhr = new XMLHttpRequest()
        // if(option.maxSize &&  input.files[0].size > option.maxSize * 1024 * 1024){
        //         content: '请上传小于'+option.maxSize+'M的文件',
        // }
        xhr.open('post', option.url);
        xhr.withCredentials = true;
        xhr.onreadystatechange = function(){
            if(xhr.status === 200){
                if(xhr.readyState === 4){
                    console.log('success upload')
                    resolve(JSON.parse(xhr.responseText))
                }
            }else{
                console.log('success failed')
            }
        }
        xhr.upload.onprogress = function(event){
            var pre = Math.floor(100 * event.loaded / event.total);
            if(option.uploading instanceof Function){
                option.uploading(pre);
            }
            const progressDOM = document.getElementsByClassName(notiKey)[0] //'my-react-notification'
            if(progressDOM){
                progressDOM.children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].style.width=pre+'%'                
                progressDOM.children[0].children[0].children[1].children[0].children[0].children[1].innerText = pre+'%'             
                if(pre===100){
                    progressDOM.children[0].children[0].children[1].children[0].children[0].innerHTML = ' <i class="anticon anticon-spin anticon-loading" ></i> 正在处理中'
                }
            }
        }
        xhr.send(formData)
    })
}

export function createDirReq(fileName,father,appId) {
    const options = { method: "POST", body: {fileName,father,appId} }
    return request(host + '/detail/createDir', options)
        .then(function(data) {
            return data.results
        })
}
export function createLinkReq(fileName,father,appId,link) {
    const options = { method: "POST", body: {link,fileName,father,appId} }
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


export function fileDelete(fileId) {
    const options = { method: "DELETE" }
    return request(host + '/detail/' + fileId, options)
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
