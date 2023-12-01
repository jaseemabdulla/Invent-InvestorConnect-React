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

// list all pending startups 

export const listPendingStartupAxios = async () => {
    const data = await axiosInstance.get('/startup/listPendingStartups/')
    return data
}

// list all pending startups 

export const listApprovedStartupAxios = async () => {
    const data = await axiosInstance.get('/startup/listApprovedStartups/')
    return data
}

// list all pending startups 

export const listRejectedStartupAxios = async () => {
    const data = await axiosInstance.get('/startup/listRejectedStartups/')
    return data
}

// get a single startup 

export const getSingleStartupAxios = async (startupId) => {
    const data = await axiosInstance.get(`/startup/getSingleStartup/${startupId}/`)
    return data
}


// startup status change

export const updateStartupStatusAxios = async (startupId,status) => {
    const data = await axiosInstance.patch(`/startup/updateStartupStatus/${startupId}/`,status)
    return data
}