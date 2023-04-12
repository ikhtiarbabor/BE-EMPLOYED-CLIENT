import React, { useEffect, useState } from 'react';

const JobCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch('category.json')
      .then((response) => response.json())
      .then((json) => setCategory(json));
  }, []);

  return (
    <section className='section-container'>
      <h2 className='section-title'>Job Category list</h2>
      <p className='pb-6'>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 sm:gap-4 gap-y-6'>
        {category.map((c) => (
          <div
            key={c._id+'p'}
            className='bg-purple-100 p-4 rounded sm:text-left text-center'
          >
            <img
              src={c.picture}
              alt=''
              className='object-cover bg-purple-200 p-2 rounded my-3 mx-auto sm:mx-0'
            />
            <h2 className='font-bold'>{c.title}</h2>
            <p className='text-accent my-3'>{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategory;
