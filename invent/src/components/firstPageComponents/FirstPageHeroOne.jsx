import React from "react";
import jaseem from "../../assets/investor.jpg";
import { Link } from "react-router-dom";

function FirstPageHeroOne() {
  return (
    <>
      {/* section hero */}
      <div className="p-6">
        <div className="text-center">
          <h1 className="leading-[160px] text-[130px] md:text-[180px] font-bold animated-gradien text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-900 to-pink-200">
            Let's
            <br /> Build <br />
            Ideas
          </h1>
          <p className="font-bold text-4xl mt-10">StartupGear Accelerator.</p>
          <Link to={"/entrepreneur/login/"}>
            <button className="btn-gradiant mt-10">Apply Now</button>
          </Link>
          <div className="flex justify-center">
            <p className="w-[800px] mt-10 text-center">
              StartupGear is India’s fastest-growing startup founders’ community
              that works intensively with startups in each phase of their
              journey. We have been transforming big ideas into high-potential
              businesses.
            </p>
          </div>
        </div>
      </div>

      {/* section our offering */}

      <div className="flex flex-col md:flex-row items-center justify-center h-full p-[60px]">
        <div className="md:w-1/3 w-full">
          <h1>OUR OFFERING</h1>
          <h1 className="text-4xl font-bold mt-5">
            Build Entrepreneurs By The Guidance Of Some Multi-Domain Vertical
            Experts.
          </h1>
          <button className="btn-normal">Learn More--</button>
        </div>

        <div className="ml-4 md:ml-10">
  <div className="flex flex-col sm:flex-row mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
    {/* First Box */}
    <div className="w-full sm:w-1/2 border p-4 shadow-md">
      <div className="text-[40px]">🌐</div>
      <div>
        <h1 className="text-lg sm:text-2xl font-bold mt-2">Community</h1>
        <p className="text-sm mt-2">
          Work On Entrepreneurial Mindset, Problem Statement/Opportunity Gap,
          Solutions, POC
        </p>
      </div>
    </div>

    {/* Second Box */}
    <div className="w-full sm:w-1/2 mt-4 sm:mt-0 border p-4 ml-0 sm:ml-4 shadow-md">
      <div className="text-[40px]">🌐</div>
      <div>
        <h1 className="text-lg sm:text-2xl font-bold mt-2">Community</h1>
        <p className="text-sm mt-2">
          Work On Entrepreneurial Mindset, Problem Statement/Opportunity Gap,
          Solutions, POC
        </p>
      </div>
    </div>
  </div>
  <div className="flex flex-col sm:flex-row mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
    {/* Third Box */}
    <div className="w-full sm:w-1/2 border p-4">
      <div className="text-[40px]">🌐</div>
      <div>
        <h1 className="text-lg sm:text-2xl font-bold mt-2">Community</h1>
        <p className="text-sm mt-2">
          Work On Entrepreneurial Mindset, Problem Statement/Opportunity Gap,
          Solutions, POC
        </p>
      </div>
    </div>

    {/* Fourth Box */}
    <div className="w-full sm:w-1/2 mt-4 sm:mt-0 border p-4 ml-0 sm:ml-4 shadow-md">
      <div className="text-[40px]">🌐</div>
      <div>
        <h1 className="text-lg sm:text-2xl font-bold mt-2">Community</h1>
        <p className="text-sm mt-2">
          Work On Entrepreneurial Mindset, Problem Statement/Opportunity Gap,
          Solutions, POC
        </p>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* section How to join */}

      <div className="p-4 mt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold">How To Join</h1>
          <p className="text-2xl mt-4">A Four Step Process </p>
        </div>

        <div className="text-white flex flex-col md:flex-row item-center justify-center mt-10">
          <div className="px-10">
            <div className="text-[100px] text-center text-white">🌐</div>
            <div className="text-center">
              <h1 className="text-3xl font-bold">Join Wishlist</h1>
              <p className="mt-6 text-gray-400">
                Click “Apply Now”. Fill the form and submit. We read each
                application at least twice before coming to a decision
              </p>
            </div>
          </div>
          <div className="px-10">
            <div className="text-[100px] text-center">⚔️</div>
            <div className="text-center">
              <h1 className="text-3xl font-bold"> Application Screening</h1>
              <p className="mt-6 text-gray-400">
                The applications we love will hear back from us. We send out
                call invites within 24 Hours
              </p>
            </div>
          </div>
          <div className="px-10">
            <div className="text-[100px] text-center">💰</div>
            <div className="text-center">
              <h1 className="text-3xl font-bold">Pitch To Us</h1>
              <p className="mt-6 text-gray-400">
                We will connect with you on call [Just to get a better
                understanding of your startup]
              </p>
            </div>
          </div>
          <div className="px-10">
            <div className="text-[100px] text-center">💰</div>
            <div className="text-center">
              <h1 className="text-3xl font-bold ">Community Onboarding</h1>
              <p className="mt-6 text-gray-400">
                After acceptance We will onboard you in our community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wall Of Founder's Love */}

      <div className="mt-20">
        <div className="text-center font-bold text-4xl">
          <h1>Wall Of Founder's Love</h1>
        </div>
        <div className="flex flex-col md:flex-row p-4 md:p-16 space-y-4 md:space-y-0 space-x-0 md:space-x-10">
  <div className="border rounded-3xl p-4 md:p-16 hover:bg-gray-400 hover:text-black">
    <div className="flex items-center">
      <img src={jaseem} alt="Shoes" className="rounded-full h-20 w-20" />
      <div className="mx-4 md:mx-5">
        <h1 className="font-bold text-lg md:text-2xl">jaseem</h1>
        <p className="text-sm md:text-base">founder</p>
      </div>
    </div>
    <div className="mt-4 md:mt-6">
      <p className="text-sm md:text-base">
        The startups get to raise funds by pitching their ideas directly to
        100+ angel investors and 20+ micro VCs. PedalStart has an internal
        funding of 25 million to invest in the startups.
      </p>
    </div>
  </div>

  <div className="border rounded-3xl p-4 md:p-16 hover:bg-gray-400 hover:text-black">
    <div className="flex items-center">
      <img src={jaseem} alt="Shoes" className="rounded-full h-20 w-20" />
      <div className="mx-4 md:mx-5">
        <h1 className="font-bold text-lg md:text-2xl">jaseem</h1>
        <p className="text-sm md:text-base">founder</p>
      </div>
    </div>
    <div className="mt-4 md:mt-6">
      <p className="text-sm md:text-base">
        The startups get to raise funds by pitching their ideas directly to
        100+ angel investors and 20+ micro VCs. PedalStart has an internal
        funding of 25 million to invest in the startups.
      </p>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default FirstPageHeroOne;
