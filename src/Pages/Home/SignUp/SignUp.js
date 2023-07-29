import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../../assets/images/login/login.svg";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";
const SignUp = () => {
  const { createUser, updateUserName } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserName(name)
          .then(() => {
            console.log("name updated");
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: error.message,
              text: "Something went wrong!",
            });
          });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up Successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(user);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          text: "Something went wrong!",
        });
      });
    console.log(name, password, email);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={login} className="w-3/4" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl text-center font-bold">Signup!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account?
            <Link to="/login" className="text-orange-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
