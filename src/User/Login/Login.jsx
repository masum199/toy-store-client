import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
       <div className="bg-stone-500">
         <div className="min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Login to access to your products</p>
      <div>
      <button className="btn gap-2 btn-wide">
  <FaGoogle></FaGoogle>
  Button
</button>
      </div>
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <p className="">Don`t have an account? <Link className="font-bold" to="/register">Please Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
       </div>
    );
};

export default Login;