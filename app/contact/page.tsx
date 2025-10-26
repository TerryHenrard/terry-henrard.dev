import { Badge } from "@/core/components/ui/badge";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent } from "@/core/components/ui/card";
import {
  Calendar,
  Clock,
  FileText,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden container mx-auto">
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Hero */}
        <div className="mb-12 relative rounded-3xl overflow-hidden">
          <Card className="relative bg-transparent border-0">
            <CardContent className="bg-card/40 rounded-2xl md:p-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Badge variant="default" className="rounded-full">
                  <Sparkles className="w-3 h-3" />
                  <span className="ml-1">Contact</span>
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Start Your 14-Day AI Sprint
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
                I help B2B SaaS ship a production AI feature in 14 days—data-wired, safe, and
                tracked. Limited concurrent slots to keep quality high. If we miss the success
                metric, I keep working for free until we hit it.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="inline-flex items-center gap-2">
                  <Link href="/book">
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Sprint</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="inline-flex items-center gap-2"
                >
                  <Link href="/review">
                    <MessageSquare className="w-4 h-4" />
                    <span>Request Heuristic Review</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="rounded-3xl p-8 bg-card/40 hover:-translate-y-1 transition-all duration-300">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Book a Sprint</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                30-min call to define the outcome metric, scope the smallest valuable slice, and
                lock the 14-day window. I cap active sprints to keep velocity and quality high.
              </p>
              <Button asChild>
                <Link href="/book">Choose a Date</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl p-8 bg-card/40 hover:-translate-y-1 transition-all duration-300">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Heuristic Review (Free)</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Get a 5–7 min Loom with 3 concrete AI opportunities for your app, feasibility notes,
                and a quick build plan. Zero fluff—just actionable next steps.
              </p>
              <Button asChild variant="secondary">
                <Link href="/review">Request Review</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl p-8 bg-card/40 hover:-translate-y-1 transition-all duration-300">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Waitlist & Updates</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                No slots left? Join the waitlist and get my sector notes, mini-case studies, and a
                short email course on shipping production AI (without burning your team).
              </p>
              <Button asChild variant="outline">
                <Link href="/waitlist">Join Waitlist</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee & Response Policy */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="rounded-3xl p-8 bg-card/40">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Risk-Reversal Guarantee</h2>
              <p className="text-foreground/70 leading-relaxed">
                We pick one success metric together (adoption %, CSAT uplift, task completion,
                etc.). If we miss it after the 14-day release, I keep working for free until we hit
                it. That’s how confident I am in the process.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl p-8 bg-card/40">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Response Policy</h2>
              <p className="text-foreground/70 leading-relaxed">
                I’m Europe/Brussels based. Expect replies within 24 hours on weekdays. I run a max
                of <span className="font-semibold">two concurrent sprints</span> to protect focus
                and delivery speed.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What I Need (Optional Brief) */}
        <Card className="rounded-3xl p-8 mb-12 bg-card/40">
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Optional: 3-Minute Brief</h2>
            </div>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Share this ahead of time for a faster kickoff:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Your stage & team size",
                "Desired outcome metric",
                "Key data sources (read-only)",
                "Any must-have guardrails",
              ].map((item, i) => (
                <Card key={i} className="glass-dark glass-border rounded-2xl p-4 bg-card/40">
                  <CardContent>
                    <p className="text-sm text-foreground/70">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <Link href="/brief">Fill the Short Brief</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Direct Email */}
        <Card className="rounded-3xl p-8 text-center bg-card/40">
          <CardContent>
            <h2 className="text-3xl font-bold mb-4">Prefer Email?</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Send context, links, and any questions. I’ll reply with next steps or a quick Loom.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="inline-flex items-center gap-2">
                <a href="mailto:hello@terry-henrard.dev">
                  <Mail className="w-4 h-4" />
                  <span>hello@terry-henrard.dev</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="inline-flex items-center gap-2"
              >
                <Link href="/call">
                  <Phone className="w-4 h-4" />
                  <span>Schedule a Quick Call</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
