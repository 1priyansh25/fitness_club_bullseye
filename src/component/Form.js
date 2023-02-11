import React from 'react';
import './Form.css';

export default function () {
  return (
    <div>
        <div className='list'><button>View List</button></div>
        <div className='registration-form'>
            <h1>Registration Form</h1><br />
            <form>
                <p>Name:</p> <input type="text" /><br />
                <p>Email:</p> <input type="email" /><br />
                <p>Phone:</p> <input type="number" /><br />
                <p>Address:</p><input type="text" /><br /><br />
                <input type="submit" onClick={() => {alert("Data submitted")}}/>
            </form>
            <br /><br /><br /><br /><br />
            <p>
                <p>Priyansh</p>
                <p>1priyansh25@gmail.com</p>
                <p>12016354</p>
            </p>
        </div>
    </div>
  )
}
