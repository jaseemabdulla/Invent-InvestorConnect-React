import axios from './axiosInstance'


export const userLoginVerification = async (logindata) =>{
   
    const data = await axios.post('/api/login/',logindata);
    return data;
};


export const userSignupApi = async (signupdata) =>{
 
    const data = await axios.post('/api/signup/',signupdata);
    console.log(data,"data");
    return data
}