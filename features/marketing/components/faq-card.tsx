import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/core/components/ui/accordion';
import { Card, CardContent } from '@/core/components/ui/card';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCardProps {
  title: string;
  items: FAQItem[];
}

export default function FAQCard({ title, items }: FAQCardProps) {
  return (
    <div className='mb-10 sm:mb-12 lg:mb-16'>
      <h2 className='mb-6 text-2xl font-bold sm:text-3xl lg:text-4xl'>{title}</h2>
      <Card className='rounded-3xl p-6 sm:p-8'>
        <CardContent className='p-0'>
          <Accordion type='single' collapsible className='w-full'>
            {items.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className='cursor-pointer text-left text-sm sm:text-base'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className='text-foreground/70 text-sm leading-relaxed sm:text-base'>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
