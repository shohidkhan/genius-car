import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${users.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingBooking = bookings.filter(
                (book) => book._id !== id
              );
              setBookings(remainingBooking);
            }
          });
      }
    });
  };

  const handleBookingUpdate = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Status Updated");
          const remaining = bookings.filter((book) => book._id !== id);
          const updated = bookings.find((book) => book._id === id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };
  return (
    <div className="overflow-x-auto my-8">
      <h2 className="text-3xl my-10 text-center">
        My Bookings: {bookings.length}
      </h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Delete</th>
            <th>Image</th>
            <th>Customer Name</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingsRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingUpdate={handleBookingUpdate}
            ></BookingsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
