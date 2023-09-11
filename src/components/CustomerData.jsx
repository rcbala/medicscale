import React, { Component } from 'react';
import './CustomerData.css'

class CustomerData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
            { id: <div className='id' id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000', },
            { id: <div className='id' id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000', },
            { id: <div className='id' id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000', },
            { id: <div className='id' id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000', },
            { id: <div className='id' id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000', },
            { id: <div className='id' id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000', },
            { id: <div className='id' id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000', },
          { id:<div  className='id'id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000',  },
          { id:<div  className='id'id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000',  },
            { id: <div className='id' id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000', },
            { id: <div className='id' id="AHG4A8">#AHG4A8</div>, date: '23/9/2022', Customer: 'jacob Marcus', payableAmnt: '$100', paidAmnt: '$000', due: '$000', },
          
        
      ],
    };
  }

  handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.map((row) =>
        row.id === id ? { ...row, selected: !row.selected } : row
      ),
    }));
  };

  render() {
      return (
        <div className='table'>
      <table className="table table-bordered table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
                    <th>INVOICEID</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Payable Amount</th>
                    <th>Paid Amount</th>
                    <th>Due</th>
    
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={row.selected}
                  onChange={() => this.handleCheckboxChange(row.id)}
                />
              </td>
              <td>{row.id}</td>
              <td>{row.date}</td>
                  <td>{row. Customer}</td>
                  <td>{row. payableAmnt}</td>
                  <td>{row.paidAmnt}</td>
                  <td>{row.due}</td>
              
            </tr>
          ))}
        </tbody>
              </table>
              </div>
    );
  }
}

export default CustomerData;