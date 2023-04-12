import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Header = () => {
  const [bar, setBars] = useState(false);
  const handelStartJobs = () => {
    toast.success('Choose Your Jobs', {
      icon: '🥰',
      style: {
        borderRadius: '4px',
        padding: '0.5rem',
        margin: '0.5rem',
        fontSize: '1.2rem',
      },
    });
  };
  const handelBar = () => {
    setBars(!bar);
  };
  return (
    <nav className='max-w-7xl mx-auto relative'>
      <div className='md:flex justify-between py-7 items-center'>
        <div className='flex justify-between'>
          <Link
            to='/'
            className='font-bold text-transparent md:text-5xl text-3xl bg-clip-text bg-gradient-to-r from-sky-300  to-violet-600'
          >
            beEmployed
          </Link>
          <button onClick={handelBar} className='text-right'>
            {!bar ? (
              <Bars3Icon className='h-5 w-5 md:hidden'></Bars3Icon>
            ) : (
              <XMarkIcon className='h-5 w-5 md:hidden'></XMarkIcon>
            )}
          </button>
        </div>
        <div
          className={`flex md:gap-7 flex-col md:flex-row  ${
            !bar && 'hidden'
          } md:block absolute md:relative right-5 duration-75`}
        >
          <Link to='/Statistics' className='text-gray-500 text-lg md:pr-3'>
            Statistics
          </Link>
          <Link to='/appliedJobs' className='text-gray-500 text-lg md:pr-3'>
            Applied Jobs
          </Link>
          <Link to='/blog' className='text-gray-500 text-lg '>
            Blog
          </Link>
        </div>
        <Link onClick={handelStartJobs}>
          <HashLink
            to='#featuredJobs'
            className='btn-primary hidden md:block'
            smooth
          >
            Start Applies
          </HashLink>
        </Link>
      </div>
      <Toaster />
    </nav>
  );
};

export default Header;
