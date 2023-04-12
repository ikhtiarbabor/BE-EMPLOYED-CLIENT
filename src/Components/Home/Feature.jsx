import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import { useLoaderData } from 'react-router-dom';

const Feature = () => {
  const [features, setFeatures] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch('featureJobs.json')
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  const handleSeeAllJobs = () => {
    setShowAll(true);
  };
  return (
    <section className='section-container' id='featuredJobs'>
      <h2 className='section-title'>Featured Jobs</h2>
      <p className='pb-6'>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className='grid sm:grid-cols-2 gap-7'>
        {features.slice(0, showAll ? features.length : 4).map((feature) => (
          <FeatureCard
            key={feature._id}
            feature={feature}
            features={features}
          />
        ))}
      </div>
      <button
        className={`btn-primary ${showAll && 'hidden'} my-9`}
        onClick={handleSeeAllJobs}
      >
        See All Jobs
      </button>
    </section>
  );
};

export default Feature;
