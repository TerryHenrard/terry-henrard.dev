import Link from 'next/link';

import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Gauge,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
} from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/core/components/ui/card';

export default function AboutPage() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — About & Eligibility */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div className=''>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  About Me
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  I'm Terry - a Next.js/TypeScript developer who ships fast, keeps promises, and
                  owns outcomes.
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  I combine
                  <strong> production discipline</strong> (clean, tested, documented code) with
                  <strong> product sense</strong> (scope ruthlessly, measure what matters) and
                  <strong> ownership</strong> (I treat your app like mine).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credibility / Proof Strip — personal, not salesy */}
        <div className='mb-12 grid grid-cols-2 gap-3 md:grid-cols-4'>
          {[
            { icon: Gauge, label: 'Ships reliably (weekly demos)' },
            { icon: ShieldCheck, label: 'Production mindset (tests, CI/CD)' },
            { icon: Code2, label: 'Next.js + AI experience' },
            { icon: Users, label: 'Clear comms & ownership' },
          ].map((item, i) => (
            <div
              key={i}
              className='flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium'
            >
              <item.icon className='h-4 w-4' />
              {item.label}
            </div>
          ))}
        </div>

        {/* Why I'm a Strong Fit */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>I'm a strong fit for your team</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/70 leading-relaxed'>
            <ul className='grid gap-4 md:grid-cols-2'>
              {[
                'I scope to must-haves first, then iterate — momentum > perfection.',
                'I communicate early and clearly: weekly demos, no surprises.',
                'I design for change: typed code, modular architecture, tests where it counts.',
                "I'm comfortable across the stack: Next.js/React, Node, Postgres, vector search, basic cloud.",
                "I've shipped AI features (RAG, assistants) on small projects and know the pitfalls (latency, evals, adoption).",
                'I document decisions so future you (or teammates) can move fast without me.',
              ].map((point, i) => (
                <li key={i} className='flex gap-2'>
                  <CheckCircle2 className='text-primary mt-1 h-5 w-5 shrink-0' />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Principles I work by */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>Principles I work by</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-3'>
              {[
                {
                  title: 'Clarity > Cleverness',
                  desc: 'Readable, typed, predictable code beats magic. Future-proof means future-readable.',
                  icon: BookOpen,
                },
                {
                  title: 'Measure What Matters',
                  desc: 'Latency, uptime, adoption. I pick 2-3 metrics and build around them.',
                  icon: Gauge,
                },
                {
                  title: "Owner's Mindset",
                  desc: "I optimize for the long-term health of your product, not just 'done'.",
                  icon: ShieldCheck,
                },
              ].map((p, i) => (
                <Card key={i} className='p-4'>
                  <CardHeader className='pb-2'>
                    <div className='bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-xl'>
                      <p.icon className='text-primary h-5 w-5' />
                    </div>
                    <CardTitle className='text-lg'>{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='text-foreground/70 pt-0'>{p.desc}</CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Snapshot (real, concise) */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>Experience Snapshot</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/70'>
            <div className='grid gap-4 md:grid-cols-3'>
              <div className='rounded-xl p-4'>
                <div className='mb-2 flex items-center gap-3'>
                  <TerminalSquare className='text-primary h-5 w-5' />
                  <div className='text-foreground font-medium'>Frontend & Platform</div>
                </div>
                <p>
                  React/Next.js (App Router), TypeScript, Tailwind, shadcn/ui, TanStack Query,
                  CI/CD.
                </p>
              </div>
              <div className='rounded-xl p-4'>
                <div className='mb-2 flex items-center gap-3'>
                  <Code2 className='text-primary h-5 w-5' />
                  <div className='text-foreground font-medium'>Backend & Data</div>
                </div>
                <p>Node.js, Postgres/Neon, REST, auth, file storage, background jobs, logging.</p>
              </div>
              <div className='rounded-xl p-4'>
                <div className='mb-2 flex items-center gap-3'>
                  <Award className='text-primary h-5 w-5' />
                  <div className='text-foreground font-medium'>AI</div>
                </div>
                <p>
                  RAG/assistants, prompt & context, evals basics, latency budgets, product adoption
                  focus.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tools I use daily */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>Tools I use daily</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  category: 'Frontend',
                  skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
                },
                { category: 'Backend', skills: ['Node.js', 'PostgreSQL (Neon)', 'REST APIs'] },
                {
                  category: 'AI & Data',
                  skills: ['Vercel AI SDK', 'OpenAI SDK', 'Vector Search (Upstash/PGVector)'],
                },
                {
                  category: 'Cloud',
                  skills: ['Vercel', 'AWS (basics)', 'Supabase/Firebase (as needed)'],
                },
                { category: 'DevX', skills: ['GitHub Actions', 'Docker', 'ESLint/Prettier'] },
                { category: 'Collab', skills: ['Figma', 'Linear/ClickUp', 'Notion'] },
              ].map((item, index) => (
                <Card key={index} className='p-4'>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg'>{item.category}</CardTitle>
                  </CardHeader>
                  <CardContent className='pt-0'>
                    <div className='flex flex-wrap gap-1'>
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant='secondary' className='text-xs'>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Story (short & relevant) */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>My story (short)</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/70 leading-relaxed'>
            <div className='space-y-6'>
              <div className='flex gap-6'>
                <div className='bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl'>
                  <GraduationCap className='text-primary h-6 w-6' />
                </div>
                <div>
                  <div className='text-primary mb-1 text-sm font-semibold'>2018 → Today</div>
                  <p>
                    I fell in love with the craft of building fast, reliable web apps. Over time I
                    focused on TypeScript/Next.js and pragmatic AI — not hype, just features users
                    adopt.
                  </p>
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl'>
                  <Briefcase className='text-primary h-6 w-6' />
                </div>
                <div>
                  <div className='text-primary mb-1 text-sm font-semibold'>Recent</div>
                  <p>
                    Built MVPs and AI proofs on small projects; learned to cut scope, design for
                    change, and keep latency budgets honest. I care about developer ergonomics and
                    long-term maintainability.
                  </p>
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl'>
                  <Award className='text-primary h-6 w-6' />
                </div>
                <div>
                  <div className='text-primary mb-1 text-sm font-semibold'>
                    What this means for you
                  </div>
                  <p>
                    You get someone who moves quickly without breaking tomorrow, communicates
                    clearly, and treats your product like an owner.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eligibility Checklist (for hiring managers) */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>Eligibility checklist</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/70'>
            <ul className='space-y-2'>
              {[
                'Can deliver an MVP baseline with clean, typed code and CI.',
                'Comfortable integrating AI features where they truly help users.',
                'Understands product trade-offs; scopes ruthlessly for momentum.',
                'Writes docs and ADRs so future work is faster.',
                'Collaborates well with PM/Design; async by default, quick when needed.',
              ].map((x, i) => (
                <li key={i} className='flex gap-2'>
                  <CheckCircle2 className='text-primary mt-1 h-4 w-4' />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Light CTA — still about fit, not selling */}
        <Card className='p-8 text-center'>
          <CardHeader>
            <CardTitle className='text-3xl'>Want the no-fluff version?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-foreground/70 mx-auto mb-6 max-w-2xl'>
              If you value speed, clarity, and ownership — I'm a good match. Happy to walk through
              code or past work.
            </p>
            <Button asChild className='transition-all duration-300 hover:-translate-y-0.5'>
              <Link href={`/?prompt=${encodeURIComponent('Can we book a 15-min call?')}`}>
                Book a 15-min call
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
