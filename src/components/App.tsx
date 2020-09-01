import React from 'react';
import Header from './header/Header';
import NavbarComponent from './header/navbar/Navbar';


const App: React.FC = () => {
  return (
    <div className="wrapper">
      <NavbarComponent/>
      <Header/>
    </div>
    )
};

export default App;