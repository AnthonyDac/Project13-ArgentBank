import React from 'react';
import './TopNavigation.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TopNav() {
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.profile.user);

  return (
    <div>
      <nav className="topNavigationContainer">
        <div className="topNavigationLogo">
          <img src="/src/assets/argentBankLogo.png" alt="Argent Bank Logo" />
        </div>
        <div className="topNavigationMenu">
          {token ? (
            <>
              <Link to="/user"><i className='fa fa-user-circle'></i> {user && user.firstName ? user.firstName : 'N/A'}</Link>
              <Link to="/sign-out"><i className='fa fa-sign-out'></i> Sign out</Link>
            </>
          ) : (
            <Link to="/sign-in"><i className='fa fa-user-circle'></i> Sign in</Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default TopNav;
