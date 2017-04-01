class StorageHelper {
  static setItem(key, value, options={}) {
    if (options.expire) options.storeTime = new Date().getTime() + options.expire*24*60*60*1000
    localStorage.setItem(key, JSON.stringify({
      value,
      options
    }))
  }

  static getItem(key){
    const data = JSON.parse(localStorage.getItem(key));
    if (data === null) return null
    const { value, options } = data
    if (options.expire === undefined) {
      return value
    } else {
      if (options.storeTime - new Date().getTime() > 0) {
        return value
      } else {
        localStorage.removeItem(key);
        return null
      }
    }
  }

  static removeItem(key) {
    localStorage.removeItem(key)
  }

  static clear() {
    localStorage.clear()
  }

}

export default StorageHelper;