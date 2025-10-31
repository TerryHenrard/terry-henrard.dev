'use client';

import Link from 'next/link';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { firstToUpper } from '@/core/lib/utils';

interface FOMOCardProps {
  variant: 'mvp-foundry' | 'ai-sprint';
}

export default function FOMOCard({ variant }: FOMOCardProps) {
  return (
    <div className='mb-10 flex flex-col items-center justify-between gap-3 rounded-2xl border p-4 md:flex-row md:p-5'>
      <div className='flex items-center gap-2'>
        <Badge className='rounded-full' variant='destructive'>
          Limited spots
        </Badge>
        <span className='text-foreground/80 text-sm md:text-base'>
          I take{' '}
          <strong>
            {variant === 'mvp-foundry'
              ? 'max 2 MVP builds/month.'
              : 'max 2 AI Sprint builds/month.'}
          </strong>{' '}
          {firstToUpper(new Intl.DateTimeFormat('fr-BE', { month: 'long' }).format(new Date()))}{' '}
          intake now open.
        </span>
      </div>
      <div className='flex items-center gap-2'>
        <Button asChild>
          <Link
            href={`/?prompt=${encodeURIComponent(variant === 'mvp-foundry' ? 'I want to book a call to discuss your MVP services.' : 'I want to book a call to discuss your AI Sprint services.')}`}
          >
            Book a quick call
          </Link>
        </Button>
        <Button asChild variant='outline'>
          <Link href='/services/audit'>Start with the 2-3 day MVP Plan</Link>
        </Button>
      </div>
    </div>
  );
}
