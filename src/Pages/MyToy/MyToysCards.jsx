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
      fetch(`http://localhost:5000/alltoys/delete/${_id}`, {
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
        <img className="w-20" src={photo} alt="" />
      </td>
      <td>{toyName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{details}</td>
      <td>
        <Link to={`/updatetoys/${_id}`}>
          <button className="btn">UPDATE</button>
        </Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn">
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default MyToysCards;