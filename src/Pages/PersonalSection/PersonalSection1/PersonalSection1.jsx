/* eslint-disable react/no-unescaped-entities */
import { FaCar, FaHammer, FaLightbulb, FaBookOpen, FaCube, FaShieldAlt } from 'react-icons/fa';
import './PersonalSection1.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PersonalSection1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='my-10 lg:mx-10  mt-32'>
      <div className='text-center my-8 design' data-aos="fade-up" data-aos-delay="200">
        <h1 className='text-3xl font-bold mb-4'>The Best Features of Our Car Toys</h1>
        <p className='text-lg mb-8'>Discover why our car toys stand out from the rest!</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='border hov p-6' data-aos='fade-up'>
          <div className='rounded-full p-4'>
            <FaCar size={40} />
          </div>
          <h2 className='text-xl font-bold mt-4 animate__animated animate__fadeInUp animate__delay-2s'>
            Realistic Design
          </h2>
          <p className='animate__animated animate__fadeInUp animate__delay-2s'>
            Our car toys are meticulously designed to resemble real vehicles, providing an immersive play experience.
          </p>
        </div>

        <div className='border hov p-6' data-aos='fade-up'>
          <div className='rounded-full p-4'>
            <FaHammer size={40} />
          </div>
          <h2 className='text-xl font-bold mt-4'>Durable Construction</h2>
          <p className=''>
            With high-quality materials and sturdy build, our car toys are built to withstand rough play and last for a long time.
          </p>
        </div>

        <div className='border hov p-6' data-aos='fade-up'>
          <div className='rounded-full p-4'>
            <FaLightbulb size={40} />
          </div>
          <h2 className='text-xl font-bold mt-4'>Interactive Functions</h2>
          <p className=''>
            Many of our car toys feature interactive functions like lights, sounds, and remote control capabilities, adding excitement to playtime.
          </p>
        </div>

        <div className='border hov p-6' data-aos='fade-up'>
          <div className='rounded-full p-4'>
            <FaBookOpen size={40} />
          </div>
          <h2 className='text-xl font-bold mt-4'>Educational Value</h2>
          <p className=''>
            Our car toys not only provide entertainment but also promote cognitive development, fine motor skills, and imaginative play.
          </p>
        </div>

        <div className='border hov p-6' data-aos='fade-up'>
          <div className='rounded-full p-4'>
            <FaCube size={40} />
          </div>
          <h2 className='text-xl font-bold mt-4'>Wide Variety</h2>
          <p className=''>
            From sports cars to off-road vehicles, we offer a wide range of car toy options to suit every child's preference and interest.
          </p>
        </div>

        <div className='border hov p-6' data-aos='fade-up'>
          <div className='rounded-full p-4'>
            <FaShieldAlt size={40} />
          </div>
          <h2 className='text-xl font-bold mt-4'>Safe for Kids</h2>
          <p className=''>
            Ensuring the safety of children is our top priority. Our car toys are made with non-toxic materials and meet strict safety standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalSection1;