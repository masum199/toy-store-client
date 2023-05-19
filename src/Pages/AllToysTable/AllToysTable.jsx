/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllToysTable = ({toy,index}) => {
    const {toyName,sellername,category ,price,quantity,_id} = toy
    return (
        <tr className="hover">
        <th>{index + 1}</th>
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