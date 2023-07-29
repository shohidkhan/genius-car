import React, { useContext } from "react";
import login from "../../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(user);
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: error.message,
            text: "Something went wrong!",
          });
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={login} className="w-3/4" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center">
            New to genius car?
            <Link to="/signup" className="text-orange-600 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
