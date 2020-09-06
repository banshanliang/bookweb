import axios from 'axios'
import store from './store'

export default (url, options={}) => {
    const defaultOptions = {
      method: 'get',
      headers: {
        Accept: 'application/json',
        dataType: "json",
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
    const newOptions = {...defaultOptions, ...options, url}
    let user = store.state;//从vuex获取到tocken
    if (user) {
      newOptions.headers = {...newOptions.headers, Authorization: user.token}
    }
    
    return new Promise((resolve, reject) => {
      axios(newOptions).then((response) => {
          return resolve(response.data)
      }).catch((err) => {
        console.log(err);
      })
    })
  }