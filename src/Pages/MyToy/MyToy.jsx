import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysCards from "./MyToysCards";


const MyToy = () => {
    const [mytoys,setMytoys] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user.email)
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/user/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMytoys(data)
        })
    },[user])
    return (
        <div>
          {
            mytoys.map(mytoy => <MyToysCards key={mytoy._id}
            mytoy={mytoy}
            ></MyToysCards>)
          }
        </div>
    );
};

export default MyToy;