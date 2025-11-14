import Image from 'next/image';

import { AnimatedBackground } from '@/features/marketing/components/animated-background';

interface BackgroundProps {
  imageSrc?: string;
  blurClass?: 'backdrop-blur-xl' | 'backdrop-blur-2xl' | 'backdrop-blur-3xl';
}

export default function Background({
  imageSrc = '/abstract-bg.jpg',
  blurClass = 'backdrop-blur-2xl',
}: BackgroundProps) {
  return (
    <div className='fixed inset-0 z-0'>
      <div className='absolute inset-0'>
        <Image
          src={imageSrc}
          alt='abstract mountain background'
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
      </div>
      <div className={`absolute inset-0 ${blurClass} bg-background/60`} />
      <AnimatedBackground />
    </div>
  );
}
