import Link from 'next/link';

import { BarChart3, CheckCircle2, Hammer, Rocket, ShieldCheck, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent } from '@/core/components/ui/card';
import FOMOCard from '@/features/marketing/fomo-card';
import GuaranteeHeadline from '@/features/marketing/guarantee-headline';

export default function MVPFoundryPage() {
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — Outcomes, not tech */}
        <div className='relative mb-6 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  MVP Foundry
                </Badge>
                <h1 className='mb-3 text-4xl font-bold text-balance md:text-6xl'>
                  Launch a real MVP in 4-6 weeks
                </h1>
                <p className='text-foreground/70 text-lg md:text-xl'>
                  Built to win first users and investor confidence. Clear scope, weekly proof, and a
                  clean handover so your team can run without me.
                </p>
                <GuaranteeHeadline />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scarcity strip — Cohort cap / FOMO */}
        <FOMOCard variant='mvp-foundry' />

        {/* Outcomes (short & punchy) */}
        <div className='mb-10 grid gap-6 md:grid-cols-3'>
          <Card className='rounded-3xl p-6'>
            <CardContent className='p-0'>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Rocket className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-1 text-xl font-semibold'>A demo that converts</h3>
              <p className='text-foreground/70'>
                A crisp 5-minute walk-through that shows value fast — for sales and investor calls.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent className='p-0'>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <BarChart3 className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-1 text-xl font-semibold'>Quality you can feel</h3>
              <p className='text-foreground/70'>
                Fast, stable, usable. No show-stopping bugs in the first weeks in the wild.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent className='p-0'>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <ShieldCheck className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-1 text-xl font-semibold'>Risk-reversal</h3>
              <p className='text-foreground/70'>
                Miss the agreed metric or deadline? I keep working free until we hit it.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The MVP Plan — one card, no price */}
        <div className='mb-12'>
          <Card className='rounded-3xl p-6 md:p-8'>
            <CardContent className='p-0'>
              <div className='mb-4 flex items-center justify-between'>
                <h3 className='text-2xl font-semibold'>The MVP Plan</h3>
                <Badge variant='secondary'>4-6 weeks</Badge>
              </div>
              <p className='text-foreground/70 mb-6'>
                Everything you need to ship a convincing MVP, onboard first users, and earn your
                next "yes".
              </p>

              <div className='grid gap-6 md:grid-cols-3'>
                <div>
                  <h4 className='mb-2 font-semibold'>What ships day one</h4>
                  <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                    <li>Sign-up/sign-in and a #1 user journey end-to-end</li>
                    <li>Clear home that guides the next step</li>
                    <li>Fast on mobile and accessible</li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-2 font-semibold'>Momentum built-in</h4>
                  <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                    <li>See where people click and get stuck</li>
                    <li>Welcome & password emails that land</li>
                    <li>Edit key texts/images without a dev</li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-2 font-semibold'>Handover & safety net</h4>
                  <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                    <li>One-page product map + simple runbook</li>
                    <li>Recorded 1-hour handover session</li>
                    <li>Bug-fix safety net: 30 days (extendable with Care Plan)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How we work — short & clear */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          <Card className='rounded-3xl p-6'>
            <CardContent className='p-0'>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Hammer className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-1 text-xl font-semibold'>Plan → Build → Launch</h3>
              <p className='text-foreground/70'>
                2-3 days to lock outcomes & scope → 3-4 weeks build → 3-5 days polish, test & ship.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent className='p-0'>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <BarChart3 className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-1 text-xl font-semibold'>Zero-surprise updates</h3>
              <p className='text-foreground/70'>
                Weekly 5-minute video + simple checklist + "what's next". You always know the score.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent className='p-0'>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <CheckCircle2 className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-1 text-xl font-semibold'>Definition of Done</h3>
              <p className='text-foreground/70'>
                First users invited, demo rehearsed, and a simple rollback plan in place.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button asChild>
              <Link href='/services/audit'>Start with the 2-3 day MVP Plan</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href={`/?prompt=${encodeURIComponent('Book a quick call')}`}>
                Book a quick call
              </Link>
            </Button>
          </div>
          <p className='text-foreground/60 text-sm'>
            After launch, keep momentum with{' '}
            <Link className='underline underline-offset-4' href='/services/care-and-hosting-plan'>
              the Care &amp; Hosting Plan
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
