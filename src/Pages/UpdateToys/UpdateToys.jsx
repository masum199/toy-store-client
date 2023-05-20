import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToys = () => {
    const toy = useLoaderData()
   
    const handleUpdate = (event) =>{
        const proceed = confirm('Are you sure you want to update')
        event.preventDefault();
        const form = event.target
        const price = form.price.value
        const quantity = form.quantity.value
        const details = form.details.value
        const updateToy = {price, quantity, details}
        console.log(updateToy)
        if(proceed){
            fetch(`https://toy-store-server-alpha.vercel.app/alltoys/put/${toy._id}`,{
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updateToy)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success',
                        text: 'You have successfully updated your product',
                        icon: 'success',
                        toast: true,
                        position: 'top',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                      });
                }
            })
        }

    }


    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleUpdate} className=" bg-slate-400 p-20">
                {/* 1 */}
                <div className="flex gap-16">
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>price</span>
                                <input type="text" defaultValue={toy.price} name="price" placeholder="price" className="input input-bordered" required/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>Quantity</span>
                                <input type="text" defaultValue={toy.quantity} name="quantity" placeholder="quantity" className="input input-bordered" required/>
                            </label>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex gap-16 my-8">
                    <div>
                    <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>Detail description</span>
                                <textarea type="text" defaultValue={toy.details} name="details" placeholder="Detail description" className="input input-bordered h-20" required/>
                            </label>
                        </div>
                    </div>
                </div>
                <input className="my-10 btn btn-block" type="submit" value="submit"/>
            </form>


        </div>
    );
};

export default UpdateToys;