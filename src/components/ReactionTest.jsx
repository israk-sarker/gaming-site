import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, RotateCcw } from 'lucide-react';

const ReactionTest = () => {
  const [state, setState] = useState('waiting'); // waiting, ready, test, result
  const [lastResult, setLastResult] = useState(null);
  const [isTooSoon, setIsTooSoon] = useState(false);
  
  const startTime = useRef(0);
  const timerRef = useRef(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const startTest = () => {
    setIsTooSoon(false);
    setState('ready');
    
    const delay = Math.floor(Math.random() * 3000) + 2000; // 2-5 second random delay
    
    timerRef.current = setTimeout(() => {
      setState('test');
      startTime.current = performance.now();
    }, delay);
  };

  const handlePointerDown = (e) => {
    e.preventDefault();

    if (state === 'waiting' || state === 'result') {
      startTest();
    } else if (state === 'ready') {
      // Clicked too early
      clearTimeout(timerRef.current);
      setIsTooSoon(true);
      setState('waiting');
    } else if (state === 'test') {
      // Successful click
      const endTime = performance.now();
      const reactionTime = Math.floor(endTime - startTime.current);
      setLastResult(reactionTime);
      setState('result');
    }
  };

  return (
    <div 
      onPointerDown={handlePointerDown}
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-200 select-none cursor-pointer overflow-hidden relative
        ${state === 'waiting' ? 'bg-slate-950' : ''}
        ${state === 'ready' ? 'bg-red-950/40' : ''}
        ${state === 'test' ? 'bg-purple-600' : ''}
        ${state === 'result' ? 'bg-slate-950' : ''}
      `}
    >
      {/* Back Button */}
      <Link 
        to="/" 
        onPointerDown={(e) => e.stopPropagation()} // Prevent triggering game
        className="absolute top-6 left-6 p-3 bg-slate-900 border border-slate-800 rounded-full hover:border-purple-500 transition-all z-20 text-white"
      >
        <ArrowLeft size={20} />
      </Link>

      <div className="relative z-10 text-center px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Zap className={`${state === 'test' ? 'text-white' : 'text-purple-500'}`} size={32} />
          <h1 className="text-3xl font-black tracking-tighter uppercase italic text-white">
            Skill Lab: Reaction
          </h1>
        </div>

        <div className="h-64 flex flex-col items-center justify-center">
          {state === 'waiting' && (
            <>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase italic">
                {isTooSoon ? 'Too Early!' : 'Ready?'}
              </h2>
              <p className="text-slate-500 font-bold tracking-widest uppercase">Click anywhere to start</p>
            </>
          )}

          {state === 'ready' && (
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic animate-pulse">
              Wait for Purple...
            </h2>
          )}

          {state === 'test' && (
            <h2 className="text-7xl md:text-9xl font-black text-white uppercase italic drop-shadow-2xl">
              CLICK!
            </h2>
          )}

          {state === 'result' && (
            <div className="animate-in fade-in zoom-in duration-300">
              <p className="text-slate-500 font-bold tracking-widest uppercase mb-2">Reaction Time</p>
              <h2 className="text-8xl md:text-9xl font-black text-purple-500 italic mb-8">
                {lastResult}ms
              </h2>
              <div className="flex items-center justify-center gap-2 text-white/50 font-bold uppercase tracking-tighter">
                <RotateCcw size={16} /> Click to try again
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Background Polish */}
      {state === 'waiting' || state === 'result' ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
      ) : null}
    </div>
  );
};

export default ReactionTest;