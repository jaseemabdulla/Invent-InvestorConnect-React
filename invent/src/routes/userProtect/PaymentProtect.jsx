import React, { useEffect, useState } from 'react'
import { checkPaymentAxios } from '../../api/commonApi'
import { Navigate } from 'react-router-dom'

function PaymentProtect(props) {

    const [paid, setPaid] = useState(null)
    const [error, setError] = useState('')


    useEffect(() => {
        const checkPayment = async () => {
            try {
                const res = await checkPaymentAxios();
                setPaid(true);
            } catch (error) {
                console.log('================eror',error);
                if (error.response.data.message){
                    setError(error.response.data.message)
                }
                else{
                    setError('complete payment for access')
                }
                setPaid(false)
            }
        };

        checkPayment();
    }, []);
    if (paid === null) {
        // Payment status is still unknown, you might want to show a loading indicator or something else
        return null;
      }
    
      if (paid) {
        console.log('Payment is valid');
        return props.children;
      } else {
        // Redirect to the home page or any other page when payment is not valid
        return <Navigate to="/entrepreneur/startupStatus" state={{error}} />;
      }  

}

export default PaymentProtect