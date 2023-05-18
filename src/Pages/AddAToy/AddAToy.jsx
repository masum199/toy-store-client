import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AddAToy = () => {
    const { user } = useContext(AuthContext)


    const handleAddToy = (event) => {

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
        fetch('http://localhost:5000/alltoys', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleAddToy} className=" bg-slate-400 p-20">
                {/* 1 */}
                <div className="flex gap-16">
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>Picture URL</span>
                                <input type="text" name="photo" placeholder="Picture URL" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">

                            <label className="input-group input-group-vertical">
                                <span>Toy Name</span>
                                <input type="text" name="toyname" placeholder="Toy Name" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex gap-16 my-8">
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>seller name</span>
                                <input type="text" defaultValue={user?.displayName} name="sellername" placeholder="seller name" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>seller email</span>
                                <input type="text" defaultValue={user?.email} name="selleremail" placeholder="seller email" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="flex gap-16">
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>Price</span>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>Rating</span>
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="flex gap-16 my-6">
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>Available quantity</span>
                                <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>Detail description</span>
                                <input type="text" name="details" placeholder="Detail description" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
                {/*  */}
                <select name="category" className="select w-full max-w-xs" defaultValue="">
                    <option disabled value="">Pick your category</option>
                    <option value="Racing Cars">Racing Cars</option>
                    <option value="Off-Road Vehicles">Off-Road Vehicles</option>
                    <option value="Construction Vehicles">Construction Vehicles</option>
                    <option value="Monster Trucks">Monster Trucks</option>
                    <option value="Monster Trucks">Helicopters</option>
                    <option value="Brand">Brand</option>
                </select>
                <input className="my-10 btn btn-block" type="submit" value="submit" name="" id="" />
            </form>


        </div>
    );
};

export default AddAToy;