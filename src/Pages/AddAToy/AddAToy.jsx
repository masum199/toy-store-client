import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Title/Title";


const AddAToy = () => {
    const { user } = useContext(AuthContext)
    useTitle("Add Product")

    const handleAddToy = (event) => {
        const proceed = confirm('Are you sure you went to add this product')
        event.preventDefault();
        const form = event.target
        const photo = form.photo.value
        const toyName = form.toyname.value
        const sellername = form.sellername.value
        const sellerEmail = form.selleremail.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const details = form.details.value
        const category = form.category.value

        const newToys = { photo, toyName, sellername, sellerEmail, price, rating, quantity, details, category }
        console.log(newToys)
       if(proceed){
        fetch('https://toy-store-server-alpha.vercel.app/alltoys', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToys)
        })
       
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'You have successfully inserted a new product',
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
        <div className="flex items-center justify-center bg-slate-600">
            <form onSubmit={handleAddToy} className=" bg-slate-400 p-20">
                {/* 1 */}
                <div className="flex gap-16">
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>Picture URL</span>
                                <input type="text" name="photo" placeholder="Picture URL" className="input input-bordered" required/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>Toy Name</span>
                                <input type="text" name="toyname" placeholder="Toy Name" className="input input-bordered" required/>
                            </label>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex gap-16 my-8">
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>seller name</span>
                                <input type="text" defaultValue={user?.displayName} name="sellername" placeholder="seller name" className="input input-bordered" required/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>seller email</span>
                                <input type="text" defaultValue={user?.email} name="selleremail" placeholder="seller email" className="input input-bordered" required/>
                            </label>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="flex gap-16">
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>Price</span>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered" required/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>Rating</span>
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required/>
                            </label>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="flex gap-16 my-6">
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>Available quantity</span>
                                <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" required/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-80">
                            <label className="input-group input-group-vertical">
                                <span>Detail description</span>
                                <textarea type="text" name="details" placeholder="Detail description" className="input input-bordered h-20" required/>
                            </label>
                        </div>
                    </div>
                </div>
                <select name="category" className="select w-full max-w-xs" defaultValue="">
                    <option disabled value="">Pick your category</option>
                    <option value="Sports Cars">Sports Cars</option>
                    <option value="TRUCK">TRUCK</option>
                    <option value="MONSTER CAR">MONSTER CAR</option>
                </select >
                <input className="my-10 btn btn-block relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" type="submit" value="submit"/>
            </form>


        </div>
    );
};

export default AddAToy;