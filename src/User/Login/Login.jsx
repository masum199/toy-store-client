import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result)

        Swal.fire({
          title: 'Success',
          text: 'Logged in successfully!',
          icon: 'success',
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });


        navigate(from)
      })
      .catch(error => {
        console.log(error.message)
      })
  }


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        
        Swal.fire({
          title: 'Success',
          text: 'Logged in successfully!',
          icon: 'success',
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        
        navigate(from)

      })
      .catch(error => {
        console.log(error.message)
        
        Swal.fire({
          title: 'Wrong user or password',
          text: 'please use right email and password',
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

    <div className="bg-gradient-to-r from-purple-900 to-indigo-900">
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 text-center">Welcome back!</h1>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-700">Login with:</p>
          <div className="flex space-x-4">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-accent btn-lg w-32 flex items-center justify-center"
            >
              <FaGoogle className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <div className="w-1/4 h-px bg-gray-400"></div>
          <p className="text-gray-600 mx-4">OR</p>
          <div className="w-1/4 h-px bg-gray-400"></div>
        </div>
        <form onSubmit={handleLogin} className="space-y-6 mt-6">
          <div className="relative">
            <label className="block text-lg text-gray-800 font-semibold mb-2">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Your email address"
              className="input input-bordered input-accent w-full"
            />
          </div>
          <div className="relative">
            <label className="block text-lg text-gray-800 font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered input-accent w-full"
            />
            <label className="label absolute text-sm text-gray-600 mt-2">
              Don`t have an account?{' '}
              <Link className="font-bold" to="/register">
                Register now
              </Link>
            </label>
          </div>
          <div className="mt-10">
            <input
              type="submit"
              value="Sign In"
              className="btn btn-primary btn-lg w-full py-4 font-semibold tracking-wider mt-6"
            />
          </div>
          <div className="text-center text-gray-600 text-sm mt-6">
            By signing in, you agree to our
            <span className="text-accent font-semibold">
              Terms of Service
            </span>
            and
            <span className="text-accent font-semibold">
              Privacy Policy
            </span>
            
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;