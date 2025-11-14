'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/core/components/ui/accordion';
import { cn } from '@/core/lib/utils';

export interface GlossaryItem {
  term: string;
  definition: string;
}

interface GlossaryAccordionProps {
  items: GlossaryItem[];
  className?: string;
  defaultValue?: string;
}

export default function GlossaryAccordion({
  items,
  className,
  defaultValue,
}: GlossaryAccordionProps) {
  return (
    <Accordion
      type='single'
      collapsible
      className={cn('w-full space-y-4 sm:space-y-6', className)}
      defaultValue={defaultValue}
    >
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx}`}
          className='bg-card/40 rounded-3xl border-0 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 sm:p-8'
        >
          <AccordionTrigger className='cursor-pointer text-base font-semibold hover:no-underline sm:text-lg'>
            {item.term}
          </AccordionTrigger>
          <AccordionContent className='text-foreground/70 pt-2 text-sm leading-relaxed sm:text-base'>
            {item.definition}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
