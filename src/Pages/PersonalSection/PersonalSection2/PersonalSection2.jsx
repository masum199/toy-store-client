import React, { useState, useEffect } from 'react';
import image1 from '../../../assets/images/monster1.jpg';
import image2 from '../../../assets/images/monster2.jpg';

const PersonalSection2 = () => {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => prevImage === image1 ? image2 : image1);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, []);

  return (
    <div>
      <img className='w-96 w-full' src={currentImage} alt="Monster" />
    </div>
  );
};

export default PersonalSection2;