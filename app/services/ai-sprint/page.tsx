import type { Route } from 'next';
import Link from 'next/link';

import {
  Brain,
  CheckCircle2,
  Gauge,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
} from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';
import FOMOCard from '@/features/marketing/fomo-card';
import GuaranteeHeadline from '@/features/marketing/guarantee-headline';

export default function AISprintPage() {
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — Outcomes, not features */}
        <div className='relative mb-6 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  AI Feature Sprint
                </Badge>

                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  Ship{' '}
                  <span className='decoration-primary/50 underline underline-offset-4'>
                    one real AI feature
                  </span>{' '}
                  in 14 days — measured, safe, and usable.
                </h1>

                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  We pick <strong>one KPI that matter</strong> (fewer steps, faster answers, higher
                  self-serve), and we ship a production feature your users actually feel.
                </p>

                <GuaranteeHeadline />
              </div>
            </CardContent>
          </Card>
        </div>

        <FOMOCard variant='ai-sprint' />

        {/* Outcomes we target */}
        <section className='mb-10 grid gap-6 md:grid-cols-3'>
          {[
            {
              icon: Target,
              title: 'Reduce time-to-answer',
              desc: 'Cut handling time on a key flow (support, ops, docs) so people get what they need faster.',
            },
            {
              icon: Gauge,
              title: 'Increase self-serve',
              desc: 'Deflect tickets with clear, cited answers or draft better replies in one click.',
            },
            {
              icon: CheckCircle2,
              title: 'Remove manual steps',
              desc: 'Automate a painful task (summaries, extraction, classification) that slows the team.',
            },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <Card key={b.title} className='rounded-3xl p-6'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                    <Icon className='text-primary h-6 w-6' />
                  </div>
                  <h3 className='mb-1 text-xl font-semibold'>{b.title}</h3>
                  <p className='text-foreground/70'>{b.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* What you get (deliverables) */}
        <section className='mb-10 grid gap-6 md:grid-cols-2'>
          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <h2 className='mb-3 text-2xl font-bold'>What you get in 14 days</h2>
              <ul className='text-foreground/80 space-y-2'>
                <li>
                  • One shipped AI feature (RAG chat, agentic workflow, or smart assist) tied to a
                  KPI.
                </li>
                <li>
                  • Safety rails: access control, limits, fallbacks, and human-in-the-loop when
                  needed.
                </li>
                <li>• Usage dashboard & simple analytics to see adoption, latency and feedback.</li>
                <li>
                  • Clear docs + a 30-min recorded handover so your team can extend confidently.
                </li>
                <li>
                  • <strong>Bug Shield 30-day</strong>: critical fixes included post-launch.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <h2 className='mb-3 text-2xl font-bold'>What this is not</h2>
              <ul className='text-foreground/80 space-y-2'>
                <li>• Not "AI for AI's sake". We refuse features users won't feel.</li>
                <li>• Not a 3-month research project. It's a focused build that ships.</li>
                <li>• Not custom LLM training. We use proven building blocks to go fast.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Process */}
        <section className='mb-10'>
          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <div className='mb-6 flex items-center gap-3'>
                <Timer className='text-primary h-5 w-5' />
                <h2 className='text-2xl font-bold'>The 14-Day Plan</h2>
              </div>
              <div className='grid gap-6 md:grid-cols-3'>
                <div>
                  <h3 className='mb-1 font-semibold'>Days 1-2 · Scope</h3>
                  <p className='text-foreground/70'>
                    Pick the KPI, user flow and "definition of done". Confirm data access & success
                    threshold.
                  </p>
                </div>
                <div>
                  <h3 className='mb-1 font-semibold'>Days 3-10 · Build</h3>
                  <p className='text-foreground/70'>
                    Implement, demo mid-sprint, put guardrails in, and wire basic usage tracking.
                  </p>
                </div>
                <div>
                  <h3 className='mb-1 font-semibold'>Days 11-14 · Prove & Launch</h3>
                  <p className='text-foreground/70'>
                    Polish UX, add fallbacks, run checks, ship to production, and review early
                    metrics.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className='mt-6'>
              <Button asChild>
                <Link href={'/contact' as Route}>
                  <Rocket className='mr-2 h-4 w-4' />
                  Reserve a sprint slot
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Success metrics (client-language) */}
        <section className='mb-10'>
          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <h2 className='mb-4 text-2xl font-bold'>How we measure success</h2>
              <div className='grid gap-4 md:grid-cols-2'>
                <ul className='text-foreground/80 space-y-2'>
                  <li>
                    • <strong>Adoption</strong>: % of target users who used the feature this week.
                  </li>
                  <li>
                    • <strong>Faster flow</strong>: median time saved vs. baseline task.
                  </li>
                  <li>
                    • <strong>Quality</strong>: user "was this helpful?" score & flagged errors.
                  </li>
                </ul>
                <ul className='text-foreground/80 space-y-2'>
                  <li>
                    • <strong>Cost control</strong>: per-usage cost stays within agreed ceiling.
                  </li>
                  <li>
                    • <strong>Reliability</strong>: p95 response under target; no critical
                    incidents.
                  </li>
                  <li>
                    • <strong>Business impact</strong>: 1 simple metric (e.g., ticket deflection
                    rate).
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guarantee & Scarcity */}
        <section className='mb-10 grid gap-6 md:grid-cols-2'>
          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <div className='mb-3 flex items-center gap-2'>
                <ShieldCheck className='text-primary h-5 w-5' />
                <h2 className='text-2xl font-bold'>Simple guarantee</h2>
              </div>
              <p className='text-foreground/80'>
                If we miss the agreed KPI or deadline due to me, I'll keep working at no extra cost
                until we hit it. Clear, fair, and aligned.
              </p>
            </CardContent>
          </Card>

          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <div className='mb-3 flex items-center gap-2'>
                <Brain className='text-primary h-5 w-5' />
                <h2 className='text-2xl font-bold'>Who this is for</h2>
              </div>
              <ul className='text-foreground/80 space-y-2'>
                <li>• B2B SaaS teams with a clear flow to improve and a single decision-maker.</li>
                <li>• You can provide access to the data we need (or a sample export).</li>
                <li>• You're okay with a tight feedback loop and two short check-ins per week.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button asChild>
              <Link href='/services/audit'>Start with the 1 week AI Audit</Link>
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
