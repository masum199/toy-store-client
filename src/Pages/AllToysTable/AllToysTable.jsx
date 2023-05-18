/* eslint-disable react/prop-types */


const AllToysTable = ({toy}) => {
    const {toyName,sellername,category
        ,price,quantity,

    } = toy
    return (
        <tr className="hover">
        <th>1</th>
        <td>{sellername}</td>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button className="btn">View Details</button></td>
    </tr>
    );
};

export default AllToysTable;