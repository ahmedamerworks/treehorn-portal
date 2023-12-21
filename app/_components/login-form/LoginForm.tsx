// Login form with submit button at the bottom, form should have hover effects, input fields should have one bottom border
"use client";
import React from "react";

const UserForm = () => {
  return (
    <>
      <form
        onSubmit={(e) => {}}
        className="bg-secondary shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block  text-sm font-bold mb-2 text-neutral"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="text-base-300 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-100"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-bold mb-2 text-neutral"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="text-base-300 shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-100"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="btn btn-accent text-neutral text-lg btn-wide">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
