import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import './SignInPage.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email) return setError('Email is required');
    if (!password) return setError('Password is required');
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.status === 200) {
          setError('You are now connected');
          setTimeout(() => {
            // Redirect to the home page
            navigate('/');
          }, 2000);
        } else {
          setError('An error occurred');
        }
      } else {
        const errorData = await response.json();

        if (errorData.status === 400) {
          setError(errorData.message);
        } else {
          setError('An error occurred');
        }
      }
    } catch (error) {
      console.error('An error occured :', error);
      setError('An error occurred, please try again later');
    }
  };

  return (
    <>
      <TopNav />
      <main className="mainContainer">
        <div className="formContainer">
          <div className="formHeader">
            <i className="fa fa-user-circle"></i>
            <h1>Sign In</h1>
          </div>
          <form onSubmit={handleSignIn}>
            <div className='formEntry'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='formEntry'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='formRemember'>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className='formError'>
              {error && <p className="errorText">{error}</p>}
            </div>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default SignInPage;
