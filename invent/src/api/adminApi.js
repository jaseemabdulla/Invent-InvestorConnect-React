import axiosInstance from "./axiosInstance";

export const adminLoginAxios = async (logindata)=>{
    const data =await axiosInstance.post('/api/adminLogin/',logindata)
    return data
}


export const adminInvestorsListAxios = async () =>{
    const data = await axiosInstance.get('/api/investorList/')
    return data
}

export const adminEntrepreneursListAxios = async () =>{
    const data = await axiosInstance.get('/api/entrepreneurList/')
    return data
}

export const adminBlockUserAxios = async (user_id) => {
    const data = await axiosInstance.post(`/api/userblock/${user_id}`)
    return data
}