import banner from '../../assets/images/toy9.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div className="hero min-h-screen text-black ">
    <div className="hero-content flex-col lg:flex-row-reverse ">
      <img src={banner} className="w-1/2 rounded-lg shadow-2xl" />
      <div className=''>
        <h1 className="text-6xl font-bold"><span className='textStyle'>EXPLORE</span> THE <br/> WORLD OF TOY CARS</h1>
        <p className="py-6  ">Experience the excitement of miniature racing with our wide selection of toy cars.</p>
        <div className='flex gap-10'>
          <div>
          <span>+10000</span> 
          <br />
          <span className='text-slate-300'>Products</span>
          </div>
          <div>
          <span>+500</span> 
          <br />
          <span className='text-slate-300'>Sellers</span>
          </div>
          <div>
          <span>+5000</span> 
          <br />
          <span className='text-slate-300'>Reviews</span>
          </div>
        </div>
       <div className=''>
       <button className="btn  btn-outline  btn-warning glass mr-10">Get Started</button>
        <button className="btn  btn-outline btn-warning glass">Learn more</button>
       </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;