import React, { useState, useEffect } from 'react';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import AccountComponent from '../../components/Account/AccountComponent';
import './UserPage.css';

class UserPage extends React.Component {

    constructor() {
        super();
        this.state = {
            User: {
                firstName: 'Tony',
                lastName: 'Jarvis',
            },
            Accounts: [
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
            ],
        };
    }

    componentDidMount() {
        // Modifier le titre de l'onglet
        document.title = 'Argent Bank - Profile';
    }

    render() {
        return (
            <>
                <TopNav />
                <main className="userContainer">
                    <div className='header'>
                        <h1>Welcome back <br></br>{this.state.User.firstName} {this.state.User.lastName}!</h1>
                        <button>Edit name</button>
                    </div>
                    <div className='accountsContainer'>
                        {this.state.Accounts.map((account, index) => (
                            <AccountComponent key={index} name={account.name} amount={account.amount} description={account.description} />
                        ))}
                    </div>
                </main>
                <FooterComponent />
            </>
        );
    }

}

export default UserPage;
