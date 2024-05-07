import React, {useState, useEffect} from 'react';
import '../styles/boxlist.css';
import {IonIcon} from '@ionic/react';
import {
    trashOutline,
    pencilOutline,
    searchOutline
} from 'ionicons/icons';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch boxes data from an API or local storage
        setBoxes([
            {id: 1, content: "Shoe", weight: "10", destination: "Urfa", admissionDate: "08-Dec, 2023"},
            {id: 2, content: "Food", weight: "30", destination: "Iğdır", admissionDate: "09-Dec, 2023"},
            {id: 3, content: "Clothes", weight: "15", destination: "Trabzon", admissionDate: "10-Dec, 2023"},
            {id: 4, content: "Heater", weight: "40", destination: "Adana", admissionDate: "11-Dec, 2023"},
            {id: 5, content: "Clothes", weight: "15", destination: "Gaziantep", admissionDate: "18-Dec, 2023"},
            {id: 6, content: "Water", weight: "40", destination: "Kahramanmaraş", admissionDate: "19-Dec, 2023"},
        ]);
    }, []);

    // Yeni bir kutu eklemek için işlev
    const addNewBox = () => {
        const newBox = {
            id: boxes.length + 1,
            content: "New Box",
            weight: "",
            destination: "",
            admissionDate: new Date().toLocaleDateString()
        };
        setBoxes([...boxes, newBox]);   // Yeni kutuyu kutular dizisine ekle
    };

    // Kutu silme işlevi
    const deleteBox = (boxId) => {
        setBoxes(boxes.filter(box => box.id !== boxId));
    };

    // Arama işlevi
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Arama sonuçlarını filtreleme işlevi
    const filteredBoxes = boxes.filter(box =>
        box.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="box-list-container">
            <header>
                <h1>Box List</h1>
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Search by destination"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="search-icon-container">
                        <IonIcon icon={searchOutline} className="search-icon"/>
                    </div>
                </div>

                <button onClick={addNewBox}>Add New Box</button>
            </header>
            <table>
                <thead>
                <tr>
                    <th>Box ID</th>
                    <th>Content</th>
                    <th>Weight</th>
                    <th>Destination</th>
                    <th>Date of admission</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {filteredBoxes.map((box, index) => (
                    <tr key={box.id}>
                        <td>{box.id}</td>
                        <td>{box.content}</td>
                        <td>{box.weight}</td>
                        <td>{box.destination}</td>
                        <td>{box.admissionDate}</td>
                        <td>
                                <span className="orange-icon" onClick={() => { /* handleIconClick */}}>
                                    <IonIcon icon={pencilOutline} size="small"/>
                                </span>
                        </td>
                        <td>
                                <span className="orange-icon" onClick={() => deleteBox(box.id)}>
                                    <IonIcon icon={trashOutline} size="small"/>
                                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BoxList;
