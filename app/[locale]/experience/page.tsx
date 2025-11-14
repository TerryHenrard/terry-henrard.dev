'use client';

import { useTranslations } from 'next-intl';

import { Badge } from '@/core/components/ui/badge';
import { Card, CardContent } from '@/core/components/ui/card';
import { cn } from '@/core/lib/utils';

export default function ExperiencePage() {
  const t = useTranslations('experience.timeline');

  const timelineItems = [0, 1, 2, 3, 4].map((idx) => ({
    year: t(`${idx}.year` as any),
    title: t(`${idx}.title` as any),
    company: t(`${idx}.company` as any),
    description: t(`${idx}.description` as any),
    tags: Object.keys((t.raw(`${idx}.tags` as any) as Record<string, string>) || {}).map((key) =>
      t(`${idx}.tags.${key}` as any)
    ),
  }));

  return (
    <main className='relative overflow-hidden'>
      <div className='relative z-10 container mx-auto min-h-[calc(100vh-4rem)] max-w-6xl px-4 py-10 sm:px-6 lg:px-8'>
        <div className='relative py-8 sm:py-10 lg:py-12'>
          {/* Vertical timeline line */}
          <div
            className='bg-border absolute inset-y-0 left-4 w-px lg:left-1/2 lg:-translate-x-1/2'
            aria-hidden='true'
          />

          {/* Timeline items alternating left and right */}
          <div className='space-y-8 sm:space-y-10 lg:space-y-12'>
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className='group relative pl-8 sm:pl-12 lg:pl-0'>
                  {/* Timeline dot */}
                  <div
                    className='border-background bg-accent-foreground shadow-accent-foreground/40 absolute top-5 left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border shadow-lg transition-transform group-hover:scale-110 lg:top-6 lg:left-1/2 lg:h-4 lg:w-4'
                    aria-hidden='true'
                  />

                  {/* Card positioned left or right */}
                  <div
                    className={cn(
                      'relative ml-4 w-full max-w-xl sm:ml-6 lg:ml-0 lg:w-[calc(50%-2rem)] lg:max-w-none',
                      isLeft ? 'lg:mr-auto' : 'lg:ml-auto'
                    )}
                  >
                    <Card className='transition-all hover:-translate-y-1 hover:shadow-xl'>
                      <CardContent className='space-y-3 px-4'>
                        <div className='flex flex-wrap items-start justify-between gap-2'>
                          <div className='flex-1 space-y-1'>
                            <h4 className='text-foreground text-base font-bold'>{item.title}</h4>
                            <p className='text-accent-foreground text-xs font-medium'>
                              {item.company}
                            </p>
                          </div>
                          <Badge>{item.year}</Badge>
                        </div>

                        <p className='text-muted-foreground/90 text-sm leading-relaxed'>
                          {item.description}
                        </p>

                        <div className='flex flex-wrap gap-1.5 pt-1'>
                          {item.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant={'secondary'}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
