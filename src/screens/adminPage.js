import React, { useState, useEffect } from 'react';
import '../styles/adminPage.css';
import { IonIcon } from '@ionic/react';
import {
    homeOutline,
    cogOutline,
    personOutline,
    logOutOutline,
    menuOutline,
    cubeOutline,
    qrCodeOutline,
} from 'ionicons/icons';
import { useNavigate } from "react-router-dom";
import QrCodeGenerator from "./QrCodeGenerator";
import "firebase/auth";
import UsersList from './userslist';
import BoxList from "./boxlist";

function AdminPage() {
    const [isActive, setIsActive] = useState(false);
    const [selectedTab, setSelectedTab] = useState('');
    const [profileData, setProfileData] = useState({
        email: '',
        fullname: '',
        id_Number: '',
        last_login: '',
        role: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Simulated profile data
        const dummyProfileData = {
            email: '',
            fullname: '',
            id_Number: '',
            last_login: '',
            role: ''
        };
        setProfileData(dummyProfileData); // Set initial profile data
    }, []);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleNavigation = (tab) => {
        setSelectedTab(tab);
        if (tab === 'logout') {
            navigate("/App");
        } else if (tab === 'profile') {
            setSelectedTab('profile');
        } else if (tab === 'home') {
            setSelectedTab('home');
        }

        // Add 'active' class to the clicked tab
        const listItems = document.querySelectorAll('.list');
        listItems.forEach(item => item.classList.remove('active'));
        const clickedItem = document.querySelector(`#${tab}`);
        if (clickedItem) {
            clickedItem.classList.add('active');
        }
    };
    const logout = async () => {
        try {
            navigate("/login");

        } catch (error) {
            console.error("Error signing out:", error);
            alert("An error occurred. Please try again.");
        }
    };
    return (
        <div>
            <div className={`navigation ${isActive ? 'active' : ''}`}>
                <ul>
                    <li className={`list ${selectedTab === 'home' ? 'active' : ''}`} id="home"
                        onClick={() => handleNavigation('home')}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><IonIcon icon={homeOutline} /></span>
                            <span className="title">Home</span>
                        </a>
                    </li>
                    <li className={`list ${selectedTab === 'profile' ? 'active' : ''}`} id="profile"
                        onClick={() => handleNavigation('profile')}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><IonIcon icon={cogOutline} /></span>
                            <span className="title">User Operations</span>
                        </a>
                    </li>
                    <li className={`list ${selectedTab === 'createBox' ? 'active' : ''}`} id="createBox"
                        onClick={() => handleNavigation('createBox')}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><IonIcon icon={cubeOutline} /></span>
                            <span className="title">Box Operations</span>
                        </a>
                    </li>
                    <li className={`list ${selectedTab === 'generateQR' ? 'active' : ''}`} id="generateQR"
                        onClick={() => handleNavigation('generateQR')}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><IonIcon icon={qrCodeOutline} /></span>
                            <span className="title">Generate QR</span>
                        </a>
                    </li>
                    <li className={`list ${selectedTab === 'logout' ? 'active' : ''}`} id="logout" onClick={logout}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><IonIcon icon={logOutOutline} /></span>
                            <span className="title">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ion-icon name="menu-" className="open"></ion-icon>
                <ion-icon name="close-outline" className="close"></ion-icon>
                <div className="toggle" onClick={handleToggle}>
                    <IonIcon icon={menuOutline} /></div>
            </div>

            {selectedTab === 'home' && (
                <div className="welcome-message">
                    <h1>Welcome to ChainGuard, Admin</h1>

                    <img src="/logo.png" alt="ChainGuard Logo" />
                </div>
            )}

            {selectedTab === 'profile' && (
                <UsersList />
            )}


            {selectedTab === 'createBox' && (
                <BoxList />
            )}

            {selectedTab === 'generateQR' && (
                <div className="generate-qr-container">

                    <QrCodeGenerator />
                </div>
            )}
        </div>
    );
}

export default AdminPage;
