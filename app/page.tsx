'use client';

import { Card, CardContent } from '@/core/components/ui/card';
import Chat from '@/features/ai/components/chat';

export default function Home() {
  return (
    <main className='container mx-auto h-[calc(100vh-4rem)] py-4'>
      <div className='relative z-10 h-full'>
        <Card className='h-full border-0 bg-transparent shadow-none'>
          <CardContent className='h-full'>
            <Chat />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
