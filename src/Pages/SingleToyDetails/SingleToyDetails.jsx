import { FaRegStar, FaStar, FaEnvelope } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import "./SingleToyDetails.css";

const SingleToyDetails = () => {
  const toys = useLoaderData();
  const { picture, description, price, quantity, rating, sellerName, sellerEmail, toyName } = toys;

  return (
    <div className="single-toy-details">
      <div className="image-container">
        <img src={picture} alt="Toy" className="toy-image" />
      </div>
      <div className="info-container">
        <h1 className="toy-name">{toyName}</h1>
        <div className="seller-info">
          <h2 className="seller-name">
            <FaEnvelope className="icon-envelope mr-2" />
            {sellerName}
          </h2>
          <p className="seller-email">
            <FaEnvelope className="icon-envelope mr-2" />
            {sellerEmail}
          </p>
        </div>
        <div className="price-rating-container">
          <div className="price-container">
            <p className="price">${price}</p>
            <p className="availability">Available: {quantity} in stock</p>
          </div>
          <div className="rating-container lg:mr-10">
            <p>{rating} Rating</p>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="empty-star" />}
              readonly
              placeholderSymbol={<FaStar className="placeholder-star" />}
              fullSymbol={<FaStar className="full-star" />}
            />
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default SingleToyDetails;