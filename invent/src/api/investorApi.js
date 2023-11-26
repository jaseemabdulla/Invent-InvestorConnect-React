import axios from "./axiosInstance";


export const investorSignupAxios = async (signupData) =>{
    console.log(signupData,'lllllllllllllllllllll');
    const data = await axios.post('/api/investorSignup/',signupData)
    return data
}