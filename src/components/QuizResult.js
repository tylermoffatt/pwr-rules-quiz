//Results display after completion
'use client';
import Link from 'next/link';
import ReturnHome from './ReturnHome';

export default function QuizResult({ score, total, onRestart }) {
  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold text-green-400">Quiz Completed!</h2>
      <p className="text-lg text-white">
        You scored <span className="font-semibold">{score}</span> out of <span className="font-semibold">{total}</span>.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Restart Quiz
        </button>

        <ReturnHome />
      </div>
    </div>
  );
}
