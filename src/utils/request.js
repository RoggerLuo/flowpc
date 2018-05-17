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



export default function request(url, {...options}) {
  if (options.method === "POST") {      
      options.body = transformBody(options.body)
  }
  options.credentials = 'include'
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => {
        message.error(`在请求${url}的时候`)
        message.error(`网络错误${err}`)
    })
  function transformBody(body){
      const postdata = new FormData()
      for(let k in body){
          if(body.hasOwnProperty(k)){
              postdata.append(k, body[k])            
          }
      }
      return postdata
  }
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