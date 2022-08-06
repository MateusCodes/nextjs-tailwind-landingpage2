import React from 'react';
import Image from 'next/future/image';

const Partner = () => {
  return (
    <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
      <Image
        className="h-15 w-15"
        src="/partner1.png"
        blurDataURL="/partner1.png"
        placeholder="blur"
        alt="partner1"
        width={77}
        height={43}
      />
    </div>
  );
};

export default Partner;
