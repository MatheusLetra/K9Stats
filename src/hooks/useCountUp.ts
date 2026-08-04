import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  target: number;
  duration?: number;
  decimals?: number;
}

export const useCountUp = ({ target, duration = 1400, decimals = 0 }: UseCountUpOptions) => {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min(1, (currentTime - startTime) / duration);
            
            // Efeito ease-out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easedProgress;

            setValue(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  const formattedValue = decimals > 0 
    ? value.toFixed(decimals).replace('.', ',') 
    : Math.round(value).toString();

  return { value: formattedValue, ref: elementRef };
};