import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                // alert("Data is deleted successfully!");
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            }
        })
        .catch(error => {
            console.error("Error deleting user:", error);
            alert("Failed to delete user. Please try again.");
        });
    };

    return (
        <div>
            <h1>{users.length}</h1>
            <div>
                {users.map(user => (
                    <p key={user._id}>
                        Name: {user.name}; Email: {user.email}; ID: {user._id}
                        <button
                            style={{
                                backgroundColor: '#ff6767',
                                border: 'none',
                                borderRadius: '5px',
                                width: '70px',
                                height: '30px',
                                cursor: 'pointer',
                                marginLeft: '10px',
                            }}
                            onClick={() => handleDelete(user._id)}
                        >
                            Delete
                        </button>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Users;
