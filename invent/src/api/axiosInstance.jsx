import axios from 'axios'
import { jwtDecode } from "jwt-decode";

// const baseURL  = 'http://localhost:8000';
const baseURL  = 'https://invent.lojlee.shop';

const axiosInstance = axios.create({
    baseURL,
})
 

// axiosInstance.interceptors.request.use(
//     (config)=>{
//         const token = localStorage.getItem('userAccessToken')
//         if (token){
//             config.headers['Authorization'] = `Bearer ${token}`
//         }
//         console.log('=================config===================',config);
//         return config
//     },
//     (error)=>{
//         return Promise.reject(error)
//     }
// )




axiosInstance.interceptors.request.use(
    async (config) =>{
        const token = localStorage.getItem('userAccessToken')

        if (token){
            const decodedToken = jwtDecode(token)

            if (decodedToken.exp*1000 < Date.now()){
                const refrshToken = localStorage.getItem('userRefreshToken')
                const response = await axios.post(`${baseURL}/api/refreshToken/`,{'refresh_token':refrshToken})

                if (response.status === 200){
                    const {refresh, access} = response.data
                    localStorage.setItem('userAccessToken',access)
                    localStorage.setItem('userRefreshToken',refresh)
                    config.headers['Authorization'] = `Bearer ${access}`
                }
                else{
                    // if refresh fail , redirect to login or handle it
                }
            }
            else{
                // token is still valid , use it in the request
                config.headers['Authorization'] = `Bearer ${token}`
            }
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default axiosInstance