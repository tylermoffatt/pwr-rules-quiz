//List of Available Quizzes
"use client";
import Link from 'next/link';

export function QuizList({ quizzes }) {

  return (
    <div>
      <h1 className="text-xl mb-4 text-center">Select a Quiz from the list to begin testing your rule knowledge!</h1>
      <ul className="space-y-4">
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <Link href={`/quiz/${quiz.slug}`}>
              <button className="w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {quiz.id}
              </button>
            </Link> 
          </li>
        ))}
      </ul>
    </div>
  );
}