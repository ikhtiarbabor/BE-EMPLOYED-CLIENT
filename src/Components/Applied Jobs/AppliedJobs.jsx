import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getLocalData } from '../../localStore/LocalStore';
import Job from './Job';
import CommonSecBanner from '../ComonSecBanner/CommonSecBanner';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  const [job, setJob] = useState([]);
  const [filterJob, setFilterJob] = useState([]);
  useEffect(() => {
    const getJobLocal = [];
    const storedJobs = getLocalData();
    if (storedJobs?.length > 0) {
      for (let id of storedJobs) {
        const appliedJob = appliedJobs?.find((job) => job._id === id);
        getJobLocal.push(appliedJob);
      }
    }
    setJob(getJobLocal);
    setFilterJob(getJobLocal);
  }, [appliedJobs]);
  console.log(job);
  const handelFilter = (text) => {
    const filterRemote = filterJob.filter(
      (j) => j.tags.find((t) => t === text) === text
    );
    setJob(filterRemote);
  };
  return (
    <>
      <CommonSecBanner>Applied Jobs</CommonSecBanner>

      <section className='section-container'>
        <div className={`flex gap-3 ${job.length === 0 ? 'hidden' : 'block'}`}>
          <Link to='/appliedJobs' className='applied-button'>
            All Applied Jobs
          </Link>
          <button
            className='applied-button'
            onClick={() => handelFilter('remote')}
          >
            Remote Job
          </button>
          <button
            onClick={() => handelFilter('onsite')}
            className='applied-button'
          >
            Onsite Job
          </button>
          <button
            onClick={() => handelFilter('half time')}
            className='applied-button'
          >
            Half Time Job
          </button>
          <button
            onClick={() => handelFilter('full time')}
            className='applied-button'
          >
            Full Time Job
          </button>
        </div>
        {job?.map((job, index) => (
          <Job key={job._id + index} job={job} />
        ))}
        {job.length === 0 && <div>You don't apply Job Yet</div>}
      </section>
    </>
  );
};

export default AppliedJobs;
