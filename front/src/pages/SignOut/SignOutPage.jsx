import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SignOutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'RESET_TOKEN', payload: null });
    dispatch({ type: 'RESET_USER_DATA', payload: null });

    // Redirection vers la page d'accueil ("/") après avoir nettoyé le store
    navigate('/');
  }, [dispatch, navigate]);

  return // Vous pouvez personnaliser le contenu de la page si nécessaire
};

export default SignOutPage;
