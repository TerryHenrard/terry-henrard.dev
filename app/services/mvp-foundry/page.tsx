import Link from 'next/link';

import {
  BarChart3,
  CheckCircle2,
  Database,
  Hammer,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';

export default function MVPFoundryPage() {
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  MVP Foundry
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  From zero to a usable MVP in 4-6 weeks
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  Auth, dashboard, database, basic analytics and docs — built with{' '}
                  <strong>Next.js + TypeScript</strong>, wired to <strong>Postgres</strong> and
                  deployed on <strong>Vercel</strong>. No drama, no surprises.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Outcomes */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Rocket className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Shipable & demo-ready</h3>
              <p className='text-foreground/70 leading-relaxed'>
                Launch to real users and pitch investors with a crisp 5-min click-through.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <BarChart3 className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Measured quality</h3>
              <p className='text-foreground/70 leading-relaxed'>
                p95 ≤ 2s, uptime ≥ 99.5%, 0 critical incidents in first 2 weeks.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <ShieldCheck className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Guarantees</h3>
              <p className='text-foreground/70 leading-relaxed'>
                Missed metric or late delivery? I keep working for free until it's met.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What you get */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Hammer className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Core foundations</h3>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Auth (email/password, Google, Apple, whatever + roles)</li>
                <li>Dashboard UI</li>
                <li>API routes with validation</li>
                <li>Perf & accessibility checks</li>
              </ul>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Database className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Data & analytics</h3>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Postgres (Neon) + Drizzle ORM</li>
                <li>Basic analytics (PostHog)</li>
                <li>Seed data & fixtures</li>
                <li>Transactional email (Resend)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <CheckCircle2 className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Docs & handover</h3>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Clickable architecture diagram</li>
                <li>README + runbook</li>
                <li>Recorded 1-hour transfer call</li>
                <li>Bug shield (30-90 days by tier)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Packages & Pricing */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>MVP Essentials</h3>
              <p className='text-foreground/70 mb-1 text-sm'>4 weeks • €8,900 (excl. VAT)</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Auth + dashboard + DB</li>
                <li>Docs, seed data, transfer call</li>
                <li>Bug shield 30 days</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href='/contact'>Start with Essentials</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>MVP Growth</h3>
              <p className='text-foreground/70 mb-1 text-sm'>5 weeks • €16,900 (excl. VAT)</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Everything in Essentials</li>
                <li>Basic analytics + transactional email</li>
                <li>Perf & a11y checks • Bug shield 60 days</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant='secondary' className='w-full'>
                <Link href='/contact'>Choose Growth</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>MVP Venture</h3>
              <p className='text-foreground/70 mb-1 text-sm'>6 weeks • €18,900 (excl. VAT)</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Everything in Growth</li>
                <li>Feature flags • 5-min investor demo script</li>
                <li>Roadmap workshop • Bug shield 90 days</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant='outline' className='w-full'>
                <Link href='/contact'>Pitch with Venture</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <p className='text-foreground/60 text-center text-sm'>
          Prices exclude VAT and may adjust with scope. Fixed-price quotes come with the MVP Plan.
        </p>
      </div>
    </main>
  );
}
