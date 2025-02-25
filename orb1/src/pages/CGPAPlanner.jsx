import React, { useState } from "react";
import "./CGPAPlanner.css";

const CGPAPlanner = () => {
    const [subjects, setSubjects] = useState([]);
    const [targetMarks, setTargetMarks] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const addSubject = () => {
      setSubjects([...subjects, { name: "", marks: "", weightage: "" }]);
    };
  
    const handleInputChange = (index, field, value) => {
      const updatedSubjects = [...subjects];
      updatedSubjects[index][field] = value;
      setSubjects(updatedSubjects);
    };
  
    // Analyze marks and provide suggestions
    // const analyzeMarks = () => {
    //   if (!targetMarks || subjects.some(sub => !sub.marks || !sub.weightage)) {
    //     alert("Please fill in all the fields.");
    //     return;
    //   }
  
    //   const totalWeightage = subjects.reduce((acc, sub) => acc + parseFloat(sub.weightage), 0);
    //   const requiredMarks = parseFloat(targetMarks);
    //   const analysis = subjects.map(sub => {
    //     const expectedMarks = (parseFloat(sub.weightage) / totalWeightage) * requiredMarks;
    //     const gap = Math.max(0, expectedMarks - parseFloat(sub.marks));
    //     return { name: sub.name, gap, expectedMarks, currentMarks: parseFloat(sub.marks) };
    //   });
  
    //   analysis.sort((a, b) => b.gap - a.gap);
    //   setSuggestions(analysis);
    // };
  
  
  
    const analyzeMarks = () => {
      if (!targetMarks || subjects.some(sub => !sub.marks || !sub.weightage)) {
        alert("Please fill in all the fields.");
        return;
      }
  
      const totalWeightage = subjects.reduce((acc, sub) => acc + parseFloat(sub.weightage), 0);
      const requiredMarks = parseFloat(targetMarks);
      
      const analysis = subjects.map(sub => {
        const expectedMarks = (parseFloat(sub.weightage) / totalWeightage) * requiredMarks;
        const gap = expectedMarks > parseFloat(sub.marks) ? expectedMarks - parseFloat(sub.marks) : 0;
        return { name: sub.name, gap, expectedMarks, currentMarks: parseFloat(sub.marks) };
      });
  
      analysis.sort((a, b) => b.gap - a.gap); 
      setSuggestions(analysis);
  };
  
    return (
      <div className="App">
        <h1>Exam Preparation Suggestion Tool</h1>
        <div className="container">
          <label htmlFor="targetMarks">Target Marks</label>
          <input
            type="number"
            id="targetMarks"
            value={targetMarks}
            onChange={(e) => setTargetMarks(e.target.value)}
            placeholder="Enter your target marks"
          />
          
          {subjects.map((subject, index) => (
            <div key={index} className="subject-container">
              <label>Subject Name</label>
              <input
                type="text"
                value={subject.name}
                onChange={(e) => handleInputChange(index, "name", e.target.value)}
                placeholder="Subject Name"
              />
              <label>Previous Marks</label>
              <input
                type="number"
                value={subject.marks}
                onChange={(e) => handleInputChange(index, "marks", e.target.value)}
                placeholder="Marks"
              />
              <label>Weightage</label>
              <input
                type="number"
                value={subject.weightage}
                onChange={(e) => handleInputChange(index, "weightage", e.target.value)}
                placeholder="Weightage"
              />
            </div>
          ))}
          
          <button onClick={addSubject}>Add Subject</button>
          <button onClick={analyzeMarks}>Analyze</button>
  
          {suggestions.length > 0 && (
            <div className="result">
              <h3>Suggestions:</h3>
              <ul>
                {suggestions.map((sub, index) => (
                  <li key={index}>
                    <strong>{sub.name}</strong>: Current Marks = {sub.currentMarks}, Expected Marks = {sub.expectedMarks.toFixed(2)}, Gap = {sub.gap.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };  

export default CGPAPlanner;