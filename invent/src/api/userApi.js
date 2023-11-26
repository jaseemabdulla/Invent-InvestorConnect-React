import axios from './axiosInstance'


export const userLoginVerification = async (logindata) =>{
    const data = await axios.post('/api/login/',logindata);
    return data;
};


export const userSignupApi = async (signupdata) =>{
    const data = await axios.post('/api/entrepreneurSignup/',signupdata);
    return data
}


export const updateEntrepreneurProfileAxios = async (editdata) =>{
    const data  = await axios.post('/api/updateEnterpreneur/',editdata)
    return data
}
