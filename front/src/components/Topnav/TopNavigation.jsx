import React from 'react';
import './TopNavigation.css'
import { Link, useLocation } from 'react-router-dom';

function TopNav() {
  const location = useLocation();

  return (
    <>
      <nav className="topNavigationContainer">
        <div className="topNavigationLogo">
          <img src="/src/assets/argentBankLogo.png"></img>
        </div>
        <div className="topNavigationMenu">
          <Link to="/sign-in"><i className='fa fa-user-circle'></i> Sign in</Link>
        </div>
      </nav>
    </>
  )
}

export default TopNav