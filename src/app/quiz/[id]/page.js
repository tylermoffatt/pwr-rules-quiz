//Page where Quizzes are routed to when selected
import { quizzes } from '@/data/quizzes';
import QuizPage from '@/components/QuizPage';
import PageLayout from '@/components/PageLayout';

export default async function quizRender({ params }) {
  const quiz = quizzes.find(q => q.slug === params.id);
  if (!quiz) return <div>Quiz not found</div>;

  return (
    <PageLayout title={quiz.title}>
      <QuizPage quiz={quiz} />
    </PageLayout>
  );
}