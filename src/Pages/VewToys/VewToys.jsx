import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./Vewtoys.css";
import useTitle from "../../Title/Title";

const ViewToys = () => {
  const toys = useLoaderData();
  const {category, photo, toyName, sellername, sellerEmail, price, rating, quantity, details } = toys;

  useTitle("VewToys")

  return (
    <div className="view-toys bg-gradient-to-b from-purple-900 to-blue-900 min-h-screen text-white">
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
        <img src={photo} alt="Toy" className="max-w-sm rounded-lg shadow-2xl animate-fadeIn" />
        <div className="text-center lg:text-left p-4">
          <h1 className="text-4xl lg:text-5xl font-bold animate-slideInRight">{toyName}</h1>
          <p className="text-gray-400 text-lg mt-2 animate-slideInLeft">Sold by: {sellername}</p>
          <p className="text-gray-400 text-lg mt-2 animate-slideInLeft">Contact: {sellerEmail}</p>
          <p className="text-3xl lg:text-4xl font-bold mt-4 animate-slideInRight">{category}</p>
          <p className="text-3xl lg:text-4xl font-bold mt-4 animate-slideInRight">${price}</p>
          <p className="text-gray-400 text-lg mt-2 animate-slideInLeft">Availability: {quantity}</p>
          <div className=" mt-4 animate-slideInRight">
            <Rating
              initialRating={rating}
              emptySymbol={<FaRegStar className="empty-star" />}
              placeholderSymbol={<FaStar className="placeholder-star" />}
              fullSymbol={<FaStar className="full-star" />}
              readonly
            />
          </div>
          <p className="mt-4 animate-slideInUp">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewToys;