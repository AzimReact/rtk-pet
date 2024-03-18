import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClickMain = () => {
    navigate(`/`)
  }

  const handleClickPosts = () => {
    navigate(`/posts`)
  }

  return (
    <header className='header'>
      <div className='logo' onClick={handleClickMain}>Logo</div>
      <nav className='links'>
        <span className='link' onClick={handleClickMain}>Main</span>
        <span className='link' onClick={handleClickPosts}>Posts</span>
        {/* <span>about us</span> */}
      </nav>
      <button>Login</button>
    </header>
  );
};

export default Header;