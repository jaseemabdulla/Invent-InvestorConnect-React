import React from "react";
import jaseem from "../../assets/investor.jpg";

function Try() {
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
      {/* section 1 */}

      <div className="text-white flex flex-col md:flex-row item-center justify-center bg-gray-800">
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

      {/* section 2 */}

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

      {/* section 3 */}

      <div className="flex flex-col md:flex-row items-center justify-center h-full p-[60px]">
        <div className="md:w-1/3 w-full">
          <h1>OUR OFFERING</h1>
          <h1 className="text-4xl font-bold mt-5">
            Build Entrepreneurs By The Guidance Of Some Multi-Domain Vertical
            Experts.
          </h1>
          <button className="bg-white mt-8 hover:bg-black hover:text-white hover:border text-black font-bold py-2 px-4 rounded">
            Learn More--
          </button>
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
    </>
  );
}

export default Try;
