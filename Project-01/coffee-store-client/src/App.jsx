import "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard/CoffeeCard";

const App = () => {
  const coffeeLoader = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeLoader);
  return (
    <div className="m-28">
      <h1 className=" text-6xl text-center text-rose-500">
        Total Coffees: {coffeeLoader.length}
      </h1>
      <Link to='/add'><button class="btn btn-outline btn-error">Add Items</button></Link>
      
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {coffeeLoader.map((coffee) => (
          <CoffeeCard 
          key={coffee._id} 
          coffee={coffee} 
          coffees={coffees}
          setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
