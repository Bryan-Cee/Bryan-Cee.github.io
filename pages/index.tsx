import React from 'react';
import type { NextPage } from 'next';

import Nav from '../components/Nav';

const icons = [
  {
    icon: 'github.svg',
    label: 'github',
  },
  {
    icon: 'twitter.svg',
    label: 'twitter',
  },
  {
    icon: 'linkedin.svg',
    label: 'linkedin',
  },
];

const Home: NextPage = () => {
  return (
    <div className=" bg-[#0077b6] min-h-screen flex flex-col h-screen">
      <Nav />
      <main className="flex items-center justify-center h-screen">
        <section>
          <div>
            <p className="text-5xl leading-[1.5] font-bold m-0">Hello</p>
            <p className="font-black text-[10rem] text-[aqua] m-0 leading-tight">
              I'm Bryce
            </p>
            <p className="text-5xl leading-normal font-bold m-0">
              Software Engineer @Microsoft
            </p>
          </div>
          <div className="mt-16 flex">
            {icons.map(({ icon, label }) => (
              <img
                key={label}
                className="w-20 h-20 mr-8"
                src={icon}
                alt={label}
              />
            ))}{' '}
          </div>
        </section>
        <img
          className="w-[700px] -ml-24 -mt-32 -mr-40"
          src="face-image.svg"
          alt="unsplash"
        />
      </main>
    </div>
  );
};

export default Home;
