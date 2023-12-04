import React from 'react'

function Footer() {
  return (  
    <>
    {/* section footer */}

    <div className="flex p-16 border-t border-b border-gray-700 bg-gray-950 mt-16">
        <div className="w-1/4">
          <h1 className="font-bold text-2xl">About</h1>
          <p className="mt-4">
          StartupGear is India’s fast growing startup founders’ community that
            works intensively with the startups in each phase of their journey.
            We have been transforming big ideas into high potential businesses.
          </p>
          <h1>in</h1>
        </div>
        <div className="w-1/4 text-center">
          <h1 className="font-bold text-2xl">Company</h1>
          <p className="mt-4">Home</p>
          <p>Startup</p>
          <p>Investor</p>
        </div>
        <div className="w-1/4 text-center">
          <h1 className="font-bold text-2xl">Quick Links</h1>
          <p className="mt-4">Privacy Policy</p>
          <p>Terms & Refund</p>
          <p>About us</p>
          <p>Contact</p>
        </div>
        <div className="w-1/4 text-center">
          <h1 className="font-bold text-2xl">Get in touch</h1>
          <p className="mt-4">📞 8137058308</p>
          <p>📩 jaseempk00@gmail.com</p>
          <p>🌏 Edappaly,Ernakulam,Kerala</p>
          <p>682030</p>
        </div>
      </div>
      <div className="text-center p-9">
        <p>© 2023 – StartupGear. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer