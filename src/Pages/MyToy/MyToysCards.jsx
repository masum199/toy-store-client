/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const MyToysCards = ({ mytoy, index }) => {
  const { toyName,  price, quantity, _id, photo, details } = mytoy;

  const [deleted, setDeleted] = useState(false);

  // delete
  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://toy-store-server-alpha.vercel.app/alltoys/delete/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Success",
              text: "You have successfully deleted the product!",
              icon: "success",
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
            });
            setDeleted(true);
          }
        });
    }
  };

  if (deleted) {
    return null;
  }



  



  return (
    <tr className="hover">
      <td>
        <img className="w-32" src={photo} alt="" />
      </td>
      <td>{toyName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td ><p className="w-10 overflow-hidden">{details}</p></td>
      <td>
        <Link to={`/updatetoys/${_id}`}>
          <button className="btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">UPDATE</button>
        </Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default MyToysCards;