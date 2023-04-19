import React from "react";
import { MdClose } from "react-icons/md";

export function SuccessModal({ text, popModal, closeModal }) {
  return (
    <div className="fixed h-screen w-screen left-0 top-0">
      <div
        className={`${
          popModal ? "-translate-y-8" : "-translate-y-36"
        } relative bg-neutral-600 max-w-md mx-auto py-6 transition ease-in-out duration-300`}
      >
        <p>{text}</p>
        <MdClose
          onClick={closeModal}
          className="cursor-pointer absolute top-2 right-3"
        />
      </div>
    </div>
  );
}

export function ErrorModal({ text }) {
  return (
    <div className="relative bg-neutral-600 w-full mx-auto py-6 transition ease-in-out duration-300">
      <p>{text}</p>
    </div>
  );
}
