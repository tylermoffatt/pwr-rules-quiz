//Quiz Logic + UI
'use client';
import { useState } from 'react';
import QuizResult from '@/components/QuizResult';

export default function QuizPage( { quiz }) {
  const {id, title, questions} = quiz;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

   if (showResult) {
    return <QuizResult score={score} total={questions.length} onRestart={handleRestart} />;
  }

  return (
    <div className="space-y-4">
      <div>Welcome to {title}! This quiz contains {questions.length} multiple choice questions based on {id} rules.</div>
      <div className="text-md text-gray-400">Question {currentQuestion.qid} of {questions.length}</div>

      <div className="text-lg font-medium">{currentQuestion.question}</div>

      <div className="grid grid-cols-1 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={`px-4 py-2 rounded border text-left ${
              selectedOption === option
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={selectedOption === null}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {currentQuestionIndex + 1 === questions.length ? 'Submit Quiz' : 'Next Question'}
      </button>
    </div>
  );
}  
  

