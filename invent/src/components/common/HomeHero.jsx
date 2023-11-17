import React from 'react'
import jaseem from "../../assets/investor.jpg";
import { Link } from 'react-router-dom';

function HomeHero() {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center p-16 space-x-16">
        <div>
          <h1 className="font-bold text-6xl md:text-8xl animated-gradien text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            First we build. Then we invest.
          </h1>
          <p className="text-2xl">
            Enabling entrepreneurs by providing them with the best possible
            support in their journey
          </p>

          <Link to={'/entrepreneur/login'}><button className="mt-8 btn-gradiant">Apply Now--</button></Link>
        </div>
        <div className="p-4">
          <img
            src={jaseem}
            alt="Shoes"
            className="rounded-3xl h-[400px] w-[600px]"
          />
        </div>
      </div>

    {/* how ecosystem */}

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

    {/* how we build ideas */}

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
          <h1>What's There in Community?</h1>
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
  )
}

export default HomeHero