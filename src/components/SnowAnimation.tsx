import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const generateSnowflakes = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: 5 + Math.random() * 10,
    delay: -Math.random() * 10,
    opacity: 0.3 + Math.random() * 0.3,
    size: 3 + Math.random() * 4,
  }));
};

export const SnowAnimation: React.FC = () => {
  const snowflakes = generateSnowflakes(40);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {snowflakes.map((snowflake) => (
        <animated.div
          key={snowflake.id}
          style={{
            position: 'absolute',
            left: snowflake.left,
            width: snowflake.size,
            height: snowflake.size,
            background: snowflake.id % 3 === 0 ? '#D4AF37' : '#F5F1E8',
            borderRadius: '50%',
            opacity: snowflake.opacity,
            filter: 'blur(1px)',
            boxShadow: snowflake.id % 3 === 0 ? '0 0 4px rgba(212, 175, 55, 0.5)' : 'none',
            animation: `fall ${snowflake.animationDuration}s linear ${snowflake.delay}s infinite`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-10px) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};