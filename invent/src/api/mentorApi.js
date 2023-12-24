import axiosInstance from "./axiosInstance";

// list all mentors

export const mentorListAxios = async () => {
    const data  = await axiosInstance.get('/mentor/listMentors/')
    return data
}

// list all entrepreneurs associated wite a mentor

export const listEntrepreneursOfMentorAxios = async () => {
    const data = await axiosInstance.get('/mentor/listEntrepreneursOfMentor/')
    return data
}