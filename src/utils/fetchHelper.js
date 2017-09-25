
import StorageHelper from './StorageHelper';
import environment from '../environment';

const { server, iamServer } = environment;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

function getResponseError(code) {
  return {
    '-1': '服务器异常，请联系网站管理员',
    '401': '您的会话已过期，请重新登录',
    '403': '您的权限受到限制，请咨询管理员获取权限',
    '404': '错误的参数或请求地址，请检查',
    '500': '服务器内部错误',
    'undefined': '请求失败'
  }[code]
}

function isHttpUrl(input) {
  return /^https?:\/\//.test(input)
}

function isIamUrl(input) {
  return /^(sso|iam|iam\-.*)\//.test(input)
}

function isAudioUrl(input) {
  return /^audio\/api\//.test(input)
}

function getHeadersOptions(options) {
  const defaults = {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-User-Token': StorageHelper.getItem('X-User-Token'),
    'X-User-Mobile': StorageHelper.getItem('X-User-Mobile')
  }
  return Object.assign({},defaults,options||{})
}

function getRequestOprions(options) {
  const requestOprions = Object.assign({},options);
  // requestOprions.mode = 'cors';
  // requestOprions.credentials = 'include';
  requestOprions.headers = new Headers(getHeadersOptions(options.headers));
  if (options && options.body) requestOprions.body = JSON.stringify(options.body);
  return requestOprions;
}

function getRequestUrl(input) {
  let requestUrl = ''
  // audio server
  if (isAudioUrl(input)) requestUrl = `${server}${input}`.replace('/approval/api/','/')
  // iam server
  else if (isIamUrl(input)) requestUrl = `${iamServer}${input}`
  // absolute remote url
  else if (isHttpUrl(input)) requestUrl = input
  // current server
  else requestUrl = `${server}${input}`
  return requestUrl
}

function errorHandler(error) {
  // body...
}

function fetchJson(input,init) {
  const requestUrl = getRequestUrl(input);
  const requestInit = getRequestOprions(init||{});
  return fetch(requestUrl,requestInit)
    .then(checkStatus)
    .then(parseJSON)
    .catch(errorHandler)
}

export {
  fetchJson,
  // other helper
}

