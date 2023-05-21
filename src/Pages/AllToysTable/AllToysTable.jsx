/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllToysTable = ({toy}) => {
    const {photo,toyName,sellername,category ,price,quantity,_id} = toy
    return (
        <tr className="hover">
        <th><img className="w-32" src={photo} alt="" /></th>
        <td>{sellername}</td>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><Link to={`/allToys/${_id}`}><button className="btn">View Details</button></Link></td>
    </tr>
    );
};

export default AllToysTable;