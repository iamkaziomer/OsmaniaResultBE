// RollInput.js
import React, { useState } from 'react';
import studentData from './data.json';

function RollInput({ rollnumber, setrollnumber, setCheckButtonPress, setStudentName }) {
  const [error, setError] = useState('');

  function handleclick() {
    if (rollnumber.length === 12) {
      // Fetch student data only when submit is clicked
      const student = studentData.students.find(
        student => String(student.rollnumber).trim() === rollnumber.trim()
      );

      if (student) {
        setStudentName(student.name);
      } else {
        setStudentName('Not Found');
      }

      setCheckButtonPress(true);
      setError('');
    } else {
      setError('Please enter a valid 12-digit Hall Ticket Number.');
    }
  }

  const handleInputChange = (e) => {
    setrollnumber(e.target.value);
    setError('');
    setCheckButtonPress(false); // Reset the display when user types
  };

  return (
    <div style={{
      backgroundColor: '#FAF0D8',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <table style={{
        border: 'solid black 1px',
        width: '80%',
        margin: '2px'
      }}>
        <tbody>
          <tr>
            <td colSpan="3" style={{
              fontSize: '13px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              border: 'solid black 1px',
            }}>
              Enter Hall Ticket No. :
              <input
                type="text"
                value={rollnumber}
                onChange={handleInputChange}
                style={{
                  margin: '1px',
                  padding: '0',
                  fontSize: '14px'
                }}
                maxLength="12"
              />
              <button 
                onClick={handleclick}
                style={{
                  marginLeft: '10px',
                  color: 'red',
                  fontWeight: '700',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                Submit
              </button>
            </td>
          </tr>

          {error && (
            <tr>
              <td colSpan="3" style={{
                color: 'red',
                padding: '0px',
                fontSize: '14px',
                fontWeight: '700',
                margin: '1px'
              }}>
                {error}
              </td>
            </tr>
          )}

          <tr>
            <td colSpan="3" style={{
              color: 'red',
              padding: '0px',
              fontSize: '14px',
              fontWeight: '700',
              margin: '1px'
            }}>
              Please Enter 12 Digit Hall Ticket Number Ex: 161022749301, 161022748302.
              
            </td>
            

          </tr>
          <tr>
          <a 
  href="https://www.instagram.com/mjcetdevs/profilecard/?igsh=NDc3NThzc2xzNTh6" 
  target="_blank" 
  rel="noopener noreferrer"
  className="button-wrapper"
>
  <button className="minimal-button">Follow @MJCETDEVS</button>
</a>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RollInput;