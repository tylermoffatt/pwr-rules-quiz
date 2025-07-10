//Home Page for quiz directory
import { quizzes } from '@/data/quizzes'; //Mock Data file - not used because of frontend-backend integration.
import { QuizList } from '@/components/QuizList';


export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-6 p-10">
      
      <div className="col-span-full flex justify-center px-4 md:px-6 xl:px-8 py-4 overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-center">
          Welcome to the AESO ISO Rules Quiz App
        </h1> 
      </div>

      <div className="col-span-full flex text-center row-span-1 border-1 rounded-md p-6">
        <p>
        The goal of this app is for Dispatchers to strengthen their knowledge of AESO ISO rules.<br />
        <br />
        Choose from the list of quizzes based on different sections of ISO Rules, retake them as many times as you need.<br />
        </p>
        </div>

      <div className="col-span-full row-span-2 bg-gray-900 rounded-md border-1 p-6 overflow-auto">
        <QuizList quizzes={quizzes} />
      </div>
     
    </div>
  );
}


