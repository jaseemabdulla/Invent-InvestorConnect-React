import axiosInstance from "./axiosInstance";

// get startupIndustries 

export const lsitStartupIndustryAxios = async () =>{
    const data = await axiosInstance.get('/startup/industryChoices/')
    return data
}

//Get payment status

export const checkPaymentAxios = async () => {
    const data = await axiosInstance.get('/payment/paymentValidation/')
    return data
}