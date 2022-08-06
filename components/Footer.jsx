import React from 'react';
import Image from 'next/future/image';

const Footer = () => {
  return (
    <footer
      data-aos="fade-left"
      className="container mx-auto mt-10 overflow-hidden px-8"
    >
      <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
        <div className="relative md:max-w-sm md:flex-1">
          <Image
            src="/lamp.png"
            blurDataURL="/lamp.png"
            placeholder="blur"
            alt="lamp"
            width={171}
            height={266}
            className="mx-auto"
          />
          <a
            href="#"
            className="mx-auto mt-12 flex w-max gap-2 rounded-md bg-amber-400 py-2 px-6 shadow-xl ring-neutral-900 ring-offset-4 ring-offset-white transition-shadow hover:shadow-none focus:outline-none focus-visible:ring-4 dark:text-neutral-900 dark:ring-amber-400 dark:ring-offset-neutral-800 md:mb-12"
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
          <Image
            src="/app.png"
            blurDataURL="/app.png"
            placeholder="blur"
            alt="app"
            width={240}
            height={643}
            className="absolute left-1/2 hidden max-w-16 -translate-x-1/2 drop-shadow-xl md:block xl:max-w-xs"
          />
        </div>

        <form
          className="            
            relative
            my-4
            grid
            w-full
            gap-8
            rounded-lg
            border-8
            border-neutral-900
            bg-white
            p-6
            dark:bg-neutral-800
            md:my-12
            md:max-w-lg
            md:flex-1
            lg:my-16"
        >
          <h2 id="contact" className="text-3xl font-bold">
            Lets Connect
          </h2>
          <div className="relative">
            <input
              placeholder="Your Name"
              type="text"
              name="name"
              id="name"
              className="
                peer
                form-input
                w-full
                rounded-md
                border-4
                border-amber-400
                placeholder-transparent
                focus:border-amber-400
                focus:outline-none
                focus:ring-4
                focus:ring-amber-400
                dark:bg-amber-400
                dark:text-neutral-900
                dark:focus:ring-offset-2"
            />
            <label
              htmlFor="name"
              className="         
        absolute
          -top-4
          left-2
          -translate-y-1/2
          text-sm
          font-bold
          uppercase
          text-neutral-500
          transition-all
          peer-placeholder-shown:left-4
          peer-placeholder-shown:top-1/4
          peer-placeholder-shown:text-neutral-900
          peer-focus:-top-4
          peer-focus:left-2
          peer-focus:text-neutral-600
          dark:peer-focus:text-neutral-300"
            >
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Your Name"
              type="email"
              name="email"
              id="email"
              className="
                peer
                form-input
                w-full
                rounded-md
                border-4
                border-amber-400
                placeholder-transparent
                focus:border-amber-400
                focus:outline-none
                focus:ring-4
                focus:ring-amber-400
                dark:bg-amber-400
                dark:text-neutral-900
                dark:focus:ring-offset-2"
            />
            <label
              htmlFor="email"
              className="         
        absolute
          -top-4
          left-2
          -translate-y-1/2
          text-sm
          font-bold
          uppercase
          text-neutral-500
          transition-all
          peer-placeholder-shown:left-4
          peer-placeholder-shown:top-1/4
          peer-placeholder-shown:text-neutral-900
          peer-focus:-top-4
          peer-focus:left-2
          peer-focus:text-neutral-600
          dark:peer-focus:text-neutral-300"
            >
              Your Email
            </label>
          </div>
          <div className="relative">
            <textarea
              name="content"
              id="content"
              cols="20"
              rows="5"
              className="                peer
                form-textarea
                w-full
                resize-none
                rounded-md
                border-4
                border-amber-400
                placeholder-transparent
                focus:border-amber-400
                focus:outline-none
                focus:ring-4
                focus:ring-amber-400
                dark:bg-amber-400
                dark:text-neutral-900
                dark:focus:ring-offset-2"
              placeholder="How can we help?"
            ></textarea>
            <label
              htmlFor="content"
              className="         
        absolute
          -top-3
          left-2
          -translate-y-1/2
          text-sm
          font-bold
          uppercase
          text-neutral-500
          transition-all
          peer-placeholder-shown:left-4
          peer-placeholder-shown:top-6
          peer-placeholder-shown:text-neutral-900
          peer-focus:-top-4
          peer-focus:left-2
          peer-focus:text-neutral-600
          dark:peer-focus:text-neutral-300"
            >
              How can we help?
            </label>
          </div>
          <a
            href="#"
            className="
            w-max
            rounded-md
            bg-neutral-900
            py-2
            px-6
            text-white
            shadow-xl
            ring-neutral-900
            ring-offset-4
            ring-offset-white
            transition-shadow
            hover:shadow-none
            focus:outline-none
            focus-visible:ring-4
            dark:ring-offset-amber-400
        "
          >
            Sign Up
          </a>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
