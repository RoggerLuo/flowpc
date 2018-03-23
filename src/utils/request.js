import { message } from 'antd'
import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */



export default function request(url, options) {
  const optionsCloned = Object.assign({},options)
  if (options.method === "POST") {
      const postdata = new FormData()
      for(let k in options.body){
          if(options.body.hasOwnProperty(k)){
              postdata.append(k, options.body[k])            
          }
      }
      optionsCloned.body = postdata
  }
  optionsCloned.credentials = 'include'
  return fetch(url, optionsCloned)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => {
        message.error(`访问${url}的时候`)
        message.error(`网络错误${err}`)
    })
}


/*
fetch("/search/project/", {
  method: "POST",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: "q=参数q"
}).then(function(response) {
  // do sth
});*/