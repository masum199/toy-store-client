import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const toys = useLoaderData();
  const { picture, description, price, quantity, rating, sellerName, sellerEmail, toyName } = toys;

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
        <img src={picture} alt="Toy" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="text-center lg:text-left p-4">
          <h1 className="text-5xl font-bold">{toyName}</h1>
          <p className="text-gray-600">{sellerName}</p>
          <p className="text-gray-600">{sellerEmail}</p>
          <p className="text-2xl font-bold mt-4">${price}</p>
          <p className="text-gray-600">Available: {quantity}</p>
          <div className="flex-grow-1">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              readonly
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            />
          </div>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;