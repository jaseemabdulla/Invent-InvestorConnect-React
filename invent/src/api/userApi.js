import axios from './axiosInstance'


export const userLoginVerification = async (logindata) =>{
    console.log('===============login==========',logindata);
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

export const listUserStartupAxios = async (page)=> {
    const data = await axios.get(`/startup/listUserStartups/?page=${page}`)
    return data
}

// payment stripe checkout

export const stripeCeckoutAxios = async () => {
    const data = await axios.post('/payment/createCheckoutSession/')
    return data
}

// payment Success

export const stripePaymentSuccessAxios = async (session_id) => {
    const data = await axios.post('/payment/paymentSeccess/',session_id)
    return data
}

// list all startups

export const lsitAllStartupAxios = async (page) => {
    const data = await axios.get(`/startup/listAllStartups/?page=${page}`)
    return data
}

// list Filtered startups

export const lsitFilteredStartupAxios = async (page,industry) => {
    const data = await axios.get(`/startup/listAllStartups/?page=${page}&startup_industry=${industry}`)
    return data
}

// make mentor Requests

export const makeMentorRequestAxios = async () => {
    const data = await axios.post('/mentor/createMentorRequest/')
    return data
}

// get mentor request obj

export const getMentorRequestobj = async () => {
    const data = await axios.get('/mentor/getMentorRequesObj/')
    return data
}



