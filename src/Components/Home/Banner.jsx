import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 items-center'>
        <div className='bannerText'>
          <h1 className='md:text-7xl text-4xl font-bold leading-tight'>
            One Step <br /> Closer To Your <br />
            <span className='text-primary'> Dream Job</span>
          </h1>
          <p className='text-accent'>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className='btn-primary mt-3'>Get Started</button>
        </div>
        <div className='banner-img'>
          <img
            src='https://i.ibb.co/Ttkz1pk/P3-OLGJ1-copy-1.png'
            alt='P3-OLGJ1-copy-1'
            className='object-cover md:max-w-lg mx-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
