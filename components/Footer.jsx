import React from 'react';
import Image from 'next/future/image';

const Footer = () => {
  return (
    <footer className="container mx-auto px-8 overflow-hidden mt-10">
      <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
        <div className="md:flex-1 md:max-w-sm relative">
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
            className="py-2 px-6 shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-neutral-800 bg-amber-400 dark:ring-amber-400 dark:text-neutral-900 mx-auto mt-12 flex gap-2 w-max md:mb-12"
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
            className="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs"
          />
        </div>

        <form
          className="            
            relative
            border-8
            border-neutral-900
            p-6
            rounded-lg
            grid
            gap-8
            md:flex-1
            md:max-w-lg
            my-4
            md:my-12
            lg:my-16
            bg-white
            dark:bg-neutral-800
            w-full"
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
                border-4
                border-amber-400
                rounded-md
                focus:ring-4
                dark:focus:ring-offset-2
                focus:ring-amber-400
                focus:border-amber-400
                focus:outline-none
                dark:bg-amber-400
                dark:text-neutral-900
                placeholder-transparent"
            />
            <label
              htmlFor="name"
              className="         
        text-neutral-500
          text-sm
          font-bold
          uppercase
          absolute
          -top-4
          left-2
          -translate-y-1/2
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
                border-4
                border-amber-400
                rounded-md
                focus:ring-4
                dark:focus:ring-offset-2
                focus:ring-amber-400
                focus:border-amber-400
                focus:outline-none
                dark:bg-amber-400
                dark:text-neutral-900
                placeholder-transparent"
            />
            <label
              htmlFor="email"
              className="         
        text-neutral-500
          text-sm
          font-bold
          uppercase
          absolute
          -top-4
          left-2
          -translate-y-1/2
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
                resize-none
                w-full
                border-4
                border-amber-400
                rounded-md
                focus:ring-4
                dark:focus:ring-offset-2
                focus:ring-amber-400
                focus:border-amber-400
                focus:outline-none
                dark:bg-amber-400
                dark:text-neutral-900
                placeholder-transparent"
              placeholder="How can we help?"
            ></textarea>
            <label
              htmlFor="content"
              className="         
        text-neutral-500
          text-sm
          font-bold
          uppercase
          absolute
          -top-3
          left-2
          -translate-y-1/2
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
            py-2
            px-6
            bg-neutral-900
            text-white
            w-max
            shadow-xl
            hover:shadow-none
            transition-shadow
            focus:outline-none
            focus-visible:ring-4
            ring-neutral-900
            rounded-md
            ring-offset-4
            ring-offset-white
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
