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

      {/* Main Home Section */}

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

      {/* section 4 */}
      <div className="p-4 mt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold">How To Join</h1>
          <p className="text-3xl font-bold">A Four Step Process </p>
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

      {/* section 5 */}

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

      {/* section 5 */}

      <div className="flex p-16 border-t border-b border-gray-900 bg-gray-900">
        <div className="w-1/4">
          <h1 className="font-bold text-2xl">About</h1>
          <p className="mt-4">
            PedalStart is India’s fast growing startup founders’ community that
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
        <p>© 2022 – PedalStart. All Rights Reserved.</p>
      </div>

      {/* Etrepreneur Section */}

      {/* Hero */}

      <div className="flex flex-col md:flex-row items-center p-16 space-x-16">
        <div>
          <h1 className="font-bold text-6xl md:text-8xl animated-gradien text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            First we build. Then we invest.
          </h1>
          <p className="text-2xl">
            Enabling entrepreneurs by providing them with the best possible
            support in their journey
          </p>

          <button className="mt-8 btn-gradiant">Apply Now--</button>
        </div>
        <div className="p-4">
          <img
            src={jaseem}
            alt="Shoes"
            className="rounded-3xl h-[400px] w-[600px]"
          />
        </div>
      </div>

      {/* Eco systom */}

      <div className="mt-20">
        <div className="text-center font-bold text-4xl">
          <h1>PedalStart Startup Ecosystem</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-col-1 p-16 gap-6">
          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <h1 className="text-2xl font-bold">15,000+</h1>
            <p>Founders Joined Wishlist</p>
          </div>
          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <h1 className="text-2xl font-bold">15,000+</h1>
            <p>Founders Joined Wishlist</p>
          </div>
          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <h1 className="text-2xl font-bold">15,000+</h1>
            <p>Founders Joined Wishlist</p>
          </div>
          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <h1 className="text-2xl font-bold">15,000+</h1>
            <p>Founders Joined Wishlist</p>
          </div>
          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <h1 className="text-2xl font-bold">15,000+</h1>
            <p>Founders Joined Wishlist</p>
          </div>
          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <h1 className="text-2xl font-bold">15,000+</h1>
            <p>Founders Joined Wishlist</p>
          </div>
        </div>
      </div>

      {/* how we build */}

      <div className="mt-20">
        <div className="text-center font-bold text-4xl">
          <h1>How we Build Ideas?</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-col-1 p-16 gap-6">
          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div>🫱🏻‍🫲🏽</div>
            <h1 className="text-2xl font-bold">COMMUNITY</h1>
            <p>• Super Connection (Ex-Founder)</p>
            <p>• Clear Startup Basics of Founders</p>
            <p>• Set the Right Execution Structure.</p>
            <p>• Peer Co-founder/team Connect</p>
          </div>

          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div>🫱🏻‍🫲🏽</div>
            <h1 className="text-2xl font-bold">ACCELERATION</h1>
            <p>• Direct Access – $10k Credits</p>
            <p>• Pitch Deck & Financial Model</p>
            <p>• Business Collaborations</p>
            <p>• Mentor Connect [Future Advisors]</p>
          </div>

          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div>🫱🏻‍🫲🏽</div>
            <h1 className="text-2xl font-bold">FUND RAISING</h1>
            <p contentEditable="true">• Demo Pitch With Mentors</p>
            <p>• Strategic Investors</p>
            <p>• Investors Pitch</p>
            <p>• Funds Transaction</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-8 btn-gradiant">Apply Now</button>
        </div>
      </div>

      {/* what have in community */}

      <div className="mt-20">
        <div className="text-center font-bold text-4xl">
          <h1>How we Build Ideas?</h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-col-1 p-16 gap-6">
          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div>🫱🏻‍🫲🏽</div>
            <h1 className="text-2xl font-bold">Dedicated Mate</h1>
            <p>1-on-1 support from experienced founders.</p>
          </div>

          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div>🫱🏻‍🫲🏽</div>
            <h1 className="text-2xl font-bold">
              Mentor and Vertical Domain Expert Engagement
            </h1>
            <p>
              Guidance from successful startup founders, including CEOs, CFOs,
              and CTOs.
            </p>
          </div>

          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div>🫱🏻‍🫲🏽</div>
            <h1 className="text-2xl font-bold">
              Networking Opportunity & Team Building
            </h1>
            <p>
              Online and offline access to events, connecting you with fellow
              founders and startup enthusiasts.
            </p>
          </div>

          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div>🫱🏻‍🫲🏽</div>
            <h1 className="text-2xl font-bold">Workshops</h1>
            <p>Curated workshops to acquire valuable skills.</p>
          </div>

          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div>🫱🏻‍🫲🏽</div>
            <h1 className="text-2xl font-bold">Founder Tool-Kit</h1>
            <p>Access to credits and resources.</p>
          </div>

          <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
            <div>🫱🏻‍🫲🏽</div>
            <h1 className="text-2xl font-bold">
              Regular Updates and Metrics Tracking
            </h1>
            <p>Follow-ups with a dedicated community manager.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-8 btn-gradiant">Apply Now</button>
        </div>
      </div>

      {/* How to get into the community? */}

      <div className="mt-20">
        <div className="text-center font-bold text-4xl">
          <h1>How to get into the community?</h1>
        </div>
        <div className="flex mt-10 justify-center items-center gap-6 w-full">
          <div className="bg-white text-black px-16 py-7 rounded-xl">
            <h1 className="text-2xl font-bold">step 1</h1>

            <p>Join Wishlist</p>
          </div>
          <div>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="bg-white text-black px-16 py-7 rounded-xl">
            <h1 className="text-2xl font-bold">step 1</h1>

            <p>Join Wishlist</p>
          </div>
          <div>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="bg-white text-black px-16 py-7 rounded-xl">
            <h1 className="text-2xl font-bold">step 1</h1>

            <p>Join Wishlist</p>
          </div>
          <div>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="bg-white text-black px-16 py-7 rounded-xl">
            <h1 className="text-2xl font-bold">step 1</h1>

            <p>Join Wishlist</p>
          </div>
          <div>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="bg-white text-black px-16 py-7 rounded-xl">
            <h1 className="text-2xl font-bold">step 1</h1>

            <p>Join Wishlist</p>
          </div>
        </div>
        <h1 className="text-xl font-bold text-center mt-5">Our community is selection-based, we follow a screening process</h1>
        <div className="flex justify-center"><button className="btn-gradiant mt-10">Apply Now</button></div>
      </div>
    </>
  );
}

export default Try;
