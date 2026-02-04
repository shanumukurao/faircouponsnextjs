import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-center py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <h1>Forgot Password</h1>

        <div className="flex flex-col gap-3">
          <input type="Email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter your Password" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default page;