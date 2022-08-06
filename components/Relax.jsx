import React from 'react';
import Image from 'next/future/image';

const Relax = () => {
  return (
    <section id="relax" className="relative container mx-auto mt-10 p-4 md:p-0">
      <div className="flex flex-wrap-reverse gap-8 justify-center">
        <div className="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
          <div className="flex flex-wrap flex-col items-start gap-2">
            <h2 className="text-4xl font-bold">Relax, you’re home!</h2>
            <p className="max-w-md">
              All our supported hardware includes traditional inputs so you can
              integrate our products into your house in a way that’s best for
              everyone.
            </p>
          </div>
          <a
            href="#"
            className="
            py-2
            px-6
            bg-amber-400
            dark:text-neutral-900
            flex
            gap-2
            shadow-xl
            hover:shadow-none
            transition-shadow
            focus:outline-none
            focus-visible:ring-4
            ring-neutral-900
            rounded-md
            ring-offset-4
            ring-offset-white
            dark:ring-amber-400
            dark:ring-offset-neutral-800
        "
          >
            Sign Up
          </a>
        </div>
        <Image
          src="/table.png"
          blurDataURL="/table.png"
          placeholder="blur"
          alt="table"
          width={509}
          height={658}
        />
      </div>
    </section>
  );
};

export default Relax;
