import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import SearchContent from './components/SearchContent';
import CustomerData from './components/CustomerData';


const App = (props) => {
  return (
    <div className='d-flex'>
      <div className='w-auto'>
        <SideBar />
        </div>
      <div className='col'>
        <NavBar />
        <SearchContent />
        <CustomerData />
      </div>
      
    </div>
    

  );
};

export default App;