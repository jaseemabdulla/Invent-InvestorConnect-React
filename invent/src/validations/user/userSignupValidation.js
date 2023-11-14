import * as yup from 'yup'

const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,16}$/;

export const signupSchema = yup.object().shape({
    email:yup.string().email('Please enter valid email').required('Reqiered'),
    password:yup.string()
        .min(5,"Password should contain 5-16 characters")
        .max(16,"Password should contain 5-16 characters")
        .matches(passwordRule,'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 5-16 characters long.')
        .required('Reqiered'),
    phone_number: yup
        .number("Phone number must be a 10 digit number")
        .positive()
        .integer()
        .test("len", "Phone number should be a 10 digit number", (val) =>
          /^\d{10}$/.test(val)
        )
        .required("Required"), 
    first_name: yup.string().required('Requierd'),   
    
})