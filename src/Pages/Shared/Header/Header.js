import React, { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { users, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log Out  Successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          text: "Something went wrong!",
        });
      });
  };
  const menuItem = (
    <>
      <li>
        <Link className="font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/bookings">
          My Bookings
        </Link>
      </li>

      {users?.email ? (
        <>
          <li>
            <Link onClick={handleLogout} className="font-semibold">
              Log Out
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link className="font-semibold" to="/login">
            Login
          </Link>
        </li>
      )}
      {users?.displayName && <li className="ml-5">{users?.displayName}</li>}
    </>
  );
  return (
    <div className="navbar h-20 mb-6 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link href="/" className="">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn btn-outline btn-warning">
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Header;
