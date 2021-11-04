import React from 'react';
import './App.scss';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SideDrawer />
    </div>
  );
};

export default App;
