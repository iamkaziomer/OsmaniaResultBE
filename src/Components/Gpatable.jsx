import React from 'react'

function Gpatable(props) {
  return (
    <div style={{display:props.checkButtonPress?'flex':'none', justifyContent: 'center', margin: '12px'}}>
      <table style={{
        borderCollapse: 'collapse',
        width: '85%',
        textAlign: 'left',
        backgroundColor:'white',
        fontFamily: 'Arial, sans-serif'
      }}>
        <thead style={{fontWeight:'700'}}>
            <tr>
                <th style={{backgroundColor:'#EDC987',fontWeight:'700'}} className='markColumns ' colSpan="10">
                    Result
                </th>
            </tr>
            <tr>
               <th colSpan="2" className='markColumns2 marks3' >Semester</th> 
               <th colSpan="6" className='markColumns2 marks3'>Result With SGPA</th>
               <th colSpan="2" className='markColumns2 marks3'>Over all CGPA</th>
            </tr>
            <tr>
               <th colSpan="2" className='markColumns2 marks3' >4</th> 
               <th colSpan="6" className='markColumns2 marks3'>PROMOTED--</th>
               <th colSpan="2" className='markColumns2 marks3'>-</th>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default Gpatable
