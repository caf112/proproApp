import React from 'react';
import { Trophy } from 'lucide-react';

const mockLeaderboard = [
  { name: 'プレイヤー1', score: 150 },
  { name: 'プレイヤー2', score: 120 },
  { name: 'プレイヤー3', score: 90 },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl font-bold text-gray-800 ml-2">ランキング</h2>
      </div>

      <div className="space-y-4">
        {mockLeaderboard.map((player, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          >
            <div className="flex items-center">
              <span className={`
                w-8 h-8 rounded-full flex items-center justify-center font-bold
                ${index === 0 ? 'bg-yellow-100 text-yellow-700' :
                  index === 1 ? 'bg-gray-100 text-gray-700' :
                  index === 2 ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-600'}
              `}>
                {index + 1}
              </span>
              <span className="ml-3 font-medium text-gray-700">{player.name}</span>
            </div>
            <span className="font-mono font-semibold text-indigo-600">{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;