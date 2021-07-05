import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode" //распарсить токен

export const registration = async (email, password) => {
    const {data} = await $host.post("api/user/registration", {email, password, role: "ADMIN"})
    localStorage.setItem('token', data.token) //храним токен
    return jwt_decode(data.token) // ранее response
} 

export const login = async (email, password) => {
    const {data} = await $host.post("api/user/login", {email, password})
    localStorage.setItem('token', data.token) //храним токен
    return jwt_decode(data.token) // ранее response
}

export const check = async () => {
    const {data} = await $authHost.get("api/user/auth") //post
    localStorage.setItem('token', data.token) 
    return jwt_decode(data.token) // ранее response
}