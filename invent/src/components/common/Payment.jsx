import React from 'react'

function Payment() {
  return (
    <>
     <div
              key={1}
              className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
            >
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div className="flex justify-end">
                  <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                      Starter
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                    Trial
                  </p>
                  <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                    Free
                  </p>
                </div>
                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    5 Credits
                  </p>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    1 User
                  </p>
                </div>
              </div>
              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Direct Phone Numbers
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Landline Phone Numbers
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Corporate email addresses
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Propsetcs
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Chrome Extension
                  </p>
                </div>
                <div className="mt-[25px]">
                    <form action="http://localhost:8000/payment/createCheckoutSession/" method='POST'>
                  <button type='submit' className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">
                    Downgrade +
                  </button>
                  </form>
                </div>
              </div>
            </div>
    </>
  )
}

export default Payment