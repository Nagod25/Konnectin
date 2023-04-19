import React, { useState } from "react";
import Responsibilities from "./responsibilites";

const EmploymentExperience = ({ next, previous }) => {
  const [activities, setActivities] = useState(true);

  const handleEmploymentActivities = () => {
    setActivities(!activities);
  };
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";
  return (
    <>
      {activities ? (
        <main className="-mt-8 flex justify-between flex-col items-start mx-auto">
          <div className="flex flex-col mx-auto md:flex-row items-center gap-6">
            <div className="flex flex-col">
              <h2 className=" text-xl w-[25ch] md:max-w-[30ch] md:text-2xl leading-tight font-semibold md:leading-snug">
                What recent employement experience do you have?
              </h2>

              <form className=" mt-12">
                <input
                  className={form_classes}
                  type="text"
                  placeholder="Job Title"
                />
                <input
                  className={form_classes}
                  type="text"
                  placeholder="Company / Organiztion Name"
                />
                <div className=" flex">
                  <input
                    className={`mr-4  ${form_classes}`}
                    type="text"
                    placeholder="Country"
                  />
                  <input
                    type="text"
                    placeholder="State / Province"
                    className={`mr-4 ${form_classes}`}
                  />
                  <input
                    className={form_classes}
                    type="text"
                    placeholder="City"
                  />
                </div>

                <div className="flex">
                  <input
                    className={`${form_classes} mr-4`}
                    type="text"
                    placeholder="Start Month"
                  />
                  <input
                    className={form_classes}
                    type="text"
                    placeholder="Start Year"
                  />
                </div>
                <div className="flex">
                  <input
                    className={`${form_classes} mr-4`}
                    type="text"
                    placeholder="End Month"
                  />
                  <input
                    className={form_classes}
                    type="text"
                    placeholder="End Year"
                  />
                </div>
                <div className=" flex items-center">
                  <input type="checkbox" />
                  <label
                    htmlFor="checkbox"
                    className=" ml-2 mt-[2px] text-sm font-light text-[#66666a]"
                  >
                    I currently work here
                  </label>
                </div>
              </form>
            </div>
            <div className=" hidden flex-col md:ml-10 md:flex">
              <div className=" w-[300px] h-[422px] border border-[#b2b3b4] shadow- rounded-lg"></div>
            </div>
          </div>
          <div className="w-8/12 lg:max-w-4xl flex flex-col justify-center mx-auto mt-12 gap-5 md:flex-row">
            <button
              onClick={previous}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
            >
              Back
            </button>
            <button
              onClick={handleEmploymentActivities}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
            >
              Continue
            </button>
          </div>
        </main>
      ) : (
        <Responsibilities next={next} previous={previous} />
      )}
    </>
  );
};

export default EmploymentExperience;
