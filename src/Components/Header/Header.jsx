import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

const Header = () => {
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
  return (
    <nav className='max-w-7xl mx-auto relative'>
      <div className='flex justify-between py-7 items-center'>
        <Link
          to='/'
          className='font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-sky-300  to-violet-600'
        >
          beEmployed
        </Link>
        <div className='flex gap-7'>
          <Link to='/Statistics' className='text-gray-500 text-lg'>
            Statistics
          </Link>
          <Link to='/appliedJobs' className='text-gray-500 text-lg'>
            Applied Jobs
          </Link>
          <Link to='/blog' className='text-gray-500 text-lg'>
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
