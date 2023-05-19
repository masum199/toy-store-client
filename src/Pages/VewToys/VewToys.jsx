import { useLoaderData } from "react-router-dom";


const VewToys = () => {
    const toys = useLoaderData()
    const {photo,toyName,sellername,sellerEmail,price,rating,quantity,details} = toys

    return (
        <div>
           <h2>vew toys</h2> 
        </div>
    );
};

export default VewToys;