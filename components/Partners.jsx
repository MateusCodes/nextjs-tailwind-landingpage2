import React from 'react';
import { Partner } from '../components/index';

const Partners = () => {
  return (
    <section
      data-aos="fade-left"
      id="partners"
      className="mt-10 grid place-items-center gap-8 text-center"
    >
      <div className="grid gap-4">
        <h2 className="text-4xl font-bold text-amber-400">Our Partners</h2>
      </div>
      <p className="w-full max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolore
        excepturi libero deleniti natus placeat quis incidunt adipisci optio
        quisquam tenetur pariatur magnam blanditiis itaque, accusantium aliquam.
        Minus, alias ipsa.
      </p>
      <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-8 md:gap-x-16">
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
      </div>
    </section>
  );
};

export default Partners;
