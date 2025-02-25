import React, { useState } from "react";
import "./ChallengesPage.css";
import { fetchQuizFromAI } from '../utils/apiUtils';

const ChallengesPage = () => {
  
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOptions, setCurrentOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [manualQuizId, setManualQuizId] = useState("");

  const [quizTopic, setQuizTopic] = useState("");
  const [generatedQuiz, setGeneratedQuiz] = useState(null);

  // Handle adding a question to the manual quiz
  const handleAddQuestion = () => {
    if (!currentQuestion.trim() || !correctAnswer.trim()) {
      alert("Please provide a question and the correct answer.");
      return;
    }
    if (currentOptions.some((option) => option.trim() === "")) {
      alert("All options must be filled out.");
      return;
    }

    const newQuestion = {
      question: currentQuestion,
      options: [...currentOptions],
      answer: correctAnswer,
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion("");
    setCurrentOptions(["", "", "", ""]);
    setCorrectAnswer("");
  };

  // Handle submission of the manual quiz
  const handleSubmitManualQuiz = () => {
    if (!quizTitle.trim()) {
      alert("Quiz title cannot be empty.");
      return;
    }
    if (questions.length === 0) {
      alert("Add at least one question to the quiz.");
      return;
    }

    const newQuizId = `MANUAL-${Math.random().toString(36).substring(7).toUpperCase()}`;
    setManualQuizId(newQuizId);
    alert(`Manual Quiz Created with ID: ${newQuizId}`);
    // Reset states after quiz creation
    setQuizTitle("");
    setQuestions([]);
  };

  // Generate quiz using AI
  const generateQuiz = async () => {
    if (quizTopic.trim() === "") {
      alert("Please enter a topic to generate a quiz.");
      return;
    }

    try {
      const quizData = await fetchQuizFromAI(quizTopic);
      const quiz = JSON.parse(quizData); // Parse the AI response if it's in JSON format
      setGeneratedQuiz(quiz);
      alert(`Quiz Generated! Share this ID: ${quiz.id}`);
    } catch (error) {
      console.error("Error generating quiz:", error);
      alert("Failed to generate quiz. Please try again.");
    }
  };

  return (
    <div className="challenges-page">
      <h1>Challenges and Quizzes</h1>

      {/* Manual Quiz Creation */}
      <div className="manual-quiz">
        <h2>Create a Manual Quiz</h2>
        <input
          type="text"
          placeholder="Quiz Title"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
        />
        <div className="question-section">
          <input
            type="text"
            placeholder="Enter Question"
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
          />
          {currentOptions.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={currentOptions[index]}
              onChange={(e) =>
                setCurrentOptions(
                  currentOptions.map((opt, i) => (i === index ? e.target.value : opt))
                )
              }
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
          <button onClick={handleAddQuestion}>Add Question</button>
        </div>
        <button onClick={handleSubmitManualQuiz}>Submit Quiz</button>
        {manualQuizId && <p>Your Quiz ID: {manualQuizId}</p>}
      </div>

      {/* AI-Generated Quiz */}
      <div className="ai-quiz">
        <h2>Generate Quiz with AI</h2>
        <input
          type="text"
          placeholder="Enter Topic Name"
          value={quizTopic}
          onChange={(e) => setQuizTopic(e.target.value)}
        />
        <button onClick={generateQuiz}>Generate Quiz</button>
        {generatedQuiz && (
          <div className="quiz-preview">
            <h3>Generated Quiz: {generatedQuiz.topic}</h3>
            <ul>
              {generatedQuiz.questions.map((q, index) => (
                <li key={index}>
                  {q.question}
                  <br />
                  Options: {q.options.join(", ")}
                </li>
              ))}
            </ul>
            <p>Quiz ID: {generatedQuiz.id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengesPage;
