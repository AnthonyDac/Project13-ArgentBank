import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import AccountComponent from '../../components/Account/AccountComponent';
import './UserPage.css';

function UserPage() {
    const user = useSelector((state) => state.profile.user);

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

    return (
        <>
            <TopNav />
            <main className="userContainer">
                <div className='header'>
                    <h1>Welcome back <br></br>{user && user.firstName ? user.firstName : 'N/A'} {user && user.lastName ? user.lastName : 'N/A'}!</h1>
                    <button>Edit name</button>
                </div>
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