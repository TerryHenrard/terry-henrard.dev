import { Badge } from "@/core/components/ui/badge";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent } from "@/core/components/ui/card";
import { Award, Briefcase, Code2, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const skillGroups = [
    {
      category: "14-Day Sprint Deliverables",
      skills: [
        "Production AI feature",
        "Data wired to your app",
        "Guardrails (PII filters, rate limits)",
        "Evals & tracking (PostHog)",
        "Docs & handover",
      ],
    },
    {
      category: "Who I Serve",
      skills: ["Europe-based B2B SaaS", "5–80 employees", "Founder / PM / VP Eng", "Seed–Series A"],
    },
    {
      category: "AI / LLM Stack",
      skills: [
        "Vercel AI SDK",
        "OpenAI tools & function calls",
        "RAG (Upstash / Neon)",
        "Prompt/tooling patterns",
        "Safety checks",
      ],
    },
    {
      category: "Data & Integrations",
      skills: ["Postgres / Neon", "Supabase", "REST / GraphQL", "Webhooks", "Auth (OAuth / SSO)"],
    },
    {
      category: "Quality & Safety",
      skills: ["Guardrails & tests", "Eval harness", "PII redaction", "Rate limiting", "Fallbacks"],
    },
    {
      category: "Ops & Delivery",
      skills: ["GitHub Actions", "Vercel", "Feature flags", "Observability", "Error budgets"],
    },
  ];

  const journey = [
    {
      icon: GraduationCap,
      year: "Days 0–1",
      title: "Scope & Success Metric",
      description:
        "We define one clear metric (e.g., adoption %, CSAT uplift) and the smallest valuable slice to ship in 14 days.",
    },
    {
      icon: Code2,
      year: "Days 2–5",
      title: "Data Wiring & Prototype",
      description:
        "Wire your data sources, set up RAG/tooling, and deliver a working prototype you can click and test.",
    },
    {
      icon: Briefcase,
      year: "Days 6–10",
      title: "Guardrails, Evals & Iteration",
      description:
        "Add PII filtering, rate limits, evals, and success tracking. Iterate with fast feedback loops.",
    },
    {
      icon: Award,
      year: "Days 11–14",
      title: "Ship, Instrument & Handover",
      description:
        "Release to production, instrument tracking, document everything. If we miss the metric, I keep working for free until we hit it.",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden container mx-auto ">
      <div className="relative z-10 container mx-auto  max-w-6xl">
        <div className="mb-12 relative rounded-3xl overflow-hidden">
          <Card className="relative bg-transparent border-0">
            <CardContent className="bg-card/40 rounded-2xl md:p-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Badge variant="default" className="rounded-full">
                  <Sparkles className="w-3 h-3" />
                  <span className="ml-1">About / How I Work</span>
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Ship a Real AI Feature in 14 Days
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
                I help B2B SaaS ship a production AI feature in 14 days—wired to your data with
                guardrails & tracking—so you impress users and investors without burning your team.
                If we miss the success metric, I keep working for free until we hit it.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="rounded-3xl bg-card/40 p-8 hover:-translate-y-1 transition-all duration-300">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">What I Believe</h2>
              <p className="text-foreground/70 leading-relaxed">
                Value beats features. We win by increasing the likelihood of the outcome you want
                while cutting time, effort, and risk. That’s why my offer is outcome-tied,
                time-boxed, and backed by a strong guarantee.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl p-8 bg-card/40 hover:-translate-y-1 transition-all duration-300">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">How the 14-Day Sprint Works</h2>
              <p className="text-foreground/70 leading-relaxed">
                We agree on one metric and a smallest-viable feature. I wire your data, add
                guardrails, instrument tracking, and iterate fast. You get a production release in
                14 days plus docs and handover. Limited concurrent slots to keep quality high.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-3xl p-8 mb-12 bg-card/40">
          <CardContent>
            <h2 className="text-3xl font-bold mb-6">What You Get</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillGroups.map((item, index) => (
                <Card key={index} className="glass-dark glass-border rounded-2xl p-4 bg-card/40">
                  <CardContent>
                    <h3 className="font-semibold text-primary mb-2">{item.category}</h3>
                    <ul className="space-y-1">
                      {item.skills.map((skill, i) => (
                        <li key={i} className="text-sm text-foreground/70">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl p-8 mb-12 bg-card/40">
          <CardContent>
            <h2 className="text-3xl font-bold mb-8">Delivery Timeline (0–14 Days)</h2>
            <div className="space-y-8">
              {journey.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    {index < journey.length - 1 && (
                      <div className="w-px h-full bg-linear-to-b from-primary/50 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl p-8 text-center bg-card/40">
          <CardContent>
            <h2 className="text-3xl font-bold mb-4">Start the 14-Day AI Sprint</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Have a feature in mind—or want a quick heuristic review first? I run a limited number
              of concurrent sprints. If slots are full, I’ll add you to the waitlist and send my
              latest sector report + email course.
            </p>
            <Button asChild size="lg" className="inline-flex items-center gap-2">
              <Link href="/">
                <span>Book Your Sprint</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
