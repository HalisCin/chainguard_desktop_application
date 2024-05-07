import React, { useState, useEffect } from 'react';
import '../styles/userslist.css';
import { IonIcon } from '@ionic/react';
import {
    trashOutline,
    pencilOutline,
    searchOutline
} from 'ionicons/icons';

const Userslist = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch users data from an API or local storage
        setUsers([
            { id: 1, name: "Ali", email: "ali@gmail.com", phone: "5379009090", admissionDate: "08-Dec, 2023" },
            { id: 2, name: "Halis", email: "halis@gmail.com", phone: "5387007070", admissionDate: "09-Dec, 2023" },
            { id: 3, name: "Enes", email: "enes@gmail.com", phone: "5366006060", admissionDate: "10-Dec, 2023" },
            { id: 4, name: "Serra", email: "serra@gmail.com", phone: "5399009090", admissionDate: "11-Dec, 2023" },
            { id: 5, name: "Başak", email: "basak@gmail.com", phone: "5404004040", admissionDate: "12-Dec, 2023" },
            { id: 6, name: "Zilan", email: "zilan@gmail.com", phone: "5603003030", admissionDate: "13-Dec, 2023" },
            { id: 7, name: "Yusuf", email: "yusuf@gmail.com", phone: "5399009090", admissionDate: "14-Dec, 2023" },
            { id: 8, name: "Murat", email: "murat@gmail.com", phone: "5404004040", admissionDate: "15-Dec, 2023" },
            { id: 9, name: "Okan", email: "okan@gmail.com", phone: "5603003030", admissionDate: "16-Dec, 2023" },
        ]);
    }, []);

    // Yeni bir kullanıcı eklemek için işlev
    const addNewUser = () => {
        const newUser = {
            id: users.length + 1,
            name: "New User",   // Varsayılan ad
            email: "",
            phone: "",
            admissionDate: new Date().toLocaleDateString()
        };
        setUsers([...users, newUser]);   // Yeni kullanıcıyı kullanıcılar dizisine ekle
    };

    // Kullanıcı silme işlevi
    const deleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    // Kullanıcı arama işlevi
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Kullanıcıları filtreleme işlevi

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="users-list-container">
            <header>
                <h1>Users List</h1>
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="search-icon-container">
                        <IonIcon icon={searchOutline} className="search-icon"/>
                    </div>
                </div>

                <button onClick={addNewUser}>Add New User</button>
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
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.id}</td>
                        <td>{user.admissionDate}</td>
                        <td>
                            <span className="orange-icon" onClick={() => { /* handleIconClick */}}><IonIcon icon={pencilOutline} size="small"/></span>
                        </td>
                        <td>
                                <span className="orange-icon" onClick={() => deleteUser(user.id)}><IonIcon
                                    icon={trashOutline} size="small"/></span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Userslist;
