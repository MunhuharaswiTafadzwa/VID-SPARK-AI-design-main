
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/components/AuthContext';
import { useToast } from '@/hooks/use-toast';
interface Question {
  id: string;
  question_text: string;
  test_type: string;
  difficulty: string;
  explanation: string;
  options: {
    id: string;
    option_text: string;
    is_correct: boolean;
  }[];
}
interface QuizProps {
  testType: string;
  onComplete: (results: QuizResults) => void;
}
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
const Quiz: React.FC<QuizProps> = ({ testType, onComplete }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [answers, setAnswers] = useState<QuizResults['answers']>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [startTime] = useState(Date.now());
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  // Test duration mappings (in seconds)
  const testDurations = {
    quick: 300, // 5 minutes
    full_mock: 2400, // 40 minutes
    road_signs: 600, // 10 minutes
    traffic_rules: 900, // 15 minutes
    penalties_laws: 900, // 15 minutes
    oral_practice: 1200, // 20 minutes
  };
  useEffect(() => {
    fetchQuestions();
  }, [testType]);
  useEffect(() => {
    if (questions.length > 0) {
      const duration = testDurations[testType as keyof typeof testDurations] || 600;
      setTimeLeft(duration);
    }
  }, [questions, testType]);
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);
  const fetchQuestions = async () => {
    try {
      const { data: questionsData, error } = await (supabase as any)
        .from('questions')
        .select(`
          id,
          question_text,
          test_type,
          difficulty,
          explanation,
          question_options (
            id,
            option_text,
            is_correct
          )
        `)
        .eq('test_type', testType)
        .limit(getQuestionLimit(testType));
      if (error) throw error;
      const formattedQuestions = questionsData?.map((q: any) => ({
        ...q,
        options: q.question_options
      })) || [];
      setQuestions(formattedQuestions);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      toast({
        title: "Error",
        description: "Failed to load questions. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };
  const getQuestionLimit = (type: string) => {
    const limits = {
      quick: 5,
      full_mock: 20,
      road_signs: 10,
      traffic_rules: 15,
      penalties_laws: 12,
      oral_practice: 10,
    };
    return limits[type as keyof typeof limits] || 5;
  };
  const handleTimeUp = () => {
    toast({
      title: "Time's Up!",
      description: "The test has ended due to time limit.",
      variant: "destructive",
    });
    finishQuiz();
  };
  const handleAnswerSelect = (optionId: string) => {
    setSelectedOptionId(optionId);
  };
  const handleNextQuestion = () => {
    if (!selectedOptionId) {
      toast({
        title: "Please select an answer",
        description: "You must choose an option before proceeding.",
        variant: "destructive",
      });
      return;
    }
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(opt => opt.id === selectedOptionId);
    
    const newAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId,
      isCorrect: selectedOption?.is_correct || false,
    };
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionId('');
    } else {
      finishQuiz(updatedAnswers);
    }
  };
  const finishQuiz = async (finalAnswers = answers) => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const score = finalAnswers.filter(answer => answer.isCorrect).length;
    
    const results: QuizResults = {
      score,
      totalQuestions: questions.length,
      timeTaken,
      answers: finalAnswers,
    };
    // Save results to database
    if (user) {
      try {
        await (supabase as any)
          .from('test_results')
          .insert({
            user_id: user.id,
            test_type: testType,
            score,
            total_questions: questions.length,
            time_taken: timeTaken,
            answers: finalAnswers,
          });
      } catch (error) {
        console.error('Error saving test results:', error);
      }
    }
    onComplete(results);
  };
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading questions...</p>
        </div>
      </div>
    );
  }
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <h3 className="text-lg font-semibold mb-2">No Questions Available</h3>
            <p className="text-muted-foreground">There are no questions available for this test type.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-sm">
              Question {currentQuestionIndex + 1} of {questions.length}
            </Badge>
            <Badge variant="outline" className="capitalize">
              {testType.replace('_', ' ')}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(timeLeft)}</span>
          </div>
        </div>
        {/* Progress */}
        <Progress value={progress} className="mb-6" />
        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {currentQuestion.question_text}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id)}
                  className={`w-full p-4 text-left rounded-lg border transition-colors ${
                    selectedOptionId === option.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {option.option_text}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button 
            onClick={handleNextQuestion}
            disabled={!selectedOptionId}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Test' : 'Next Question'}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Quiz;