import React, { useEffect, useState } from 'react';

function ResultData({ rollnumber, checkButtonPress }) {
  const [resultData, setResultData] = useState(null);

  // Helper function to generate results for a student
  const generateResultData = () => {
    const subjects = [
      { code: 'HS 104 EG', name: 'EFFECTIVE TECHNICAL COMMUNICATION IN ENGLISH', credits: 3 },
      { code: 'HS 105 CM', name: 'FINANCE AND ACCOUNTING', credits: 3 },
      { code: 'BS 207 MT', name: 'MATHEMATICS – III (PROBABILITY & STATISTICS)', credits: 4, fail: true },
      { code: 'ES 305 EC', name: 'SIGNALS AND SYSTEMS', credits: 3, fail: true },
      { code: 'PC 401 CS', name: 'OPERATING SYSTEMS', credits: 3 },
      { code: 'PC 402 CS', name: 'COMPUTER ORGANIZATION', credits: 3 },
      { code: 'PC 403 CS', name: 'DATABASE MANAGEMENT SYSTEMS', credits: 3 },
      { code: 'PC 451 CS', name: 'COMPUTER ORGANIZATION LAB', credits: 1 },
      { code: 'PC 452 CS', name: 'OPERATING SYSTEMS LAB', credits: 1 },
      { code: 'PC 453 CS', name: 'DATABASE MANAGEMENT SYSTEMS LAB', credits: 1 },
    ];

    // Generate random grades and points for each subject, fail specific subjects
    const gradesData = subjects.map(subject => {
      const gradePoints = subject.fail ? 0 : Math.floor(Math.random() * 6) + 4; // Random grade points between 4 and 9
      const grade = subject.fail ? 'F' : gradePoints >= 8 ? 'A' : gradePoints >= 6 ? 'B' : 'C';

      return {
        ...subject,
        gradePoints,
        grade,
      };
    });

    // Calculate GPA based on credits and grade points
    const totalCredits = subjects.reduce((acc, subject) => acc + subject.credits, 0);
    const totalPoints = gradesData.reduce((acc, subject) => acc + subject.gradePoints * subject.credits, 0);
    const cgpa = (totalPoints / totalCredits).toFixed(2); // Adjust CGPA calculation for failing grades

    return { gradesData, cgpa };
  };

  useEffect(() => {
    // Check if result data already exists in localStorage
    const storedData = localStorage.getItem(`result_${rollnumber}`);
    if (storedData) {
      setResultData(JSON.parse(storedData));
    } else {
      // Generate and store result data in localStorage if not present
      const data = generateResultData();
      localStorage.setItem(`result_${rollnumber}`, JSON.stringify(data));
      setResultData(data);
    }
  }, [rollnumber]);

  if (!checkButtonPress || !resultData) {
    return null;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '12px' }}>
      <table style={{
        borderCollapse: 'collapse',
        width: '85%',
        textAlign: 'left',
        backgroundColor: 'white',
        fontFamily: 'Arial, sans-serif'
      }}>
        <thead>
          <tr>
            <th colSpan="8" style={{
              backgroundColor: '#EDC987',
              padding: '2px',
              fontSize: '13px',
              textAlign: 'center',
              color: 'rgb(0,0,0)',
              fontWeight: '700',
              border: 'solid 1px black'
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
        </thead>
        <tbody>
          {resultData.gradesData.map((subject, index) => (
            <tr key={index}>
              <td className='markColumns2' colSpan="1">{subject.code}</td>
              <td className='markColumns2 subjects' colSpan="4">{subject.name}</td>
              <td className='markColumns2' colSpan="1">{subject.credits}</td>
              <td className='markColumns2' colSpan="1">{subject.gradePoints}</td>
              <td className='markColumns2' colSpan="1">{subject.grade}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="8" style={{ fontWeight: 'bold', textAlign: 'center', padding: '10px' }}>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultData;
