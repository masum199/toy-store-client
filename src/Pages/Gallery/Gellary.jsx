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
import { useEffect, useState } from 'react';



const Gallery = () => {
    const category1= [gallery1, gallery2,gallery3];
    const gallery = [gallery4, gallery5,gallery6];
    const category2= [gallery7, gallery8, gallery9]
    const [currentGallery, setCurrentGallery] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentGallery((prevGallery) => (prevGallery + 1) % category1.length);
        }, 3000);
    
        return () => clearInterval(interval); 
      }, [category1.length]);


  return (
    <div className='flex justify-center'>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
      <img className='w-80' src={category1[currentGallery]} alt={`Image ${currentGallery + 1}`} />
    </div>
    <div>
      <img className='w-80' src={gallery[currentGallery]} alt={`Image ${currentGallery + 2}`} />
    </div>
    <div>
      <img className='w-80' src={category2[currentGallery]} alt={`Image ${currentGallery + 2}`} />
    </div>
</div>
    </div>
  );
};

export default Gallery;