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

// Get messages 

export const getMessagesAxios = async (receiver_id) => {
    const data = await axiosInstance.get(`/chat/messages/${receiver_id}/`)
    return data
}