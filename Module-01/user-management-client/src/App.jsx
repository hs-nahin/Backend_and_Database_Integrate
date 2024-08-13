import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [user, setUser] = useState([]);

useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res => res.json())
  .then(data => setUser(data))
},[])

  return (
    <>
      <h1>Users Management</h1>
      <p>Number of Users: {user.length}</p>
    </>
  )
}

export default App
