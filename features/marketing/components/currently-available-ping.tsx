import { Badge, ShadcnBadgeProps } from '@/core/components/ui/badge';
import { cn } from '@/core/lib/utils';

export default function CurrentlyAvailablePing({
  text,
  ...props
}: ShadcnBadgeProps & { text: string }) {
  return (
    <Badge className={cn('gap-1.5', props.className)} {...props}>
      <span className='relative flex size-2'>
        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
        <span className='relative inline-flex size-2 rounded-full bg-green-500'></span>
      </span>
      <span>{text}</span>
    </Badge>
  );
}
