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


export const addStartupAxios = async (startupData)=>{
    const data = await axios.post('/startup/addStartup/',startupData)
    return data
}


// list user's startups

export const listUserStartupAxios = async ()=> {
    const data = await axios.get('/startup/listUserStartups/')
    return data
}

// payment stripe checkout

export const stripeCeckoutAxios = async () => {
    const data = await axios.post('/payment/createCheckoutSession/')
    return data
}
