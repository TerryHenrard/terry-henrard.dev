import Image from 'next/image';
import Link from 'next/link';

import { BarChart3, Rocket, Server, Settings, ShieldCheck } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';

export default function CareAndHostingPage() {
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — Outcomes first */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <div className='mb-4 flex items-center gap-2'>
                  <Badge className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                    <ShieldCheck className='h-3 w-3' />
                    Care & Hosting
                  </Badge>
                  <Badge variant='secondary' className='rounded-full px-3 py-1 text-xs'>
                    We cap active clients at 8 — availability is limited
                  </Badge>
                </div>

                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  Sleep-easy production. Fixed cost. Zero surprises.
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  Keep your product <strong>online, fast, and trustworthy</strong>. We take
                  ownership of incidents, updates, and small improvements so your team can ship. You
                  get <strong>clear SLAs, fewer fires,</strong> and board-ready reporting.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust row — Backed by AWS & Azure */}
        <div className='bg-background/60 mb-6 inline-flex items-center gap-4 rounded-2xl border px-4 py-2 backdrop-blur'>
          <span className='text-foreground/70 text-xs font-medium'>
            All my services are backed by <span className='font-semibold'>AWS (Amazon)</span> &{' '}
            <span className='font-semibold'>Azure (Microsoft)</span>
          </span>
          <span className='bg-foreground/10 h-4 w-px' />
          <div className='flex items-center gap-3'>
            <Image
              src='/aws.svg'
              alt='AWS (Amazon)'
              className='h-5 w-auto opacity-80 transition-opacity hover:opacity-100'
              height={50}
              width={50}
            />
            <Image
              src='/azure.svg'
              alt='Azure (Microsoft)'
              className='h-5 w-auto opacity-80 transition-opacity hover:opacity-100'
              height={50}
              width={50}
            />
          </div>
        </div>

        {/* Outcome pillars (no tech jargon) */}
        <div className='mb-12 grid gap-6 md:grid-cols-4'>
          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <Server className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Always-on</h4>
              <p className='text-foreground/70 text-sm'>
                Proactive checks + real people on call → <strong>higher uptime</strong>, less
                scrambling.
              </p>
            </CardContent>
          </Card>

          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <Rocket className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Faster product</h4>
              <p className='text-foreground/70 text-sm'>
                Performance tune-ups and quick wins that <strong>cut load times</strong> and bounce.
              </p>
            </CardContent>
          </Card>

          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <Settings className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Fewer fires</h4>
              <p className='text-foreground/70 text-sm'>
                Updates, security, and hygiene handled → <strong>less breakage</strong> and rework.
              </p>
            </CardContent>
          </Card>

          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <BarChart3 className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Clarity for stakeholders</h4>
              <p className='text-foreground/70 text-sm'>
                Monthly report: analytics, uptime %, errors, speed, and progress —{' '}
                <strong>no guessing</strong>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Plans — outcome copy + simple SLAs */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          {/* Lite */}
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>Lite — "Lights On"</h3>
              <p className='text-foreground/70 mb-3 text-sm'>
                Best for: solo founders keeping things stable.
              </p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm'>
                <li>
                  Outcome: <strong>Sleep easier</strong>—know immediately when something's wrong.
                </li>
                <li>24/7 monitoring with alert routing to our team.</li>
                <li>
                  Automated controls: <strong>daily database backups</strong>.
                </li>
                <li>
                  Monthly PDF: <strong>uptime %</strong>, <strong>errors per page</strong>, and{' '}
                  <strong>top AI spend drivers</strong>.
                </li>
                <li>
                  Bug fixes: <strong>unlimited</strong> (within scope).
                </li>
                <li>
                  <strong>1 dev day / month</strong> for small fixes & improvements.
                </li>
                <li>
                  Response: within <strong>2 business days</strong> (CET).
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href='/contact'>Check availability</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Pro */}
          <Card className='ring-primary/20 flex flex-col justify-between rounded-3xl p-8 ring-1'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>Pro — "Production Care"</h3>
              <p className='text-foreground/70 mb-3 text-sm'>
                Best for: product teams running live apps.
              </p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm'>
                <li>
                  Outcome: <strong>Ship faster</strong> with less risk.
                </li>
                <li>Everything in Lite.</li>
                <li>
                  <strong>3 dev days / month</strong> for fixes or small features.
                </li>
                <li>AI cost control & alert caps reviewed monthly.</li>
                <li>
                  Response: within <strong>24 business hours</strong> (CET).
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href='/contact'>Reserve a Pro slot</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Venture */}
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>Venture — "Ops & Credibility"</h3>
              <p className='text-foreground/70 mb-3 text-sm'>
                Best for: SaaS teams aiming for investors & boards.
              </p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm'>
                <li>
                  Outcome: <strong>Investor-ready</strong> reliability and speed.
                </li>
                <li>Everything in Pro.</li>
                <li>
                  <strong>5 dev days / month</strong> (features + improvements).
                </li>
                <li>Strengthened AI spend monitoring and monthly executive-style reporting.</li>
                <li>
                  Response: within <strong>2 hours</strong> (business hours, CET).
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href='/contact'>Apply for Venture</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Risk reversal / Guarantees */}
        <div className='mb-10 rounded-3xl border p-6'>
          <div className='mb-3 flex items-center gap-2'>
            <ShieldCheck className='text-primary h-5 w-5' />
            <h4 className='font-semibold'>Simple, strong guarantees</h4>
          </div>
          <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm'>
            <li>
              <strong>Uptime/Response Promise:</strong> If we miss a written SLA (uptime or
              response), your <strong>next month is free</strong> and we include a corrective action
              plan.
            </li>
            <li>
              <strong>Bug Shield:</strong> We fix critical bugs discovered during your plan window
              at no extra cost.
            </li>
            <li>
              <strong>Cancel anytime:</strong> month-to-month. Stay because it pays for itself.
            </li>
          </ul>
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
