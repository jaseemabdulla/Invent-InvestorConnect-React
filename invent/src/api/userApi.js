import axios from './axiosInstance'


export const userLoginVerification = async (logindata) =>{
   
    const data = await axios.post('/api/login/',logindata);
    return data;
};