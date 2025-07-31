import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end: number, duration: number = 2000): number => {
  const [count, setCount] = useState(0);
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const progress = timestamp - startTimeRef.current;
    const progressFraction = Math.min(progress / duration, 1);
    const easedProgress = easeOutCubic(progressFraction);

    const currentCount = easedProgress * end;
    setCount(currentCount);

    if (progress < duration) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
        setCount(end); // Ensure it ends exactly on the end value
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration]);

  return count;
};