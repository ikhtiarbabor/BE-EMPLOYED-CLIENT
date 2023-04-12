import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  const { address, salary, companyLogo, title, tags, company, _id } = job;
  return (
    <div className='grid md:grid-cols-[2fr,3fr,1fr] gap-4 my-5 items-center bg-gray-100 p-6 rounded md:gap-y-3'>
      <div className='bg-gray-300 h-full flex justify-center items-center rounded'>
        <img src={companyLogo} alt='' className='p-7' />
      </div>
      <div className='md:text-left'>
        <h2 className='text-xl font-bold capitalize'>{title}</h2>
        <p className='text-gray-500 py-4 text-lg'>{company}</p>
        {tags.map((tag, index) => (
          <button
            key={index}
            className='border-sky-600 my-3 capitalize mr-3 py-2 px-4 rounded border-2'
          >
            {tag}
          </button>
        ))}
        <p className='mb-3'>
          <span className='flex'>
            <MapPinIcon className='h4 w-5 text-violet-400' /> {address}{' '}
            <CurrencyDollarIcon className='h6 w-6 ml-2 text-violet-400' />{' '}
            <span>{salary}</span>
          </span>{' '}
        </p>
      </div>
      <div className='md:text-right'>
        <Link to={`/jobDetails/${_id}`} className='btn-primary inline-block'>
          Job details
        </Link>
      </div>
    </div>
  );
};

export default Job;
