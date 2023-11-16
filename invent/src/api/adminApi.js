import axiosInstance from "./axiosInstance";

export const adminLoginAxios = async (logindata)=>{
    const data = axiosInstance.post('/api/adminLogin/',logindata)
    return data
}