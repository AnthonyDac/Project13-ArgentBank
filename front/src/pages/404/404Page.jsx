import React from 'react';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import './404Page.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <TopNav />
      <section className="notFoundContainer">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </section>
      <FooterComponent />
    </>
  );
}

export default NotFoundPage;
