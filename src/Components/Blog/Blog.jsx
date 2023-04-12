import React from 'react';
import CommonSecBanner from '../ComonSecBanner/CommonSecBanner';

const Blog = () => {
  return (
    <>
      <CommonSecBanner>Blog</CommonSecBanner>
      <section className='section-container'>
        <div className='grid md:grid-cols-3 gap-4 my-5 items-center bg-gray-100 p-6 rounded md:gap-y-3'>
          <div className='bg-gray-300 h-full flex justify-center items-center rounded'>
            <img
              src='https://i.ibb.co/D53yF73/Context-API-in-React-with-Hooks.png'
              alt=''
              className='p-7'
            />
          </div>
          <article>
            <h2 className='text-2xl'>When should we use Context API?</h2>
            <p>
              When we understand the data transfer is too much complex via prop
              drilling, and we need to send data to all components that time we
              need to use Context API.
            </p>
          </article>
          <div className='bg-gray-300 h-full flex justify-center items-center rounded'>
            <img
              src='https://i.ibb.co/n38v1Dz/1-esdk-Rk3-TTqm-Ek-T064-DL4-Vg-removebg-preview-1.png'
              alt=''
              className='p-7'
            />
          </div>
          <article>
            <h2 className='text-2xl'>what is Custom Hooks?</h2>
            <p>
              A custom hook is a special JavaScript function whose name starts
              with ‘use’ and can be used to call other hooks.
            </p>
          </article>
          <div className='bg-gray-300 h-full flex justify-center items-center rounded'>
            <img
              src='https://i.ibb.co/5MNWkkv/qnwi8ehe64zysba5y195-MConverter-eu-removebg-preview.png'
              alt=''
              className='p-7'
            />
          </div>
          <article>
            <h2 className='text-2xl'>What is useRef ?</h2>
            <p>
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Blog;
