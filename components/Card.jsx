import React from 'react';

const Card = () => {
  return (
    <>
      <div className="grid justify-items-center gap-4 text-center md:flex-1">
        <div className="rounded-full border-8 border-amber-400 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-14 w-14"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
        </div>
        <h3 className="text-3xl font-bold">Safe</h3>
        <p>Our Products are secure and private out-of-the-box</p>
      </div>
    </>
  );
};

export default Card;
