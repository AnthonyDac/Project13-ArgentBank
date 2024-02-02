import React from 'react';
import './TopNavigation.css'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TopNav() {
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);

  console.log('token', token)

  return (
    <>
      <nav className="topNavigationContainer">
        <div className="topNavigationLogo">
          <img src="/src/assets/argentBankLogo.png"></img>
        </div>
        <div className="topNavigationMenu">
          {token ? (
            // Afficher le lien de déconnexion si le token est présent
            <Link to="/sign-out"><i className='fa fa-sign-out'></i> Sign out</Link>
          ) : (
            // Afficher le lien de connexion si le token n'est pas présent
            <Link to="/sign-in"><i className='fa fa-user-circle'></i> Sign in</Link>
          )}
        </div>
      </nav>
    </>
  )
}

export default TopNav