import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Clock, Trophy, RotateCcw, Home } from 'lucide-react';

interface QuizResultsProps {
  results: {
    score: number;
    totalQuestions: number;
    timeTaken: number;
    answers: Array<{
      questionId: string;
      selectedOptionId: string;
      isCorrect: boolean;
    }>;
  };
  testType: string;
  onRetake: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ results, testType, onRetake }) => {
  const navigate = useNavigate();
  const { score, totalQuestions, timeTaken } = results;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', message: 'Excellent!' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-500', message: 'Very Good!' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-500', message: 'Good!' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-500', message: 'Fair' };
    return { grade: 'D', color: 'text-red-500', message: 'Needs Improvement' };
  };

  const gradeInfo = getGrade(percentage);

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-3xl font-bold text-gradient-primary mb-2">Test Complete!</h1>
          <Badge variant="outline" className="capitalize text-lg px-4 py-2">
            {testType.replace('_', ' ')} Test
          </Badge>
        </div>

        {/* Results Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Your Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Score */}
              <div className="text-center">
                <div className={`text-4xl font-bold ${gradeInfo.color} mb-2`}>
                  {gradeInfo.grade}
                </div>
                <div className="text-2xl font-semibold mb-1">
                  {score} / {totalQuestions}
                </div>
                <div className="text-sm text-muted-foreground">
                  {percentage}% Correct
                </div>
                <div className={`text-sm font-medium ${gradeInfo.color}`}>
                  {gradeInfo.message}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="flex flex-col justify-center">
                <Progress value={percentage} className="mb-2" />
                <div className="text-center text-sm text-muted-foreground">
                  Score Progress
                </div>
              </div>

              {/* Time */}
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <div className="text-2xl font-semibold mb-1">
                  {formatTime(timeTaken)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Time Taken
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Answer Breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Answer Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Correct Answers</span>
                <Badge variant="secondary" className="ml-auto">
                  {score}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-sm">Incorrect Answers</span>
                <Badge variant="secondary" className="ml-auto">
                  {totalQuestions - score}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {percentage >= 80 && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Great job! You have a strong understanding of the material.</span>
                </div>
              )}
              {percentage >= 60 && percentage < 80 && (
                <div className="flex items-center gap-2 text-yellow-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Good effort! Consider reviewing the topics you missed.</span>
                </div>
              )}
              {percentage < 60 && (
                <div className="flex items-center gap-2 text-red-600">
                  <XCircle className="w-4 h-4" />
                  <span className="text-sm">More practice needed. Review the study materials and try again.</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onRetake} variant="outline" className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Retake Test
          </Button>
          <Button onClick={() => navigate('/practice-tests')} className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Back to Tests
          </Button>
          <Button onClick={() => navigate('/')} variant="outline" className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;