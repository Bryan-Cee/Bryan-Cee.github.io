import React from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <div className="flex flex-col mx-auto my-6 border-none rounded-lg pb-8 w-[65ch] cursor-pointer">
      <img
        src="https://unsplash.it/240/240"
        className="h-40 object-fill mb-4 rounded-t-lg rounded-tl-lg roun"
        alt="unsplash image"
      />
      <div className="">
        <h2 className="text-2xl font-bold mb-2">Article Title</h2>
        <p className="font-extralight">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          aut incidunt eligendi!
        </p>
      </div>
    </div>
  );
};

export default Card;
