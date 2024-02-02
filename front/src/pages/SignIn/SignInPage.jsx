import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import './SignInPage.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

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
          dispatch({ type: 'SET_TOKEN', payload: data.body.token });

          setError(null);
          await getUserProfile(data.body.token);
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
      console.error('An error occurred:', error);
      setError('An error occurred, please try again later');
    }
  };

  const getUserProfile = async (token) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (data.status === 200) {
          dispatch({ type: 'SET_USER_DATA', payload: data.body });
          navigate('/');
        } else {
          setError('An error occurred');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
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
