import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import AccountComponent from '../../components/Account/AccountComponent';
import './UserPage.css';

function UserPage() {
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.profile.user);
    const dispatch = useDispatch();
    const [wantChangeInfos, setWantChangeInfos] = useState(false);
    const [firstName, setFirstName] = useState(user ? user.firstName : '');
    const [lastName, setLastName] = useState(user ? user.lastName : '');

    const accounts = [
        {
            name: 'Argent Bank Checking (x8349)',
            amount: '$2,082.79',
            description: 'Available Balance',
        },
        {
            name: 'Argent Bank Savings (x6712)',
            amount: '$10,928.42',
            description: 'Available Balance',
        },
        {
            name: 'Argent Bank Credit Card (x8349)',
            amount: '$184.30',
            description: 'Current Balance',
        },
    ];

    useEffect(() => {
        // Modifier le titre de l'onglet
        document.title = 'Argent Bank - Profile';
    }, []);

    const handleValidation = async () => {
        try {
            // Effectuer l'appel API pour mettre à jour les informations utilisateur
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ firstName, lastName }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === 200) {
                    dispatch({ type: 'SET_USER_DATA', payload: data.body });
                    setWantChangeInfos(false);
                } else {
                    console.error('An error occurred while updating user information');
                }
            } else {
                console.error('An error occurred while updating user information');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <>
            <TopNav />
            <main className="userContainer">
                <div className='header'>
                    <h1>Welcome back <br></br>{user && user.firstName ? user.firstName : 'N/A'} {user && user.lastName ? user.lastName : 'N/A'}!</h1>
                    <button onClick={() => setWantChangeInfos(!wantChangeInfos)}>
                        {wantChangeInfos ? 'Cancel' : 'Edit name'}</button>
                </div>
                {wantChangeInfos && (
                    <div className='editInfos'>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            placeholder='First name'
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            placeholder='Last name'
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        <button onClick={handleValidation}>Valider</button>
                    </div>
                )}
                <div className='accountsContainer'>
                    {accounts.map((account, index) => (
                        <AccountComponent key={index} name={account.name} amount={account.amount} description={account.description} />
                    ))}
                </div>
            </main>
            <FooterComponent />
        </>
    );
}

export default UserPage;
