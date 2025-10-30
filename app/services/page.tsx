import Link from 'next/link';

import { Brain, FileSearch, Hammer, ShieldCheck, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';

export default function ServicesPage() {
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
                  Services
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  Build fast. Ship real. Measure truth.
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  Four product-facing offers engineered for speed and credibility: quick audits to
                  align scope, a<strong> production-ready MVP</strong>, a{' '}
                  <strong>14-day AI feature sprint</strong>, and an ongoing{' '}
                  <strong>Care & Hosting</strong> plan that keeps the lights on and costs
                  predictable.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className='mb-12 grid gap-6 md:grid-cols-2'>
          {/* Audit */}
          <Card className='rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <FileSearch className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-2 text-2xl font-bold'>Audit</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                Two quick ways to de-risk delivery: the <em>MVP Plan</em> (scope, risks, pricing)
                and the
                <em> AI Readiness Audit</em> (data map, use-cases, safety, ROI guess).
              </p>
            </CardContent>
            <CardFooter className='flex gap-3'>
              <Button asChild>
                <Link href='/services/audit'>Explore audits</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* MVP Foundry */}
          <Card className='rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Hammer className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-2 text-2xl font-bold'>MVP Foundry</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                From zero to a usable product in <strong>4-6 weeks</strong>: auth, dashboard, DB,
                basic analytics, docs — 100% production-grade and extendable by your team.
              </p>
            </CardContent>
            <CardFooter className='flex gap-3'>
              <Button asChild>
                <Link href='/services/mvp-foundry'>See packages</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* AI Sprint */}
          <Card className='rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Brain className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-2 text-2xl font-bold'>AI Feature Sprint</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                Ship <em>one real AI feature</em> your users actually use in{' '}
                <strong>14 days</strong> — RAG chat, an agentic workflow, or summarization
                integrated into your UX, with guardrails & evals.
              </p>
            </CardContent>
            <CardFooter className='flex gap-3'>
              <Button asChild>
                <Link href='/services/ai-sprint'>Run a sprint</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Care & Hosting */}
          <Card className='rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <ShieldCheck className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-2 text-2xl font-bold'>Care & Hosting Plan</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                Keep production healthy: uptime, error alerts, dependency updates, token-cost caps,
                small fixes and
                <em> managed hosting</em> so you sleep at night.
              </p>
            </CardContent>
            <CardFooter className='flex gap-3'>
              <Button asChild>
                <Link href='/services/care-and-hosting-plan'>View plans</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
