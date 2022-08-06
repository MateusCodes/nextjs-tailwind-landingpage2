import React from 'react';
import Image from 'next/future/image';

const Relax = () => {
  return (
    <section
      data-aos="fade-right"
      id="relax"
      className="container relative mx-auto mt-10 p-4 md:p-0"
    >
      <div className="flex flex-wrap-reverse justify-center gap-8">
        <div className="flex flex-col flex-wrap items-start gap-6 lg:justify-center">
          <div className="flex flex-col flex-wrap items-start gap-2">
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
            flex
            gap-2
            rounded-md
            bg-amber-400
            py-2
            px-6
            shadow-xl
            ring-neutral-900
            ring-offset-4
            ring-offset-white
            transition-shadow
            hover:shadow-none
            focus:outline-none
            focus-visible:ring-4
            dark:text-neutral-900
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
