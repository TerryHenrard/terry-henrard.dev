'use client';

import { useTranslations } from 'next-intl';

import { Badge } from '@/core/components/ui/badge';
import { Card, CardContent } from '@/core/components/ui/card';

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
      <div className='relative z-10 container mx-auto min-h-[calc(100vh-4rem)] border-0 bg-transparent p-8 py-4 shadow-none'>
        <div className='relative py-8'>
          {/* Centered vertical line */}
          <div className='bg-accent-foreground absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2' />

          {/* Timeline items alternating left and right */}
          <div className='space-y-12'>
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className='group relative'>
                  {/* Center dot */}
                  <div className='bg-accent-foreground shadow-accent-foreground/50 absolute top-6 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full shadow-lg transition-transform group-hover:scale-125' />

                  {/* Card positioned left or right */}
                  <div className={`relative w-[calc(50%-2rem)] ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
                    <Card className='transition-all hover:-translate-y-1 hover:shadow-xl'>
                      <CardContent className='space-y-3'>
                        <div className='flex items-start justify-between gap-2'>
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

                    {/* Connecting line from card to center */}
                    <div
                      className={`bg-accent-foreground absolute top-8 h-px w-8 ${
                        isLeft ? 'left-full' : 'right-full'
                      }`}
                    />
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
