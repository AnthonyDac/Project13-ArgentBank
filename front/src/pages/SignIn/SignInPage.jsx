import React from 'react';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import './SignInPage.css';

class SignInPage extends React.Component {

  componentDidMount() {
    // Modifier le titre de l'onglet
    document.title = 'Argent Bank - Sign In';
  }

  render() {
    return (
      <>
        <TopNav />
        <main className="mainContainer">
          <div className="formContainer">
            <div className="formHeader">
              <i className="fa fa-user-circle"></i>
              <h1>Sign In</h1>
            </div>
            <form>
              <div className='formEntry'>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className='formEntry'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className='formRemember'>
                <input type="checkbox" id="remember-me" name="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button type="submit">Sign in</button>
            </form>
          </div>
        </main>
        <FooterComponent />
      </>
    );
  }

}

export default SignInPage;
