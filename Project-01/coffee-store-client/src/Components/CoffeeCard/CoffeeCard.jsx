import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Delete Confirmed');
        
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
  };

  return (
    <div className="card flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden transition-transform ease-in-out duration-300 transform hover:scale-105">
      <figure className="w-full lg:w-1/3 h-48 lg:h-auto overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="flex flex-col lg:flex-row justify-between w-full p-4 lg:p-6">
        <div className="flex flex-col space-y-2 lg:w-2/3">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Name: {name}</h2>
          <p className="text-gray-600">Quantity: {quantity}</p>
          <p className="text-gray-600">Supplier: {supplier}</p>
          <p className="text-gray-600">Taste: {taste}</p>
        </div>
        <div className="flex flex-col space-y-2 lg:space-y-4 mt-4 lg:mt-0 lg:w-1/3">
          <button className="btn btn-outline border-gray-800 text-gray-800 w-full">
            View
          </button>
          <Link to={`updateCoffee/${_id}`} className="w-full">
            <button className="btn btn-outline border-gray-800 text-gray-800 w-full">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-rose-500 text-white hover:bg-rose-700 w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
