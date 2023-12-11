import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="flex flex-col sm:flex-row mx-auto p-5 gap-5">
      <div className="w-full md:w-1/4 h-screen bg-gray-900 p-6">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {children.map((child) => (
              <li>
                <button
                  key={child.props.label}
                  className={`${
                    activeTab === child.props.label ? "bg-black " : ""
                  }  flex text-white font-medium p-2`}
                  onClick={(e) => handleClick(e, child.props.label)}
                >
                  {child.props.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {children.map((child) => (
          <div className="hidden lg:flex">
            <button
              key={child.props.label}
              className={`${
                activeTab === child.props.label ? "bg-black " : ""
              }  flex text-white font-medium p-2`}
              onClick={(e) => handleClick(e, child.props.label)}
            >
              {child.props.label}
            </button>
          </div>
        ))}
      </div>
      <div className="w-3/4 bg-gray-900">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return (
              <div className="mx-5" key={child.props.label}>
                {child.props.children}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
