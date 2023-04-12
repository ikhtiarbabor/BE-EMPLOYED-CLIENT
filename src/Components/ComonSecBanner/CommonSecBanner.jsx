import React from 'react';

const CommonSecBanner = ({ children }) => {
  return (
    <section className=' h-40 md:h-96 bg-transparent -z-10  flex items-center text-5xl justify-center'>
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/hF1kTjT/Vector-1.png),url(https://i.ibb.co/z7zJd91/Vector.png)`,
          backgroundPosition: 'right top,left bottom',
          backgroundRepeat: 'no-repeat',
        }}
        className='h-40 md:h-[30rem] bg-violet-100 absolute top-0 w-full  -z-10'
      ></div>
      <p className='mb-6'>{children}</p>
    </section>
  );
};

export default CommonSecBanner;
