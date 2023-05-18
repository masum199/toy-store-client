import gallery1 from '../../assets/images/toy1.jpg';
import gallery2 from '../../assets/images/toy2.jpg';
import gallery3 from '../../assets/images/toy3.jpg';
import gallery4 from '../../assets/images/toy4.jpg';
import gallery5 from '../../assets/images/toy5.jpg';
import gallery6 from '../../assets/images/toy6.jpg';
import gallery7 from '../../assets/images/toy7.jpg';
import gallery8 from '../../assets/images/toy8.jpg';


const Gallery = () => {
  return (
    <div className="container mx-auto md:pl-10 mt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg w-60" src={gallery1} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg w-60" src={gallery2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg w-60" src={gallery3} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg w-60" src={gallery4} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg w-60" src={gallery5} alt="" />
        </div>
        <div>
          <img
            className="h-40 max-w-full rounded-lg w-60"
            src={gallery8}
            alt=""
          />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg w-60" src={gallery6} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg w-60" src={gallery7} alt="" />
        </div>
       
      </div>
    </div>
  );
};

export default Gallery;