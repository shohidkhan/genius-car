import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Booking = () => {
  const { facility, service_id, price, title, _id, img } = useLoaderData();
  const { users } = useContext(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const booking = {
      customerName: name,
      date: date,
      email: email,
      price: price,
      service_id: _id,
      title: title,
      img: img,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Service Book Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center mb-6">Book Service: {title} </h2>

      <div className="card-body border-2 rounded-lg">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customer Name</span>
              </label>
              <input
                type="text"
                placeholder="Service Name"
                name="name"
                defaultValue={users?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Date"
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                defaultValue={users?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Duse amount</span>
              </label>
              <input
                type="text"
                placeholder="Due amount"
                className="input input-bordered"
                name="price"
                defaultValue={"$" + price}
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-orange-700">
              Booking Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
