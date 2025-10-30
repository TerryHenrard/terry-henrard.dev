import Link from 'next/link';

import { BarChart3, CheckCircle2, Server, Settings, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';

export default function CareAndHostingPage() {
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
                  Care & Hosting
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  Production peace of mind
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  Uptime, monitoring, updates and small fixes — plus{' '}
                  <strong>managed hosting</strong> tuned for
                  <strong> Next.js + Postgres</strong>. Predictable support, measurable reliability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pillars */}
        <div className='mb-12 grid gap-6 md:grid-cols-4'>
          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <Server className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Managed hosting</h4>
              <p className='text-foreground/70 text-sm'>
                Vercel + Neon (Postgres) setup, backups, SSL, runtime budgets.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <BarChart3 className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Monitoring</h4>
              <p className='text-foreground/70 text-sm'>
                Uptime %, p95 latency, error spikes, token costs with alerts.
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <Settings className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Hygiene & updates</h4>
              <p className='text-foreground/70 text-sm'>
                Monthly dependency updates, security patches, re‑index/evals (AI).
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-6'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                <CheckCircle2 className='text-primary h-5 w-5' />
              </div>
              <h4 className='mb-1 font-semibold'>Fixes & SLAs</h4>
              <p className='text-foreground/70 text-sm'>
                Small fixes monthly, same‑day response on Pro, ≤2h on Venture.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Plans */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>Lite — “Lights On”</h3>
              <p className='text-foreground/70 mb-1 text-sm'>€199.99 / month (excl. VAT)</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Uptime & error alerts</li>
                <li>Weekly automated checks (backups, SSL, CPU/mem)</li>
                <li>Monthly PDF report</li>
                <li>1 day of quick fixes / month</li>
                <li>Response ≤ 2 business days</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href='/contact'>Pick Lite</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>Pro — “Production Care”</h3>
              <p className='text-foreground/70 mb-1 text-sm'>€899.99 / month (excl. VAT)</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Everything in Lite</li>
                <li>2 dev days / month (fixes, small features, prompt/data tweaks)</li>
                <li>Monthly deps updates & security patches</li>
                <li>AI hygiene: re‑run evals & re‑index changed data</li>
                <li>Same‑day response • P1 start &lt; 8h</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant='secondary' className='w-full'>
                <Link href='/contact'>Choose Pro</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>Venture — “Ops & Credibility”</h3>
              <p className='text-foreground/70 mb-1 text-sm'>€999.99 / month (excl. VAT)</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>Everything in Pro</li>
                <li>5 dev days / month</li>
                <li>Quarterly KPI review (60 min)</li>
                <li>Perf targets (p95 & LCP) + quick wins</li>
                <li>Canary/feature flags for risky changes</li>
                <li>Response ≤ 2h (business hours)</li>
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
          Hosting stack typically Vercel + Neon + (optional) Upstash Vector. Prices exclude VAT.
        </p>
      </div>
    </main>
  );
}
