import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, XCircle } from 'lucide-react';

interface QuizGameProps {
  playerName: string;
}

interface Question {
  id: number;
  code: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    code: `function calculateSum(numbers) {
  let sum = ___;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}`,
    options: ['null', '0', 'undefined', '1'],
    correctAnswer: 1
  },
  {
    id: 2,
    code: `const fruits = ['apple', 'banana', 'orange'];
const firstFruit = fruits.___;`,
    options: ['[0]', 'first()', 'shift()', 'pop()'],
    correctAnswer: 0
  },
  {
    id: 3,
    code: `function isEven(num) {
  return num ___ 2 === 0;
}`,
    options: ['/', '*', '%', '+'],
    correctAnswer: 2
  }
];

const QuizGame: React.FC<QuizGameProps> = ({ playerName }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleNextQuestion();
    }
  }, [timeLeft, showResult]);

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + Math.ceil(timeLeft / 2));
    }

    setTimeout(handleNextQuestion, 2000);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-gray-700">{playerName}</span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
            スコア: {score}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Timer className="w-5 h-5 text-gray-500" />
          <span className="text-lg font-mono">{timeLeft}s</span>
        </div>
      </div>

      <div className="mb-8">
        <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <code>{question.code}</code>
        </pre>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && handleAnswer(index)}
            disabled={showResult}
            className={`p-4 rounded-lg text-left transition duration-200 ${
              showResult
                ? index === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : index === selectedAnswer
                  ? 'bg-red-100 border-red-500'
                  : 'bg-gray-100 border-gray-300'
                : 'bg-white border-gray-300 hover:border-indigo-500 hover:bg-indigo-50'
            } border-2`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono">{option}</span>
              {showResult && index === question.correctAnswer && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizGame;