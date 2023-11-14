import React from "react";
import investor from "../../assets/investor.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CardView() {

  const user = useSelector((state)=>state.userReducer.user)
  
  const navigate = useNavigate()

  const handleNavigate = ()=>{
    user ? navigate('/entrepreneur/singleEntrepreneur') : navigate('/entrepreneur/signup')
  }
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
      {investorsData && (
        <div className="bg-white flex flex-wrap justify-center">
          {investorsData.map((item, index) => (
              <div key={index} className="card w-96 shadow-xl" onClick={handleNavigate}>
                <figure className="px-10 pt-10">
                  <img src={investor} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CardView;
