import { useEffect, useState } from "react";
import AllToysTable from "../AllToysTable/AllToysTable";


const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])
    console.log(toys)
    return (
        <div>
         <div>
              <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
  toys.map(toy => <AllToysTable key={toy._id}
  toy={toy}
  ></AllToysTable> )
}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};




export default AllToys;