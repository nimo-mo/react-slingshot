function getApiPrefix() {
  return process.env.NODE_ENV === 'production' ? '' : storageService.getItem('api_prefix') || 'https://ijapi3.wolaidai.com:9002/approval/api/'
}

function setApiPrefix(input) {
  if (input !== '') {
    storageService.setItem('api_prefix', input)
  }
}

function getIamApiPrefix(input) {
  return {
    'https://ijapi1.wolaidai.com:9002/approval/api/': 'https://ijapi1.wolaidai.com:9002/',
    'https://ijapi2.wolaidai.com:9002/approval/api/': 'https://ijapi2.wolaidai.com:9002/',
    'https://ijapi3.wolaidai.com:9002/approval/api/': 'https://ijapi3.wolaidai.com:9002/',
    'https://ijapi4.wolaidai.com:9002/approval/api/': 'https://ijapi4.wolaidai.com:9002/',
    'https://sjapi.wolaidai.com:9080/approval/api/':  'https://121.201.13.198:38001/'
  }[input] || 'https://management.wolaidai.com/'
}

export {
  getApiPrefix,
  setApiPrefix,
  getIamApiPrefix
}