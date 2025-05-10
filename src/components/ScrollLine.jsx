'use client';
import { useEffect } from 'react';

export default function ScrollLine() {
  useEffect(() => {
    const line = document.getElementById('scroll-line');

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollTop / docHeight) *2;
      const maxHeight = 96; // max height as percent

      line.style.height = `${scrollPercent * maxHeight}vh`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="scroll-line" className="absolute top-30 left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-[var(--secondary-color)] z-[-1] rounded-4xl" />
  );
}
