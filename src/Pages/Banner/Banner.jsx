import banner from '../../assets/images/blog2.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div className="hero min-h-screen text-black back ">
    <div className="hero-content flex-col lg:flex-row-reverse ">
      <img src={banner} className="sty w-1/2 rounded-lg shadow-2xl" />
      <div className=''>
        <h1 className="text-6xl font-bold"><span className='textStyle'>EXPLORE</span> <br/><span className='text-white'> THE WORLD OF TOY CARS</span></h1>
        <p className="py-6 text-white ">Experience the excitement of miniature racing with our wide <br/>selection of toy cars.</p>
        <div className='flex gap-10'>
          <div className=''>
          <span className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'>+10000</span> 
          
          <p className=' mb-6 mt-4 text-white'>Products</p>
          </div>
          <div>
          <span className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'>+500</span> 
          <br />
          <p className='mb-6 mt-4 text-white'>Sellers</p>
          </div>
          <div>
          <span className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'>+5000</span> 
          <br />
          <p className='mb-6 mt-4 text-white'>Reviews</p>
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