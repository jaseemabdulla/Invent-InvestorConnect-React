import React from "react";
import jaseem from "../../assets/investor.jpg";
import startupHome from "../../assets/startupHome1.jpg"
import { Link } from "react-router-dom";
import StartupFilterList from "../userComponents/StartupFilterList";
import { useSelector } from "react-redux";

function HomeHero() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center p-4 md:p-16 space-y-4 md:space-y-0 md:space-x-16 mt-5">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl animated-gradient text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            First we build. Then we invest.
          </h1>
          <p className="text-sm md:text-lg lg:text-xl">
            Enabling entrepreneurs by providing them with the best possible
            support in their journey
          </p>
          {user ? (
            <Link to={"/entrepreneur/buildStartup"}>
              <button className="mt-4 md:mt-8 btn-gradiant">Build Now--</button>
            </Link>
          ) : (
            <Link to={"/entrepreneur/login"}>
              <button className="mt-4 md:mt-8 btn-gradiant">Apply Now--</button>
            </Link>
          )}
        </div>
        <div className="p-4 md:w-1/2">
          <img
            src={startupHome}
            alt="Shoes"
            className="rounded-3xl object-cover w-full"
          />
        </div>
      </div>
      {/* Startup list */}

      <StartupFilterList />

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
        <div className="flex flex-col md:flex-row mt-10 justify-center items-center gap-6 w-full">
          {/* Repeat the following block for each step */}
          <div className="bg-white text-black px-6 md:px-16 py-5 md:py-7 rounded-xl text-center md:text-left">
            <h1 className="text-2xl font-bold">Step 1</h1>
            <p>Join Wishlist</p>
          </div>
          <div className="hidden md:inline-block">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="bg-white text-black px-6 md:px-16 py-5 md:py-7 rounded-xl text-center md:text-left">
            <h1 className="text-2xl font-bold">Step 1</h1>
            <p>Join Wishlist</p>
          </div>
          <div className="hidden md:inline-block">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="bg-white text-black px-6 md:px-16 py-5 md:py-7 rounded-xl text-center md:text-left">
            <h1 className="text-2xl font-bold">Step 1</h1>
            <p>Join Wishlist</p>
          </div>
          <div className="hidden md:inline-block">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="bg-white text-black px-6 md:px-16 py-5 md:py-7 rounded-xl text-center md:text-left">
            <h1 className="text-2xl font-bold">Step 1</h1>
            <p>Join Wishlist</p>
          </div>
          <div className="hidden md:inline-block">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="bg-white text-black px-6 md:px-16 py-5 md:py-7 rounded-xl text-center md:text-left">
            <h1 className="text-2xl font-bold">Step 1</h1>
            <p>Join Wishlist</p>
          </div>

          {/* Repeat the above block for each step */}
        </div>
        <h1 className="text-xl font-bold text-center mt-5">
          Our community is selection-based, we follow a screening process
        </h1>
        <div className="flex justify-center mt-5">
          <button className="btn-gradiant">Apply Now</button>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
