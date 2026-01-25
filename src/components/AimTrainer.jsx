import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Crosshair, ArrowLeft } from 'lucide-react';

const AimTrainer = () => {
  const [targets, setTargets] = useState([]);
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(40);
  const [isActive, setIsActive] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [combo, setCombo] = useState(0);

  const timerRef = useRef(null);

  // Core Timer Logic
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current);
      setIsActive(false);
      if (score > bestScore) setBestScore(score);
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, timeLeft]);

  const spawnTargets = () => {
    // 3 targets always active on a 3x3 grid
    const positions = [];
    while (positions.length < 3) {
      const pos = Math.floor(Math.random() * 9);
      if (!positions.includes(pos)) positions.push(pos);
    }
    setTargets(positions);
  };

  const startGame = () => {
    clearInterval(timerRef.current);
    setScore(0);
    setClicks(0);
    setTimeLeft(40); // Hardcoded to 40 seconds
    setCombo(0);
    setIsActive(true);
    spawnTargets();
  };

  const handleTargetClick = (pos) => {
    if (!isActive) return;
    setScore(s => s + 1);
    setClicks(c => c + 1);
    setCombo(c => c + 1);
    
    const available = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(i => !targets.includes(i));
    const nextPos = available[Math.floor(Math.random() * available.length)];
    setTargets(targets.map(t => t === pos ? nextPos : t));
  };

  const handleMissClick = () => {
    if (!isActive) return;
    setClicks(c => c + 1);
    setCombo(0);
  };

  const accuracy = clicks > 0 ? Math.round((score / clicks) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4 overflow-hidden relative font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />

      <Link to="/" className="absolute top-6 left-6 p-3 bg-slate-900 border border-slate-800 rounded-full hover:border-purple-500 transition-all z-20">
        <ArrowLeft size={20} />
      </Link>
      
      <div className="relative z-10 w-full max-w-2xl text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Crosshair className="text-purple-500" size={32} />
          <h1 className="text-4xl font-black tracking-tighter uppercase italic">SKILL LAB: AIM</h1>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Time Left</p>
            <p className={`text-3xl font-mono font-bold ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
              {timeLeft}s
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Score</p>
            <p className="text-3xl font-mono font-bold text-purple-400">{score}</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Accuracy</p>
            <p className="text-3xl font-mono font-bold text-cyan-400">{accuracy}%</p>
          </div>
        </div>

        {/* Game Board (3x3) */}
        <div 
          className="grid grid-cols-3 grid-rows-3 gap-8 w-full aspect-square max-w-md mx-auto relative mb-12"
          onClick={handleMissClick}
        >
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              {targets.includes(i) && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTargetClick(i);
                  }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] active:scale-90 transition-transform duration-75"
                />
              )}
            </div>
          ))}
        </div>

        <div className="h-24 flex flex-col items-center justify-center">
          {combo > 4 && (
            <p className="text-yellow-400 font-black text-2xl italic animate-bounce">
              COMBO X{combo} 🔥
            </p>
          )}

          {!isActive && (
            <button
              onClick={startGame}
              className="px-12 py-4 bg-white text-black font-black uppercase rounded-full hover:bg-purple-500 hover:text-white transition-all tracking-widest text-xl shadow-xl"
            >
              {timeLeft === 40 ? 'Start Training' : 'Try Again'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AimTrainer;