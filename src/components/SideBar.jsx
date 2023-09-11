import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './SideBar.css'

const SideBar = () => {
  return (
    
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-auto min vh-100 bg-light-white'>
                  <div className='logo'>
                      MEDICO SCALES
                  </div>
                  <ul>
                      <li>
                          <a className='nav-link px-2'>
                              <i className='bi bi-grid '/><span className='ms-1 d-none d-sm-inline'>DashBoard</span>
                          </a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                          <a className='nav-link px-2'>
                              <i className='bi bi-bag-check'/><span className='ms-1 d-none d-sm-inline'>Lap Test</span>
                          </a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                          <a className='nav-link px-2'>
                              <i className='bi bi-calendar-check'/><span className='ms-1 d-none d-sm-inline'>Appointment</span>
                          </a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                          <a className='nav-link px-2'>
                              <i className='bi bi-bag-plus'/><span className='ms-1 d-none d-sm-inline'>Medicine Order</span>
                          </a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                          <a className='nav-link px-2'>
                              <i className='bi bi-chat-dots'/><span className='ms-1 d-none d-sm-inline'>Message</span>
                          </a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                          <a className='nav-link px-2'>
                              <i className='bi bi-wallet2'/><span className='ms-1 d-none d-sm-inline'>Payment</span>
                          </a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                          <a className='nav-link px-2'>
                              <i className='bi bi-gear'/><span className='ms-1 d-none d-sm-inline'>Settings</span>
                          </a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                          <a className='nav-link px-2 help'>
                              <i className='bi bi-question-circle'/><span className='ms-1 d-none d-sm-inline'>Help</span>
                          </a>
                      </li>
                  </ul>
              </div>
              
          </div>
          
          </div>
  );
};

export default SideBar;