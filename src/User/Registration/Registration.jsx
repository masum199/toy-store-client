import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const Registration = () => {
  const { createUser } = useContext(AuthContext)



  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then(result => {
        console.log(result)
        const createdUser = result.user;
        updateProfile(createdUser, {
          displayName: name,
          photoURL: photo,
        })
        Swal.fire({
          title: 'Success',
          text: 'Registered successfully! now LogIn',
          icon: 'success',
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      })
      .catch(error => {
        const message = error.message
        console.log(message)
        Swal.fire({
          title: 'error',
          text: message,
          icon: 'error',
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      })

  }


  return (
    <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-lg shadow-2xl p-10 w-full sm:max-w-md">
        <h2 className="text-4xl text-center text-white font-bold mb-8">Register</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="relative">
            <label className="block text-lg text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-unique input-bordered input-opacity-80 input-accent w-full"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-lg text-white font-semibold mb-2">Photo</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo"
              className="input input-unique input-bordered input-opacity-80 input-accent w-full"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-lg text-white font-semibold mb-2">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-unique input-bordered input-opacity-80 input-accent w-full"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-lg text-white font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-unique input-bordered input-opacity-80 input-accent w-full"
              required
            />
            <label className="label absolute text-sm text-white mt-2">
              Already have an account?
              <Link className="font-bold" to="/login">
                Please Login
              </Link>
            </label>
          </div>
          <div className="">
            <input
              type="submit"
              className="btn btn-unique btn-lg w-full py-3 font-semibold tracking-wide mt-6"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;