import { useState } from 'react';
import './App.css';
import Gpatable from './Components/Gpatable';
import PersonalDetailsTable from './Components/PersonalDetailsTable';
import ResultData from './Components/ResultData';
import Rollinput from './Components/RollInput';

function App() {
  const [rollnumber, setrollnumber] = useState("");
  const [checkButtonPress, setCheckButtonPress] = useState(false);
  const [studentName, setStudentName] = useState('');

  return (
    <div>
      <Rollinput 
        rollnumber={rollnumber}
        setrollnumber={setrollnumber}
        setCheckButtonPress={setCheckButtonPress}
        setStudentName={setStudentName}
      />
      
      
      
      
      <div style={{ alignContent: 'center', display: 'flex', justifyContent: 'center' }} className='Heading'>
        <p style={{ fontFamily: 'Arial', fontWeight: '700', fontSize: '13px' }}>
          BE AICTE (Regular & supply) CBCS (Backlog) Sep/Oct 2024 examination results
        </p>
      </div>
      
      <PersonalDetailsTable 
        studentName={studentName} 
        checkButtonPress={checkButtonPress} 
        setrollnumber={setrollnumber} 
        rollnumber={rollnumber} 
      />
      
      <ResultData checkButtonPress={checkButtonPress} /> 
      
      <Gpatable 
        checkButtonPress={checkButtonPress} 
        rollnumber={rollnumber} 
        setrollnumber={setrollnumber} 
      />
    </div>
  );
}

export default App;
