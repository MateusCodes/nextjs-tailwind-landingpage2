import React from 'react';
import Image from 'next/future/image';

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative pt-16 md:pt-24 lg:-48">
        <div className="absolute inset-0 bottom-8 md:bottom-24 xl:bottom-32 -z-10 bg-gradient-to-b from-amber-400 to-amber-600"></div>
        <div className="container mx-auto grid grid-rows-1 place-items-end px-2">
          <Image
            className="row-start-1 row-end-2 col-start-1 col-end-2 mx-auto"
            width={1289}
            height={502}
            src="/couch.png"
            blurDataURL="/couch.png"
            placeholder="blur"
            alt="couch"
          />
          <Image
            className="row-start-1 row-end-2 col-start-1 col-end-2 mx-auto w-40 sm:w-52 md:w-64 lg:w-72"
            width={326}
            height={643}
            src="/app.png"
            blurDataURL="/app.png"
            placeholder="blur"
            alt="app"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
