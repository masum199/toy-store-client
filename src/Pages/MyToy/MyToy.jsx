import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysCards from "./MyToysCards";


const MyToy = () => {
    const [mytoys,setMytoys] = useState([])
    const {user} = useContext(AuthContext)
    
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/user/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMytoys(data)
        })
    },[user])
    return (
        <div>
         
         <div>
         <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Toy Image</th>
        <th>ToyName</th>
        <th>PRICE</th>
        <th>AVAILABLE QUANTITY</th>
        <th>DETAILS</th>
      </tr>
    </thead>
    <tbody>
    {
            mytoys.map((mytoy, index) => <MyToysCards key={mytoy._id}
            mytoy={mytoy}
            index={index}
            ></MyToysCards>)
          }
      
    </tbody>
  </table>
</div>
         </div>
          
         </div>
    );
};

export default MyToy;