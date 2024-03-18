import React, { FC } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainProps {
  children: React.ReactNode;
}


const Pagewrapper: FC<MainProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='layout-right'>
        <Header />
        <main className='main'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Pagewrapper;