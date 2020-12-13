import axios from "axios"
import { message } from 'antd'

function ajax(url, data={}, type='GET'){
    return new Promise((resolve, reject)=>{
        let promise
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios({
                method: 'post',
                url: url,
                data: JSON.stringify(data),
                headers: {
                    'Content-Type':'application/json'
                }	
            })
        }
        promise.then(response => {
            resolve(response.data)
        }).catch(error=>{
            message.error('请求出错了:' + error.message)  
        })
    })
}

export default ajax