import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Quiz from '@/components/Quiz';
import QuizResults from '../components/QuizResults';

interface QuizResults {
  score: number;
  totalQuestions: number;
  timeTaken: number;
  answers: Array<{
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
  }>;
}

const QuizPage: React.FC = () => {
  const { testType } = useParams<{ testType: string }>();
  const navigate = useNavigate();
  const [results, setResults] = useState<QuizResults | null>(null);

  if (!testType) {
    navigate('/practice-tests');
    return null;
  }

  const handleQuizComplete = (quizResults: QuizResults) => {
    setResults(quizResults);
  };

  const handleRetake = () => {
    setResults(null);
  };

  if (results) {
    return (
      <QuizResults
        results={results}
        testType={testType}
        onRetake={handleRetake}
      />
    );
  }

  return <Quiz testType={testType} onComplete={handleQuizComplete} />;
};

export default QuizPage;