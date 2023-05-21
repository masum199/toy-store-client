import  { useEffect, useState } from 'react';

import gallery1 from '../../assets/images/toy1.jpg';
import gallery2 from '../../assets/images/toy2.jpg';
import gallery3 from '../../assets/images/toy3.jpg';
import gallery4 from '../../assets/images/toy4.jpg';
import gallery5 from '../../assets/images/toy5.jpg';
import gallery6 from '../../assets/images/toy6.jpg';
import gallery7 from '../../assets/images/toy7.jpg';
import gallery8 from '../../assets/images/toy8.jpg';
import gallery9 from '../../assets/images/toy9.jpg';
import gallery10 from '../../assets/images/toy10.jpg';
import gallery11 from '../../assets/images/toy11.jpg';
import gallery12 from '../../assets/images/toy12.jpg';
import gallery13 from '../../assets/images/toy13.jpg';
import gallery14 from '../../assets/images/toy14.jpg';
import gallery15 from '../../assets/images/toy15.jpg';
import gallery16 from '../../assets/images/toy16.jpg';
import gallery17 from '../../assets/images/toy17.jpg';
import gallery18 from '../../assets/images/toy18.jpg';
import gallery19 from '../../assets/images/toy19.jpg';
import gallery20 from '../../assets/images/toy20.jpg';
import gallery21 from '../../assets/images/toy21.jpg';
import gallery22 from '../../assets/images/toy22.jpg';
import gallery23 from '../../assets/images/toy23.jpg';
import gallery24 from '../../assets/images/toy24.jpg';

const Gallery = () => {
  const category1 = [gallery1, gallery2, gallery3];
  const gallery = [gallery4, gallery5, gallery6];
  const category2 = [gallery7, gallery8, gallery9];
  const category3 = [gallery10, gallery11, gallery12];
  const category4 = [gallery13, gallery14, gallery15];
  const category5 = [gallery16, gallery17, gallery18];
  const category6 = [gallery19, gallery20, gallery21];
  const category7 = [gallery22, gallery23, gallery24];
  const [currentGallery, setCurrentGallery] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGallery((prevGallery) => (prevGallery + 1) % category1.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [category1.length]);

  return (

    <div>
        <h1 className='text-6xl text-center my-10 font-bold'>Vroom Vroom! Toy Car Gallery<br/> Where Fun Meets Speed</h1>
        <div className='flex justify-center'>   
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <img className='w-80 h-80' src={category1[currentGallery]} alt={`Image ${currentGallery + 1}`} />
        </div>
        <div>
          <img className='w-80 h-80' src={gallery[currentGallery]} alt={`Image ${currentGallery + 2}`} />
        </div>
        <div>
          <img className='w-80 h-80' src={category2[currentGallery]} alt={`Image ${currentGallery + 2}`} />
        </div>
        <div>
          <img className='w-80 h-80' src={category3[currentGallery]} alt={`Image ${currentGallery + 2}`} />
        </div>
        <div>
          <img className='w-80 h-80' src={category4[currentGallery]} alt={`Image ${currentGallery + 2}`} />
        </div>
        <div>
          <img className='w-80 h-80' src={category5[currentGallery]} alt={`Image ${currentGallery + 2}`} />
        </div>
        <div>
          <img className='w-80 h-80' src={category6[currentGallery]} alt={`Image ${currentGallery + 2}`} />
        </div>
        <div>
          <img className='w-80 h-80' src={category7[currentGallery]} alt={`Image ${currentGallery + 2}`} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;