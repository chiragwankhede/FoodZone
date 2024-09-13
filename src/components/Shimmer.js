import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full text-center">
        <h4 className="text-lg font-semibold mb-4">
          Please install the <span className="font-bold">"Allow CORS: Access-Control-Allow-Origin"</span> extension
          from Google Chrome and turn it on.
        </h4>
      </div>
      <div className="shimmer-container flex flex-wrap justify-center mt-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="shimmer w-24 h-24 m-3 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
