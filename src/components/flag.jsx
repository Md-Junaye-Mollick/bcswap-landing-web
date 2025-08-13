import React from 'react';

export default function TricolorWaves() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <div className="absolute inset-0 transform -rotate-[35deg] origin-center scale-150">
        {/* Orange Wave */}
        <svg 
          className="absolute inset-0 w-full h-full animate-pulse"
          viewBox="0 0 400 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7b00" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ff7b00" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff7b00" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M 20 80 Q 100 20, 200 60 T 380 40" 
            stroke="url(#orangeGrad)" 
            strokeWidth="8" 
            fill="none"
            className="animate-[draw_3s_ease-in-out_infinite]"
            strokeDasharray="1000"
            strokeDashoffset="0"
          />
          <path 
            d="M 25 85 Q 105 25, 205 65 T 385 45" 
            stroke="#ff7b00" 
            strokeWidth="6" 
            fill="none"
            opacity="0.7"
            className="animate-[draw_3s_ease-in-out_0.2s_infinite]"
          />
          <path 
            d="M 30 90 Q 110 30, 210 70 T 390 50" 
            stroke="#ff9500" 
            strokeWidth="4" 
            fill="none"
            opacity="0.5"
            className="animate-[draw_3s_ease-in-out_0.4s_infinite]"
          />
        </svg>

        {/* White Wave */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M 30 100 Q 110 40, 210 80 T 390 60" 
            stroke="url(#whiteGrad)" 
            strokeWidth="10" 
            fill="none"
            className="animate-[draw_3s_ease-in-out_0.5s_infinite]"
          />
          <path 
            d="M 35 105 Q 115 45, 215 85 T 395 65" 
            stroke="#f0f0f0" 
            strokeWidth="8" 
            fill="none"
            opacity="0.8"
            className="animate-[draw_3s_ease-in-out_0.7s_infinite]"
          />
          <path 
            d="M 40 110 Q 120 50, 220 90 T 400 70" 
            stroke="#e5e5e5" 
            strokeWidth="6" 
            fill="none"
            opacity="0.6"
            className="animate-[draw_3s_ease-in-out_0.9s_infinite]"
          />
        </svg>

        {/* Green Wave */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00a651" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00a651" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00a651" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M 40 120 Q 120 60, 220 100 T 400 80" 
            stroke="url(#greenGrad)" 
            strokeWidth="8" 
            fill="none"
            className="animate-[draw_3s_ease-in-out_1s_infinite]"
          />
          <path 
            d="M 45 125 Q 125 65, 225 105 T 405 85" 
            stroke="#00a651" 
            strokeWidth="6" 
            fill="none"
            opacity="0.7"
            className="animate-[draw_3s_ease-in-out_1.2s_infinite]"
          />
          <path 
            d="M 50 130 Q 130 70, 230 110 T 410 90" 
            stroke="#22c55e" 
            strokeWidth="4" 
            fill="none"
            opacity="0.5"
            className="animate-[draw_3s_ease-in-out_1.4s_infinite]"
          />
        </svg>

        {/* Floating particles for extra effect */}
        <div className="absolute top-8 left-16 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-16 left-32 w-1 h-1 bg-white rounded-full animate-ping opacity-80"></div>
        <div className="absolute top-24 left-48 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-12 right-24 w-1 h-1 bg-orange-300 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute bottom-16 right-16 w-2 h-2 bg-green-300 rounded-full animate-ping opacity-50"></div>
      </div>

      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -1000;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}