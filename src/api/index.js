import ajax from './ajax'

const BASE = ''
export const reqLogin = (username, password) => ajax(BASE + 'user/login', {username, password}, 'POST')