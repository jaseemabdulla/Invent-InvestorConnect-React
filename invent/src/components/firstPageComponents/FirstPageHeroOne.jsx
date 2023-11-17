import React from "react";
import jaseem from "../../assets/investor.jpg";
import { Link } from "react-router-dom";

function FirstPageHeroOne() {

  const investorsData = [
    {
      id: 1,
      name: "Investor 1",
      description: "Description for Investor 1",
    },
    {
      id: 2,
      name: "Investor 2",
      description: "Description for Investor 2",
    },
    {
      id: 1,
      name: "Investor 1",
      description: "Description for Investor 1",
    },
    {
      id: 2,
      name: "Investor 2",
      description: "Description for Investor 2",
    },
    {
      id: 1,
      name: "Investor 1",
      description: "Description for Investor 1",
    },
    {
      id: 2,
      name: "Investor 2",
      description: "Description for Investor 2",
    },
    {
      id: 1,
      name: "Investor 1",
      description: "Description for Investor 1",
    },
    {
      id: 2,
      name: "Investor 2",
      description: "Description for Investor 2",
    },
  ];
  return (
    <>
    {/* section hero */}
      <div className="p-6">
        <div className="text-center">
          <h1 className="leading-[160px] text-[180px] font-bold animated-gradien text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-900 to-pink-200">
            Let's<br/> Build <br/>Ideas
          </h1>
          <p className="font-bold text-4xl mt-10">StartupGear Accelerator.</p>
          <Link to={'/entrepreneur/login/'}><button className="btn-gradiant mt-10">Apply Now</button></Link>
          <div className="flex justify-center"><p className="w-[800px] mt-10 text-center">StartupGear is India’s fastest-growing startup founders’ community that works intensively with startups
in each phase of their journey. We have been transforming big ideas into high-potential businesses.</p></div>
        </div>
       
      </div>

    {/* section hero 2 */}
      <div className="text-white flex flex-col md:flex-row item-center justify-center bg-gray-950 p-16 mt-28">
        <div className="flex items-center justify-center h-full">
          <div className="text-[100px]">🌐</div>
          <div className="text-center">
            <h1 className="text-2xl">Community</h1>
            <p>
              Work On Entrepreneurial Mindset, Problem Statement/Opportunity
              Gap, Solutions, POC
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="text-[100px]">⚔️</div>
          <div className="text-center">
            <h1 className="text-2xl">Accelerator</h1>
            <p>
              Work On Design Thinking Execution Approach, Viable Business Model,
              Expandable Model
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="text-[100px]">💰</div>
          <div className="text-center">
            <h1 className="text-2xl">Funds Raising</h1>
            <p>
              Work On Execution Viability Pitch Deck, Investors Ready, Potential
              Investors, Investors Meetups.
            </p>
          </div>
        </div>
      </div>

    {/* section investor */}

      <div className="p-[60px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            We're backed by incredible mentors & investors
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {investorsData.map((item, inex) => (
            <div className="card  w-1/3 lg:w-1/5 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={jaseem} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Jaseem pk</h2>
                <p>CEO/co-founder</p>
                <p>HYGI</p>
                <div className="card-actions">
                  <button className="btn btn-primary">chat with</button>
                </div>
              </div>
            </div>
          ))}
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

        <div className="ml-10">
          <div className="flex mt-4">
            <div className="border p-4 shadow-md ">
              <div className="text-[40px]">🌐</div>
              <div>
                <h1 className="text-2xl">Community</h1>
                <p>
                  Work On Entrepreneurial Mindset, Problem Statement/Opportunity
                  Gap, Solutions, POC
                </p>
              </div>
            </div>

            <div className="border  p-4 ml-4">
              <div className="text-[40px]">🌐</div>
              <div>
                <h1 className="text-2xl">Community</h1>
                <p>
                  Work On Entrepreneurial Mindset, Problem Statement/Opportunity
                  Gap, Solutions, POC
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="border p-4">
              <div className="text-[40px]">🌐</div>
              <div>
                <h1 className="text-2xl">Community</h1>
                <p>
                  Work On Entrepreneurial Mindset, Problem Statement/Opportunity
                  Gap, Solutions, POC
                </p>
              </div>
            </div>

            <div className="border p-4 ml-4">
              <div className="text-[40px]">🌐</div>
              <div>
                <h1 className="text-2xl">Community</h1>
                <p>
                  Work On Entrepreneurial Mindset, Problem Statement/Opportunity
                  Gap, Solutions, POC
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

                  {/* section How to join */}

      <div className="mt-20">
        <div className="text-center font-bold text-4xl">
          <h1>Wall Of Founder's Love</h1>
        </div>
        <div className="flex p-16 space-x-10">
          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div className="flex">
              <div>
                <img
                  src={jaseem}
                  alt="Shoes"
                  className="rounded-full h-20 w-20"
                />
              </div>
              <div className="mx-5">
                <h1 className="font-bold text-2xl">jaseem</h1>
                <p>founder</p>
              </div>
            </div>
            <div className="mt-6">
              <p>
                The startups get to raise funds by pitching their ideas directly
                to 100+ angel investors and 20+ micro VCs.PedalStart has an
                internal funding of 25 millions to invest in the startups.
              </p>
            </div>
          </div>

          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div className="flex">
              <div>
                <img
                  src={jaseem}
                  alt="Shoes"
                  className="rounded-full h-20 w-20"
                />
              </div>

              <div className="mx-5">
                <h1 className="font-bold text-2xl">jaseem</h1>
                <p>founder</p>
              </div>
            </div>
            <div className="mt-6">
              <p>
                The startups get to raise funds by pitching their ideas directly
                to 100+ angel investors and 20+ micro VCs.PedalStart has an
                internal funding of 25 millions to invest in the startups.
              </p>
            </div>
          </div>
        </div>
      </div>


                  

    </>
  );
}

export default FirstPageHeroOne;
