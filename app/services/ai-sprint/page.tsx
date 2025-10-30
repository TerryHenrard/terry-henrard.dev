import Link from 'next/link';

import {
  BarChart3,
  Brain,
  CalendarClock,
  CheckCircle2,
  Layers,
  Shield,
  Sparkles,
} from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';

export default function AISprintPage() {
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
                  AI Feature Sprint
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  One real AI feature in 14 days — end to end
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  RAG chat, agentic workflow, or summarization — instrumented, safe, and connected
                  to your data. If we miss the KPI we agreed, I keep working for free.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Capabilities */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Brain className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Feature menu (pick one)</h3>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>RAG chat over docs/DB</li>
                <li>Agent (lead‑qual, ticket triage, meeting notes → tasks)</li>
                <li>Summarize/extract long content</li>
                <li>Inline UX helpers (rewrite, classify, autocomplete)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Shield className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Guardrails & evals</h3>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Safe‑completion rules & rate limits</li>
                <li>RBAC + feature flags</li>
                <li>Evals & usage dashboard</li>
                <li>Fallback strategy & cost caps</li>
              </ul>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <BarChart3 className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>KPI first</h3>
              <p className='text-foreground/70 leading-relaxed'>
                One success metric. We instrument it and ship to hit it.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Process */}
        <div className='mb-12 grid gap-6 md:grid-cols-4'>
          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <CalendarClock className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Kickoff & scope</h4>
              <p className='text-foreground/70 text-sm'>½ day — KPI, data access, UX sketch.</p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <Layers className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Infra & pipeline</h4>
              <p className='text-foreground/70 text-sm'>Vector store, keys, eval harness.</p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <CheckCircle2 className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Build & mid‑demo</h4>
              <p className='text-foreground/70 text-sm'>Daily commits • mid‑sprint demo.</p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <BarChart3 className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Launch & learn</h4>
              <p className='text-foreground/70 text-sm'>Deploy • track usage • tighten.</p>
            </CardContent>
          </Card>
        </div>

        {/* Packages */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>AI Sprint Essential</h3>
              <p className='text-foreground/70 mb-1 text-sm'>1 week • €1,900 (excl. VAT)</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>One working AI feature on test data</li>
                <li>Bug shield 30 days</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href='/contact'>Start Essential</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>AI Sprint Growth</h3>
              <p className='text-foreground/70 mb-1 text-sm'>2 weeks • €7,900 (excl. VAT)</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Connect to your data • evals</li>
                <li>Fallback plan • usage dashboard</li>
                <li>Bug shield 60 days</li>
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
              <h3 className='mb-2 text-xl font-bold'>AI Sprint Venture</h3>
              <p className='text-foreground/70 mb-1 text-sm'>3 weeks • €9,900 (excl. VAT)</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Hybrid retrieval • reranking</li>
                <li>Hardening • cost optimization</li>
                <li>Launch guide • Bug shield 90 days</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant='outline' className='w-full'>
                <Link href='/contact'>Go Venture</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <p className='text-foreground/60 text-center text-sm'>
          Prices exclude VAT and assume one primary stakeholder and data access provided.
        </p>
      </div>
    </main>
  );
}
