import Link from 'next/link';

import {
  Calendar,
  Clock,
  FileText,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';

export default function ContactPage() {
  return (
    <main className='relative container mx-auto min-h-screen overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='rounded-2xl'>
              <div className='mb-4 inline-flex items-center gap-2'>
                <Badge variant='default' className='rounded-full'>
                  <Sparkles className='h-3 w-3' />
                  <span className='ml-1'>Let's connect</span>
                </Badge>
                <Badge variant='secondary' className='ml-2 rounded-full'>
                  <Languages className='h-3 w-3' />
                  <span className='ml-1'>FR / EN</span>
                </Badge>
              </div>

              <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                Email, Call, or Book a Slot
              </h1>

              <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                I reply within 24h on weekdays. Prefer email? Great. Urgent? Call me directly. No
                fluff—just next steps.
              </p>

              <div className='mt-6 flex flex-wrap gap-3'>
                <Button asChild size='lg' className='inline-flex items-center gap-2'>
                  <a
                    href='mailto:terry.henrard@outlook.com?subject=Hello%20Terry'
                    aria-label='Email Terry Henrard'
                  >
                    <Mail className='h-4 w-4' />
                    <span>Email Terry</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant='secondary'
                  size='lg'
                  className='inline-flex items-center gap-2'
                >
                  <a href='tel:+32498146651' aria-label='Call Terry Henrard'>
                    <Phone className='h-4 w-4' />
                    <span>+32 498 14 66 51</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='inline-flex items-center gap-2'
                >
                  <Link href={`/?prompt=${encodeURIComponent('Can we book a 15-min call?')}`}>
                    <Calendar className='h-4 w-4' />
                    <span>Book a 15-min cal</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className='mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Email */}
          <Card className='justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Mail className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>Email</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                Best for context, links, and quick questions. I'll reply with next steps or a short
                Loom.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href='mailto:terry.henrard@outlook.com?subject=Hello%20Terry'>
                  terry.henrard@outlook.com
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Call / Text */}
          <Card className='justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Phone className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>Call</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                Quick chat to see if I can help. If I'm in a rush, I'll call back ASAP.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant='secondary'>
                <a href='tel:+32498146651' className='w-full'>
                  +32 498 14 66 51
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Address */}
          <Card className='rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <MapPin className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>Address</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                42 Rue Léon Bernus, Charleroi
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Office Hours & Response Policy */}
        <div className='mb-12 grid gap-6 md:grid-cols-2'>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Clock className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>Office Hours (CET)</h2>
              <p className='text-foreground/70 leading-relaxed'>
                Mon-Fri, 09:00-18:00. Replies within 24h on weekdays. For production issues (clients
                on a Care Plan), call the number above.
              </p>
            </CardContent>
          </Card>

          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <ShieldCheck className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>Privacy & Respect</h2>
              <p className='text-foreground/70 leading-relaxed'>
                Your details stay between us. No spam, no resale. Please—no cold agency pitches.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Optional Brief */}
        <Card className='mb-12 rounded-3xl p-8'>
          <CardContent>
            <div className='mb-4 flex items-center gap-3'>
              <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <FileText className='text-primary h-6 w-6' />
              </div>
              <h2 className='text-3xl font-bold'>Optional: 3-Minute Brief</h2>
            </div>
            <p className='text-foreground/70 mb-6 leading-relaxed'>
              Share a bit of context to speed things up:
            </p>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {[
                'Your stage & team size',
                'Outcome you want (1 KPI)',
                'Key data sources (read-only)',
                'Constraints or guardrails',
              ].map((item, i) => (
                <Card key={i} className='rounded-2xl p-4'>
                  <CardContent>
                    <p className='text-foreground/70 text-sm'>{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className='mt-6'>
              <Button asChild variant='secondary'>
                <Link href='/brief'>Fill the short brief</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Direct Email */}
        <Card className='rounded-3xl p-8 text-center'>
          <CardContent>
            <h2 className='mb-4 text-3xl font-bold'>Prefer Email?</h2>
            <p className='text-foreground/70 mx-auto mb-6 max-w-2xl'>
              Send context, links, or docs. I'll reply with next steps or a quick Loom.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-3'>
              <Button asChild size='lg' className='inline-flex items-center gap-2'>
                <a href='mailto:terry.henrard@outlook.com?subject=Hello%20Terry'>
                  <Mail className='h-4 w-4' />
                  <span>terry.henrard@outlook.com</span>
                </a>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='inline-flex items-center gap-2'
              >
                <a href='tel:+32498146651'>
                  <Phone className='h-4 w-4' />
                  <span>Call Terry</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
