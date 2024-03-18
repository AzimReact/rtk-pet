import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='header'>
      <div className='logo' onClick={() => navigate('/')}>Logo</div>
      <nav className='links'>
        <span className='link' onClick={() => navigate('/')}>Main</span>
        <span className='link' onClick={() => navigate('/posts')}>Posts</span>
        <span className='link' onClick={() => navigate('/tasks')}>Tasks</span>
        {/* <span>about us</span> */}
      </nav>
      <button>Login</button>
    </header>
  );
};

export default Header;