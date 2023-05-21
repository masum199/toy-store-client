/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SportsCars = ({ categorie }) => {
  const { photo, toyName, price, rating, _id } = categorie;
  const { user } = useContext(AuthContext);
console.log(categorie)
  const handleViewDetails = () => {
    if (user) {
    //   
    } else {
     
      alert("You need to log in to view this toy.");
     
    }
  };

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={photo} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {toyName}
          </h5>
          <div className="flex justify-between">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${price}</p>
            
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              readonly
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </div>
          <div className="flex justify-center">
            <Link to={`/singletoy/${_id}`}>
              <button
                className="btn-wide relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                onClick={handleViewDetails}
              >
                <span className="btn-wide relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Details
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCars;