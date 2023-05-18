import { Link, NavLink } from "react-router-dom";
import NavImage from '../../assets/images/pic1.jpg'
import './NavBar.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user)

  const NavItem = <>
    <li><NavLink to="/"  activeclassname="active">Home</NavLink></li>
    <li><NavLink to="/allToys">All Toys</NavLink></li>
    <li><NavLink to="/myToy">My Toys</NavLink></li>
    <li><NavLink to="/addAToy"> Add A Toy</NavLink></li>
    <li><NavLink to="/blog">Blogs</NavLink></li>
  </>

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((err) => console.log(err));
  }


  return (
    <div className="text-black">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {NavItem}
            </ul>
          </div>
          <img className="w-10 rounded-2xl" src={NavImage} alt="" />
          <p className="btn btn-ghost normal-case text-xl">CarMania</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-14 px-1">
            {NavItem}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                className="w-10 rounded-2xl mr-5"
                src={user?.photoURL}
                alt=""
                title={user?.displayName}
              />
              <button onClick={handleLogOut} className="btn btn-active">LogOut</button>
            </>
          ) : (

            <Link to="/login" className="btn">Login</Link>

          )}


        </div>
      </div>
    </div>
  );
};

export default NavBar;