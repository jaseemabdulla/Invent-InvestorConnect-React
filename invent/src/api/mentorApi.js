import axiosInstance from "./axiosInstance";

// list all mentors

export const mentorListAxios = async () => {
    const data  = await axiosInstance.get('/mentor/listMentors/')
    return data
}