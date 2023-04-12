import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  AtSymbolIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import { addData, getLocalData } from '../../localStore/LocalStore';
import CommonSecBanner from '../ComonSecBanner/CommonSecBanner';
import swal from 'sweetalert';

const JobDetails = () => {
  const data = useLoaderData();
  const [apply, setApply] = useState(false);
  const applyJob = (id) => {
    addData(id);
    setApply(true);
    sweetAlert('😊', 'You apply this job', 'success');
  };
  useEffect(() => {
    let applied;
    const storedJobs = getLocalData();
    if (storedJobs?.length > 0) {
      for (let id of storedJobs) {
        if (data._id === id) {
          applied = true;
        }
      }
    }
    setApply(applied);
  }, []);
  const {
    Experience,
    address,
    job_description,
    job_responsibility,
    requirements,
    salary,
    phone,
    email,
    job_title,
    _id,
  } = data;
  return (
    <>
      <CommonSecBanner>Jobs Details</CommonSecBanner>
      <section className='section-container'>
        <div className='grid md:grid-cols-[2fr,1fr] gap-y-5 gap-x-7'>
          <div className='text-left pt-8'>
            <p className='pb-5'>
              <strong>Job Description:</strong>
              <span className='leading-7'>{job_description}</span>
            </p>
            <p className='pb-5'>
              <strong>Job Responsibility:</strong>
              <span className='leading-7'>{job_responsibility}</span>
            </p>
            <p className='pb-5'>
              <strong className='block'>Educational Requirements:</strong>
              {requirements}
            </p>
            <p className='pb-5'>
              <strong className='block'>Experiences:</strong>
              {Experience}
            </p>
          </div>
          <div>
            <div className='text-left bg-purple-100 px-7 py-9 text-gray-600 rounded'>
              <div>
                <h2 className='border-b-2 border-gray-300 text-2xl py-4 text-gray-500'>
                  Job Details
                </h2>
                <p className='flex items-center pt-4 pb-2'>
                  <CurrencyDollarIcon className='h-6 w-9 text-primary' />
                  <strong>Salary:</strong>
                  {salary}
                </p>
                <p className='flex items-center pb-4'>
                  {' '}
                  <CalendarIcon className='h-6 w-9 text-primary' />{' '}
                  <strong>Job Title:</strong>
                  {job_title}
                </p>
              </div>
              <div>
                <h2 className='border-b-2 border-gray-300 text-xl pb-4 text-gray-500'>
                  Contact Information
                </h2>
                <p className='flex items-center pt-4'>
                  {' '}
                  <PhoneIcon className='h-6 w-9 text-primary' />{' '}
                  <strong>Phone: </strong>
                  {phone}
                </p>
                <p className='flex items-center pt-4'>
                  {' '}
                  <AtSymbolIcon className='h-6 w-9 text-primary' />{' '}
                  <strong>Email:</strong>
                  {email}
                </p>
                <p className='flex items-center pt-4'>
                  <MapPinIcon className='h-6 w-9 text-primary' />{' '}
                  <strong>Address:</strong>
                  {address}
                </p>
              </div>
            </div>
            {apply ? (
              <button
                disabled
                className='bg-gradient-to-r from-sky-500 to-violet-400 text-white w-full py-3 rounded mt-4 text-3xl'
              >
                You Already Applied
              </button>
            ) : (
              <button
                onClick={() => applyJob(_id)}
                className='bg-violet-400 w-full text-white py-3 rounded mt-4 text-3xl'
              >
                Apply Now
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
