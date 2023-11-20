import React from "react";
import { Link } from "react-router-dom";
import jaseem from "../../assets/investor.jpg";

function InvestorHome() {
  return (
    <>
      {/* nav bar investor*/}

      <div className="flex justify-between p-4">
        <div>
          <h1 className="text-3xl font-bold">InvestGear</h1>
        </div>
        <div className="flex gap-5 mt-3">
          <div>
            <Link to={"/investor/login"}>
              <button className="bg-teal-900 p-3 rounded-xl">
                Join The Waitlist
              </button>
            </Link>
          </div>
          <div>
            <button className="bg-teal-900 p-3 rounded-xl">
              Join The Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Hero*/}

      <div className="flex items-center justify-center mt-10 p-5">
        <div className="w-1/2">
          <div>
            <h1 className="text-6xl font-bold">
              Maximize <span className="text-teal-600">Returns</span>
              <br /> Minimize Risks
            </h1>
          </div>
          <div>
            <p className="mt-6">
              Get a chance to invest in high-growth early-stage startups vetted
              and accelerated by PedalStart. Offering attractive risk-adjusted
              returns.
            </p>
          </div>
          <div>
          <Link to={"/investor/login"}>
            <button className="bg-teal-900 p-3 rounded-xl mt-6">
              Join The Waitlist
            </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <img src={jaseem} className="w-[300px] h-[300px]" />
        </div>
      </div>
    </>
  );
}

export default InvestorHome;
