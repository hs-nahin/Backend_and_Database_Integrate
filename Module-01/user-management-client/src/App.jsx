import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside Post Response", data);
        const newUsers = [...users, data];
        setUser(newUsers);
        form.reset();
      })
  };
  return (
    <>
      <h1>Users Management</h1>
      <p>Number of Users: {users.length}</p>
      {users.map((user) => (
        <p key={user.id}>
          Name: {user.name}, Email: {user.email}
        </p>
      ))}
      <form onSubmit={handleUser}>
        <input type="text" name="name" id="" placeholder="Name" />
        <br />
        <input type="email" name="email" id="" placeholder="Email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
