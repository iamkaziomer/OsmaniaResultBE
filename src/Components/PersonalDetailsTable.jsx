// PersonalDetailsTable.js
import React from 'react';

const PersonalDetailsTable = ({ rollnumber, studentName, checkButtonPress }) => {
  return (
    <div style={{ display: checkButtonPress ? 'flex' : 'none', justifyContent: 'center', margin: '12px' }}>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '85%',
          textAlign: 'left',
          backgroundColor: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <thead>
          <tr>
            <th
              colSpan="4"
              style={{
                backgroundColor: '#EDC987',
                padding: '2px',
                fontSize: '13px',
                textAlign: 'center',
                font: 'Arial',
                fontWeight: '700',
                border: 'solid 1px black',
              }}
            >
              Personal Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
                fontWeight: '400',
              }}
            >
              Hall Ticket No.
            </td>
            <td
              style={{
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
                color: 'red',
                fontWeight: '700',
              }}
            >
              {rollnumber}
            </td>
            <td
              style={{
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
                fontWeight: '400',
              }}
            >
              Gender
            </td>
            <td
              style={{
                fontWeight: '700',
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
              }}
            >
              MALE / FEMALE
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
                fontWeight: '400',
              }}
            >
              Name
            </td>
            <td
              style={{
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
                fontWeight: '700',
              }}
            >
              {studentName}
            </td>
            <td
              style={{
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
                fontWeight: '400',
              }}
            >
              Father's Name
            </td>
            <td
              style={{
                fontWeight: '700',
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
              }}
            >
              ---
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
                fontWeight: '400',
              }}
            >
              Course
            </td>
            <td
              style={{
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
              }}
            >
              BE(CBCS)
            </td>
            <td
              style={{
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
                fontWeight: '400',
              }}
            >
              Medium
            </td>
            <td
              style={{
                fontWeight: '700',
                fontSize: '13px',
                border: '1px solid black',
                padding: '3px',
              }}
            >
              ENGLISH
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PersonalDetailsTable;