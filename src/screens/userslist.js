import React, { useState, useEffect } from 'react';
import '../styles/userslist.css';

const Userslist = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users data from an API or local storage
        setUsers([
            { id: 1, name: "Karthi", email: "karthi@gmail.com", phone: "5379009090", admissionDate: "08-Dec, 2023" },
            { id: 2, name: "Halis", email: "halis@gmail.com", phone: "5387007070", admissionDate: "09-Dec, 2023" },
            { id: 3, name: "Enes", email: "enes@gmail.com", phone: "5366006060", admissionDate: "10-Dec, 2023" },
            { id: 4, name: "Serra", email: "serra@gmail.com", phone: "5399009090", admissionDate: "11-Dec, 2023" },
            { id: 5, name: "Başak", email: "basak@gmail.com", phone: "5404004040", admissionDate: "12-Dec, 2023" },
            { id: 6, name: "Zilan", email: "zilan@gmail.com", phone: "5603003030", admissionDate: "13-Dec, 2023" },
        ]);
    }, []);

    return (
        <div className="users-list-container">
            <header>
                <h1>Users List</h1>
                <button onClick={() => { /* handle add new user */ }}>Add New User</button>
            </header>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>ID</th>
                    <th>Date of admission</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.id}</td>
                        <td>{user.admissionDate}</td>
                        <td>
                            <button onClick={() => { /* handle edit user */ }}>Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Userslist;
