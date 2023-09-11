import React from 'react';
import './SearchContent.css'

const SearchContent = (props) => {
    return (
        
            
        <div className='container-fluid'>
            <div className='sales'>
                <h3>Sales Information</h3>
                </div>
            <div className='row'>
                <div className='d-flex justify-content-around align-items-center col-12 col-sm-6 col-md-4 col-lg-3 p3'>
                    <div>
                        <p>Customer:</p>
                        <input type='search' className='sarch' placeholder='Enter costumer Name'/>
                        </div>
                    </div>
                  
         <div className='d-flex justify-content-around align-items-center col-12 col-sm-6 col-md-4 col-lg-3 p3'>
                    <div>
                        <p>Invoice ID:</p>
                        <input type='search' className='sarch' placeholder='Enter Invoice ID' />
                        </div>
                </div>
                <div className='d-flex justify-content-around align-items-center col-12 col-sm-6 col-md-4 col-lg-3 p3'>
                    <div>
                        <p>Start Date:</p>
                        <input type='search' className='sarch' placeholder='Start Date' />
                        </div>
                </div>
                <div className='d-flex justify-content-around align-items-center col-12 col-sm-6 col-md-4 col-lg-3 p3'>
                    <div>
                        <p>End Date:</p>
                        <input type='search' className='sarch' placeholder='End date' />
                        </div>
                </div>
                
                
                
                  
                
              
         </div>
        </div>
    );
};

export default SearchContent;