import banner from '../../assets/images/peakpx (2).jpg'

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Explore the World of Toy Cars</h1>
        <p className="py-6">Experience the excitement of miniature racing with our wide selection of toy cars.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;