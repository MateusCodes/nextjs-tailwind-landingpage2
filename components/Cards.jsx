import React from 'react';
import { Card } from '../components/index';
import Image from 'next/future/image';

const Cards = () => {
  return (
    <section id="cards" data-aos="fade-right">
      <div className="grid gap-12 overflow-hidden px-8 sm:gap-16 md:gap-24 lg:gap-32">
        <a
          href="#"
          className="mx-auto my-12 flex gap-2 rounded-md bg-amber-400 py-2 px-6 shadow-xl ring-neutral-900 ring-offset-4 ring-offset-white transition-shadow hover:shadow-none focus:outline-none focus-visible:ring-4 dark:text-neutral-900 dark:ring-amber-400 dark:ring-offset-neutral-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>Download the App</span>
        </a>

        <div className="relative">
          <Image
            src="/dots.png"
            blurDataURL="/dots.png"
            placeholder="blur"
            alt="dots"
            width={90}
            height={350}
            className="absolute top-1/2 -left-24 hidden -translate-y-1/2 lg:block xl:-left-7"
          />
          <Image
            src="/dots.png"
            blurDataURL="/dots.png"
            placeholder="blur"
            alt="dots"
            width={90}
            height={350}
            className="absolute top-1/2 -right-24 hidden -translate-y-1/2 lg:block xl:-right-7"
          />
          <h2 id="qualities" className="sr-only">
            Our Qualities
          </h2>
          <div className="container mx-auto flex max-w-5xl flex-wrap items-start justify-center gap-12 md:justify-between">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
