import React from 'react';
import CommonSecBanner from '../ComonSecBanner/CommonSecBanner';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Tooltip } from 'recharts';

const Statistics = () => {
  const data = useLoaderData();

  return (
    <>
      <CommonSecBanner>MOHAMMAD IKHTIAR UDDIN</CommonSecBanner>
      <section className='grid grid-cols-2 max-w-7xl mx-auto mt-8'>
        <div>
          <h2 className='text-center text-3xl mb-5 '>Assignment Details</h2>
          <div>
            <div className='grid grid-cols-2'>
              <div>
                <h3 className='text-center'>Assignment Name:</h3>
              </div>
              <div>
                <h2 className='text-center'>Assignment Marks:</h2>
              </div>
              {data.map((assName, index) => (
                <>
                  <div className='rounded bg-slate-100 my-3 p-4'>
                    {index + 1}.{assName.name}
                  </div>
                  <div
                    key={assName + index}
                    className='rounded bg-slate-100 my-3 p-4 text-center'
                  >
                    {assName.marks}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-center text-3xl'>Assignment Marks Analytics</h2>
          <PieChart width={700} height={600}>
            <defs>
              <linearGradient id='colorUv' x1='1' y1='1' x2='0' y2='0'>
                <stop offset='20%' stopColor='#7dd3fc' stopOpacity={0.5} />
                <stop offset='90%' stopColor='#7c3aed' stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <Pie
              dataKey='marks'
              isAnimationActive={false}
              data={data}
              cx={300}
              cy={300}
              outerRadius={120}
              fill='url(#colorUv)'
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </section>
    </>
  );
};

export default Statistics;
