/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blog1 from '../../../assets/images/blog1.jpg';
import blog2 from '../../../assets/images/blog2.jpg';
import blog3 from '../../../assets/images/blog3.jpg';
import blog4 from '../../../assets/images/blog4.jpg';
import blog5 from '../../../assets/images/blog5.jpg';
import blog6 from '../../../assets/images/blog8.jpg';
import useTitle from '../../../Title/Title';
const OurBlog = () => {
  useTitle("Our Blog");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='mt-32'>
      <div className=''>
        <div className='text-center '>
          <h1 className='text-5xl font-bold '>Discover Our Blog</h1>
          <h2 className='text-5xl my-10 '>Get Inspired and Stay Informed</h2>
        </div>
        <div className='flex justify-center my-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 gap-x-28'>
            <div data-aos='fade-up'>
              <img className='w-96' src={blog1} alt='' />
              <p className='blog-date text-warning'>10th August 2021</p>
              <h2 className=''>Kids having a blast with our car toys!</h2>
            </div>
            <div data-aos='fade-up bob'>
              <img className='w-96' src={blog2} alt='' />
              <p className='blog-date text-warning'>15th September 2021</p>
              <h2 className=''>Igniting imagination through car adventures</h2>
            </div>
            <div data-aos='fade-up bob'>
              <img className='w-96' src={blog3} alt='' />
              <p className='blog-date text-warning'>20th October 2021</p>
              <h2 className=''>Revving up the fun with interactive car toys</h2>
            </div>
            <div data-aos='fade-up bob'>
              <img className='w-96 four' src={blog4} alt='' />
              <p className='blog-date text-warning'>5th November 2021</p>
              <h2 className=''>Racing to victory: A day at the track</h2>
            </div>
            <div data-aos='fade-up bob'>
              <img className='w-96' src={blog5} alt='' />
              <p className='blog-date text-warning'>15th December 2021</p>
              <h2 className=''>Building dreams: Car toy collections</h2>
            </div>
            <div data-aos='fade-up bob'>
              <img className='w-96' src={blog6} alt='' />
              <p className='blog-date text-warning'>20th January 2022</p>
              <h2 className=''>Driving into imagination: The power of play</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;