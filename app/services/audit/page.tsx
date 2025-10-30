import Link from 'next/link';

import {
  CalendarClock,
  ClipboardCheck,
  Database,
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
        {/* Hero */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  Audits
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  Decide smart before you code
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  Two short, concrete engagements to align scope, risks, and ROI. You get artifacts
                  you can use — even if we don't proceed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Offers */}
        <div className='mb-12 grid gap-6 md:grid-cols-2'>
          {/* MVP Plan */}
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <ClipboardCheck className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-1 text-2xl font-bold'>MVP Plan</h2>
              <p className='text-foreground/70 mb-4 text-sm'>2-3 days</p>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                Everything you need to kick off a realistic MVP with <em>zero surprise</em>.
              </p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>User stories & success metrics</li>
                <li>Scope line (Must / Should / Later)</li>
                <li>High-level architecture diagram</li>
                <li>Risks & assumptions map</li>
                <li>Timeline & fixed-price</li>
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
                <Database className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-1 text-2xl font-bold'>AI Readiness Audit</h2>
              <p className='text-foreground/70 mb-4 text-sm'>1 week</p>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                A pragmatic look at your data, guardrails and ROI to pick <em>one AI feature</em>{' '}
                worth shipping.
              </p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Data map & access path</li>
                <li>Use-case shortlist + feasibility</li>
                <li>Model & retrieval options with safety rules</li>
                <li>ROI guess & cost control plan</li>
                <li>2h developer workshop</li>
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

        {/* How it works */}
        <div className='grid gap-6 md:grid-cols-3'>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <CalendarClock className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Fast & focused</h3>
              <p className='text-foreground/70 leading-relaxed'>
                Short timeboxes, concrete deliverables, no fluff.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <FileSearch className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Use-anywhere artifacts</h3>
              <p className='text-foreground/70 leading-relaxed'>
                Docs you can attach to investor decks or share with your team.
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
                Surface blockers early: data, infra, compliance, staffing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
