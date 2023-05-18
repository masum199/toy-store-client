import error from '../../assets/images/5203299.jpg';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-400 text-white">
      <img src={error} alt="Error" className="w-1/3" />
      <h1 className="text-4xl mt-8 font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg mt-4 text-gray-300">
        We apologize for the inconvenience. Please try again later.
      </p>
    </div>
  );
};

export default ErrorPage;