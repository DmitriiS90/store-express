import axios from "axios"

const REACT_APP_API_URL = "http://localhost:5000/"  // process.env.REACT_APP_API_URL

const $host = axios.create({
    baseURL: REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: REACT_APP_API_URL
})

const authInterceptor = (config) => {   // ф-я принимающая config
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)                          //перехватчик


export {
    $host,
    $authHost
}