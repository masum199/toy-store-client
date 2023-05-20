import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysCards from "./MyToysCards";

const MyToy = () => {
  const [mytoys, setMytoys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/user/${user.email}?sortOrder=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setMytoys(data);
      });
  }, [user, sortOrder]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              SORT BY PRICE
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button onClick={handleSortChange} value="asc">
                  LOW TO HIGH
                </button>
              </li>
              <li>
                <button onClick={handleSortChange} value="desc">
                  HIGH TO LOW
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy Image</th>
              <th>ToyName</th>
              <th>PRICE</th>
              <th>AVAILABLE QUANTITY</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {mytoys.map((mytoy, index) => (
              <MyToysCards key={mytoy._id} mytoy={mytoy} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;