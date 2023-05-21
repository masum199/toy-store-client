import { Link } from 'react-router-dom';
import error from '../../assets/images/5203299.jpg';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-400 text-white">
      <img src={error} alt="Error" className="w-1/3" />
      <h1 className="text-4xl mt-8 font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg mt-4 text-gray-300">
        We apologize for the inconvenience. Please try again later.
      </p>
      <div>
      <Link to='/'><button className="btn btn-wide text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Go Back To Home?</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;