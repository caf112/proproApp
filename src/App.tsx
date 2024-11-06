import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import QuizGame from './components/QuizGame';
import Leaderboard from './components/Leaderboard';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function GameContent() {
  const { user, logout } = useAuth();
  const [gameStarted, setGameStarted] = useState(false);

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Code2 className="w-12 h-12 text-indigo-600" />
              <h1 className="text-3xl font-bold text-gray-800 ml-3">CodeQuest</h1>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              ログアウト
            </button>
          </div>

          <div className="text-center mb-8">
            <p className="text-xl font-semibold text-gray-700">
              ようこそ、{user?.username}さん！
            </p>
          </div>

          <button
            onClick={() => setGameStarted(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            ゲームを開始
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Code2 className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800 ml-2">CodeQuest</h1>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            ログアウト
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <QuizGame playerName={user?.username || ''} />
          </div>
          <div className="lg:col-span-1">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useAuth();

  if (user) {
    return <GameContent />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-8">
          <Code2 className="w-12 h-12 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800 ml-3">CodeQuest</h1>
        </div>
        
        {isLogin ? (
          <LoginForm onToggleForm={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onToggleForm={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AuthScreen />
    </AuthProvider>
  );
}