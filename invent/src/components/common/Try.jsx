import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import NavBar from "./NavBar";

function Try() {
  return (
    <>
   <div className="mt-20">
  <div className="text-center font-bold text-4xl">
    <h1>Our Startups</h1>
  </div>
  <div className="text-center mt-4">
    <label htmlFor="startupFilter" className="text-lg mr-2">
      Filter:
    </label>
    <select id="startupFilter" className="border p-2 rounded">
      <option value="all">All Startups</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      {/* Add more options as needed */}
    </select>
  </div>
  <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center p-16 gap-6">
    <div className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black">
      <div>
        <video width="400" height="auto" controls>
          <source
            src="https://www.youtube.com/watch?v=Yz70pAzgN5s"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="text-2xl font-bold">Dedicated Mate</h1>
      <p>1-on-1 support from experienced founders.</p>
    </div>

   
  </div>
  <div className="flex justify-center mt-4">
    <button className="btn-paginate">Previous</button>
    <span className="mx-4">Page 1 of 3</span>
    <button className="btn-paginate">Next</button>
  </div>
  <div className="flex justify-center">
    <button className="mt-8 btn-gradiant">Apply Now</button>
  </div>
</div>

    </>
  );
}

export default Try;
