import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Makers = () => {
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-center text-4xl text-black font-bold">
        A Community Of Makers
      </h1>
      <div className="mt-3">
        <p className="text-center p-4 text-xl">
          Arts and crafts describes a wide variety of activities involving
          making things<br></br> with one's own hands. Arts and crafts is
          usually a hobby. Some crafts <br></br>(art skills) have been practised
          since preshistoric <br></br>times, others are more recent inventions.
        </p>
      </div>

      
      <div className="mt-6 grid grid-cols-2 mx-auto gap-12 mb-8 w-1/2 h-64">
        <div
          className="relative bg-blue-800 p-8 mb-4 text-center text-white text-2xl clip-path-wave flex flex-col justify-between items-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
        >
          <p className="mt-4 uppercase">Diy</p>
          <p>Join Our Forum</p>
          <BsArrowRight className="mt-2" />
        </div>
        <div
          className="relative bg-yellow-500 p-8 mb-4 text-center text-white text-2xl clip-path-wave flex flex-col justify-between items-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
        >
          <p className="mt-4 uppercase">Learn even more</p>
          <p>Read Our Blog</p>
          <BsArrowRight className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Makers;
