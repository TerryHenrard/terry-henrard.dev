'use client';

import AnoAI from '@/core/components/ui/animated-shader-background';

const AnimatedBackground = () => {
  return (
    <div className='fixed inset-0 z-0 h-screen w-full'>
      <AnoAI />
    </div>
  );
};

export { AnimatedBackground };
