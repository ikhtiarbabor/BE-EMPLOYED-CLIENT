import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-300 py-3'>
      <div className='divide-y md:divide-y-0 divide-gray-300 mx-auto max-w-7xl pt-7 mt-7 grid md:grid-cols-5 sm:grid-cols-3gap-5'>
        <div className='pb-3 md:pb-0'>
          <h2 className='font-bold text-transparent md:text-3xl text-2xl bg-clip-text bg-gradient-to-r from-sky-300  to-violet-600'>
            beEmployed
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
        </div>
        <div className='pt-2 pb-3 md:pb-0 text-center md:text-left '>
          <h2 className='text-white text-1xl pb-2'>Company</h2>
          <p>
            About Us <br /> Work <br /> Latest <br /> News <br /> Careers
          </p>
        </div>
        <div className='pt-2 pb-3 md:pb-0 text-center md:text-left'>
          <h2 className='text-white text-1xl pb-2'>product</h2>
          <p>
            Prototype <br />
            Plans & Pricing <br />
            Customers <br />
            Integrations
          </p>
        </div>
        <div className='pt-2 pb-3 md:pb-0 text-center md:text-left'>
          <h2 className='text-white text-1xl pb-2'>Support</h2>
          <p>
            Help Desk <br />
            Sales <br />
            Become a Partner <br />
            Developers
          </p>
        </div>
        <div className='pt-2 pb-3 md:pb-0 text-center md:text-left'>
          <h2 className='text-white text-1xl pb-2'>Contact</h2>
          <p>
            524 Broadway , NYC <br />
            +1 777 - 978 - 5570
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
