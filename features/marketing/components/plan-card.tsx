'use client';

import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';
import { cn } from '@/core/lib/utils';
import { useFloatingChatStore } from '@/features/ai/stores/floating-chat.store';

interface PlanCardProps {
  title: string;
  goal: string;
  includedLabel: string;
  items: string[];
  outcomeLabel: string;
  outcomeText: string;
  ctaText: string;
  ctaPrompt: string;
  highlighted?: boolean;
  className?: string;
}

export function PlanCard({
  title,
  goal,
  includedLabel,
  items,
  outcomeLabel,
  outcomeText,
  ctaText,
  ctaPrompt,
  highlighted = false,
  className,
}: PlanCardProps) {
  const setIsOpen = useFloatingChatStore((state) => state.setIsOpen);
  const setPrompt = useFloatingChatStore((state) => state.setPrompt);

  return (
    <Card
      className={cn(
        'flex flex-col justify-between rounded-3xl p-6 sm:p-8',
        highlighted && 'ring-primary/20 ring-2',
        className
      )}
    >
      <CardContent>
        <h3 className='mb-2 text-lg font-bold sm:text-xl'>{title}</h3>
        <p className='text-foreground/70 mb-4 text-sm'>{goal}</p>

        <div className='mb-4'>
          <p className='text-foreground/60 mb-2 text-xs font-semibold tracking-wide uppercase'>
            {includedLabel}
          </p>
          <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm'>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className='bg-primary/5 mb-4 rounded-xl p-4'>
          <p className='text-foreground/60 mb-1 text-xs font-semibold tracking-wide uppercase'>
            {outcomeLabel}
          </p>
          <p className='text-foreground/80 text-sm'>{outcomeText}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className='w-full'
          onClick={() => {
            setPrompt(ctaPrompt);
            setIsOpen(true);
          }}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}
