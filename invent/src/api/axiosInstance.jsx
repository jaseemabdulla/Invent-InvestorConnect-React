import axios from 'axios'
import { jwtDecode } from "jwt-decode";

const baseURL  = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL,
})
 

axiosInstance.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('userToken')
        if (token){
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)


export default axiosInstance

// axiosInstance.interceptors.request.use(
//     async (config) =>{
//         const token = JSON.parse(localStorage.getItem('userToken'))
//         console.log('ddddddddddddddddddddddddddddddddd',token)

//         if (token && token.access){
//             const decodedToken = jwtDecode(token.access)

//             if (decodedToken.exp*1000 < Date.now()){
//                 const response = await axios.post(`${baseURL}/api/refresh/`,{refresh:token.refresh})

//                 if (response.status === 200){
//                     const newToken = response.data
//                     localStorage.setItem('userToken',JSON.stringify(newToken))
//                     config.headers.Authorization = `Bearer ${newToken.access}`
//                 }
//                 else{
//                     // if refresh fail , redirect to login or handle it
//                 }
//             }
//             else{
//                 // token is still valid , use it in the request
//                 config.headers.Authorization = `bearer ${token.access}`
//             }
//         }
//         return config
//     },
//     (error)=>{
//         return Promise.reject(error)
//     }
// )