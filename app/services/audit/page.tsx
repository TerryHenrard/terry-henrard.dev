import Link from 'next/link';

import {
  CalendarClock,
  ClipboardCheck,
  FileSearch,
  Mail,
  Phone,
  Shield,
  Sparkles,
} from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';

export default function AuditServicesPage() {
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — Outcomes, not estimates */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <FileSearch className='h-3 w-3' />
                  Audits
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  Make your next sprint a winning bet
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  Two short, research-led engagements that remove guesswork and de-risk your
                  roadmap. You leave with decision-ready assets you can use — even if we don't work
                  together.
                </p>
                <p className='text-foreground/60 mt-3'>
                  <strong>
                    <em>Guarantee:</em>
                  </strong>{' '}
                  if we miss the agreed success metric or deadline because of me, I keep working at{' '}
                  <strong className='underline'>no extra cost</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Offers */}
        <div className='mb-12 grid gap-6 md:grid-cols-2'>
          {/* MVP Readiness Plan */}
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <ClipboardCheck className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-1 text-2xl font-bold'>MVP Readiness Plan</h2>
              <p className='text-foreground/70 mb-4 text-sm'>2-3 days</p>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                Align stakeholders, lock the scope, and know exactly what "good" looks like before
                writing a line of code.
              </p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Outcome map: users, jobs-to-be-done & success metrics</li>
                <li>
                  Scope line: <span className='font-medium'>Must / Should / Later</span>{' '}
                  (zero-surprise backlog)
                </li>
                <li>Architecture & decision record (so choices won't get re-litigated)</li>
                <li>Risk & dependency grid with owner + mitigation</li>
                <li>Launch criteria & demo script for first 10 users</li>
              </ul>
            </CardContent>
            <CardFooter className='gap-3'>
              <Button asChild>
                <Link href='/services/mvp-foundry'>Move to MVP</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link href={`/?prompt=${encodeURIComponent('Book a quick call')}`}>
                  <Phone className='mr-1' />
                  Book a quick call
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* AI Readiness Audit */}
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Sparkles className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-1 text-2xl font-bold'>AI Readiness Audit</h2>
              <p className='text-foreground/70 mb-4 text-sm'>~1 week</p>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                Identify one AI feature worth shipping, prove feasibility, and set guardrails so
                it's safe, useful, and cost-controlled in production.
              </p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Data map & access path (what's usable today vs. later)</li>
                <li>Use-case shortlist with effort/impact & "one-feature" pick</li>
                <li>Retrieval/model options with safety rules & fallbacks</li>
                <li>Success metric + eval plan (what we'll measure to call it a win)</li>
                <li>2-hour developer workshop to transfer patterns</li>
              </ul>
            </CardContent>
            <CardFooter className='gap-3'>
              <Button asChild>
                <Link href='/services/ai-sprint'>Run an AI Sprint</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link href='mailto:terry.henrard@outlook.com'>
                  <Mail className='mr-1' />
                  Email me
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* How it works — fast, tangible, risk-first */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <CalendarClock className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Fast & focused</h3>
              <p className='text-foreground/70 leading-relaxed'>
                Short timeboxes, clear agenda, concrete deliverables. Cut 2-4 weeks of
                back-and-forth.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <FileSearch className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Use-anywhere assets</h3>
              <p className='text-foreground/70 leading-relaxed'>
                Docs you can hand to your team, attach to investor decks, or turn into tickets
                tomorrow.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Shield className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Risk first</h3>
              <p className='text-foreground/70 leading-relaxed'>
                Surface blockers early — data access, compliance, staffing — so delivery stays
                predictable.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Guarantees & Availability */}
        <div className='mb-12 grid gap-6 md:grid-cols-2'>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Shield className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Risk-reversal</h3>
              <p className='text-foreground/70 leading-relaxed'>
                If the agreed audit deliverables aren't immediately actionable, I keep working at no
                extra cost until they are. Clear outcomes over fine print.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <CalendarClock className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Limited slots</h3>
              <p className='text-foreground/70 leading-relaxed'>
                I run a small number of audits per week to keep quality high. If this week is full,
                we'll schedule the next available slot.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Next steps — permission-based CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button asChild>
              <Link href='/services/mvp-foundry'>Looking for an mvp?</Link>
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
