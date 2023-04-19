import React, { useState } from "react";

const Preview = ({ next, previous }) => {
  return (
    <main className=" max-w-6xl flex mx-auto flex-col md:mx-16">
      <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
        Preview Resume
      </h2>
      <div className="w-full flex flex-col justify-around items-center md:flex-row gap-10">
        <div className=" w-[300px] h-[400px] border border-[#b2b3b4] shadow-lg rounded-lg mt-16"></div>
        <div>
          <p className="max-w-[43ch] font-bold text-[#66666a] text-sm tracking-[-0.01rem] mt-3 mb-5">
            Before downloading your resume, we recommend previewing it to ensure
            it meets your expectations. If you would like to try a different
            resume template, you can easily make changes before finalizing your
            download. Thank you for using our resume builder!
          </p>
          <button className="bg-[#FC670B] font-bold text-lg border border-[#665d99] rounded-lg p-4 mt-7 flex md:flex-none mx-auto">
            Change resume template
          </button>
        </div>
      </div>
      <div className="w-8/12 md:max-w-4xl flex flex-col justify-center mx-auto mt-10 gap-5 md:flex-row">
        <button
          onClick={previous}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
        >
          Back
        </button>
        <button
          onClick={next}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
        >
          Continue
        </button>
      </div>
    </main>
  );
};

export default Preview;
