import axios from  "axios";

axios.defaults.timeout = 100000;

var data = JSON.stringify({
  "bundleIdentifierOrAppLaunchPath": "C:\\WINDOWS\\System32\\calc.exe",
  "isUWPApp": "true"
});

var config = {
  method: 'post',
  url: 'http://localhost:8080/windows/launchApp',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};



/**
 * @param url  
 * @param params
 * @returns {Promise}
 */
function get(url, data) {
  return new Promise((resolve, reject) => {
    var config = {
      method: 'get',
      url: url,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config).then((response) => {
        resolve(JSON.stringify(response.data));
      })
      .catch((error) => {
        reject(error);
      });
  });
}


function post(url, data) {
  return new Promise((resolve, reject) => {
    var config = {
      method: 'post',
      url: url,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config).then((response) => {
        resolve(JSON.stringify(response.data));
      })
      .catch((error) => {
        reject(error);
      });
  });
}


export function http(fetch, url, data) {
  return new Promise((resolve, reject) => {
    switch (fetch) {
      case "get":
        console.log("begin a get request,and url:", url);
        get(url, data)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request GET failed.", error);
            reject(error);
          });
        break;
      case "post":
        post(url, data)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request POST failed.", error);
            reject(error);
          });
        break;
      default:
        break;
    }
  });
}