import React from 'react'

function ResultData(props) {
    
  return (
    <div style={{display:props.checkButtonPress?'flex':'none', justifyContent: 'center', margin: '12px'}}>
      <table style={{
        borderCollapse: 'collapse',
        width: '85%',
        textAlign: 'left',
        backgroundColor:'white',
        fontFamily: 'Arial, sans-serif'
      }}>
        <thead>

        
        <tr>
            <th colSpan="8" style={{
              backgroundColor: '#EDC987',
              padding: '2px',
              fontSize: '13px',
              textAlign:'center',
              font:'Arial',
              style:'normal',
              lineHeight:'normal',
              color:'rgb(0,0,0)',
              fontWeight:'700',
              border:'solid 1px black'
            }}>
            Marks Details
            </th>
        </tr>
        <tr>
            <th className='markColumns' colSpan="1">Sub Code</th>
            <th className='markColumns' colSpan="4">Subject Name</th>
            <th className='markColumns' colSpan="1">Credits</th>
            <th className='markColumns' colSpan="1">Grade Points</th>
            <th className='markColumns' colSpan="1">Grade Secured</th>
        </tr>
        <tr>
            <td className='markColumns2' colSpan="1">HS 104 EG </td>
            <td className='markColumns2 subjects' colSpan="4">EFFECTIVE TECHNICAL COMMUNICATION IN ENGLISH</td>
            <td className='markColumns2 ' colSpan="1">3</td>
            {/* grade points */}
            <td className='markColumns2' colSpan="1">8</td> 
            {/* Grade Secured */}
            <td className='markColumns2' colSpan="1">A</td>
        </tr>
        <tr>
    <td className='markColumns2' colSpan="1">HS 105 CM</td>
    <td className='markColumns2 subjects' colSpan="4">FINANCE AND ACCOUNTING</td>
    <td className='markColumns2' colSpan="1">3</td>
    <td className='markColumns2' colSpan="1">5</td> 
    <td className='markColumns2' colSpan="1">B</td>
</tr>
<tr>
    <td className='markColumns2' colSpan="1">BS 207 MT</td>
    <td className='markColumns2 subjects' colSpan="4">MATHEMATICS – III (PROBABILITY & STATISTICS)</td>
    <td className='markColumns2' colSpan="1">4</td>
    <td className='markColumns2' colSpan="1">7</td> 
    <td className='markColumns2' colSpan="1">A</td>
</tr>
<tr>
    <td className='markColumns2' colSpan="1">ES 305 EC</td>
    <td className='markColumns2 subjects' colSpan="4">SIGNALS AND SYSTEMS</td>
    <td className='markColumns2' colSpan="1">3</td>
    <td className='markColumns2' colSpan="1">0</td> 
    <td className='markColumns2' colSpan="1">F</td>
</tr>
<tr>
    <td className='markColumns2' colSpan="1">PC 401 CS</td>
    <td className='markColumns2 subjects' colSpan="4">OPERATING SYSTEMS</td>
    <td className='markColumns2' colSpan="1">3</td>
    <td className='markColumns2' colSpan="1">6</td> 
    <td className='markColumns2' colSpan="1">D</td>
</tr>
<tr>
    <td className='markColumns2' colSpan="1">PC 402 CS</td>
    <td className='markColumns2 subjects' colSpan="4">COMPUTER ORGANIZATION</td>
    <td className='markColumns2' colSpan="1">3</td>
    <td className='markColumns2' colSpan="1">6</td> 
    <td className='markColumns2' colSpan="1">D</td>
</tr>
<tr>
    <td className='markColumns2' colSpan="1">PC 403 CS</td>
    <td className='markColumns2 subjects' colSpan="4">DATABASE MANAGEMENT SYSTEMS</td>
    <td className='markColumns2' colSpan="1">3</td>
    <td className='markColumns2' colSpan="1">4</td> 
    <td className='markColumns2' colSpan="1">E</td>
</tr>
<tr>
    <td className='markColumns2' colSpan="1">PC 451 CS</td>
    <td className='markColumns2 subjects' colSpan="4">COMPUTER ORGANIZATION LAB</td>
    <td className='markColumns2' colSpan="1">1</td>
    <td className='markColumns2' colSpan="1">9</td> 
    <td className='markColumns2' colSpan="1">A</td>
</tr>
<tr>
    <td className='markColumns2' colSpan="1">PC 452 CS</td>
    <td className='markColumns2 subjects' colSpan="4">OPERATING SYSTEMS LAB</td>
    <td className='markColumns2' colSpan="1">1</td>
    <td className='markColumns2' colSpan="1">7</td> 
    <td className='markColumns2' colSpan="1">C</td>
</tr>
<tr>
    <td className='markColumns2' colSpan="1">PC 453 CS</td>
    <td className='markColumns2 subjects' colSpan="4">DATABASE MANAGEMENT SYSTEMS LAB</td>
    <td className='markColumns2' colSpan="1">1</td>
    <td className='markColumns2' colSpan="1">7</td> 
    <td className='markColumns2' colSpan="1">C</td>
</tr>


       
        
        
        
        </thead>
      </table>
    </div>
  )
}

export default ResultData
