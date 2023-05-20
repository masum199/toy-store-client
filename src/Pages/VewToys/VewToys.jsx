/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const ViewToys = () => {
  const toys = useLoaderData();
  const { photo, toyName, sellername, sellerEmail, price, rating, quantity, details } = toys;

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
        <img src={photo} alt="Toy" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="text-center lg:text-left p-4">
          <h1 className="text-5xl font-bold">{toyName}</h1>
          <p className="text-gray-600">{sellername}</p>
          <p className="text-gray-600">{sellerEmail}</p>
          <p className="text-2xl font-bold mt-4">${price}</p>
          <p className="text-gray-600">Available: {quantity}</p>
          <p className="text-yellow-500 mt-2">
            Rating: {rating} 
          </p>
          <p className="mt-4">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewToys;