import { Badge } from "@/core/components/ui/badge";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent, CardFooter } from "@/core/components/ui/card";
import {
  Calendar,
  Clock,
  FileText,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden container mx-auto">
      <div className="relative z-10 mx-auto px-4 py-8 max-w-6xl">
        {/* Hero */}
        <div className="mb-12 relative rounded-3xl overflow-hidden">
          <Card className="relative bg-transparent border-0">
            <CardContent className="rounded-2xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <Badge variant="default" className="rounded-full">
                  <Sparkles className="w-3 h-3" />
                  <span className="ml-1">Let's connect</span>
                </Badge>
                <Badge variant="secondary" className="rounded-full ml-2">
                  <Languages className="w-3 h-3" />
                  <span className="ml-1">FR / EN</span>
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Email, Call, or Book a Slot
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
                I reply within 24h on weekdays. Prefer email? Great. Urgent? Call me directly. No
                fluff—just next steps.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="inline-flex items-center gap-2">
                  <a
                    href="mailto:terry.henrard@outlook.com?subject=Hello%20Terry"
                    aria-label="Email Terry Henrard"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Terry</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="inline-flex items-center gap-2"
                >
                  <a href="tel:+32498146651" aria-label="Call Terry Henrard">
                    <Phone className="w-4 h-4" />
                    <span>+32 498 14 66 51</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="inline-flex items-center gap-2"
                >
                  <Link href={`/?prompt=${encodeURIComponent("Can we book a 15-min call?")}`}>
                    <Calendar className="w-4 h-4" />
                    <span>Book a 15-min cal</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <Card className="rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 justify-between">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Email</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Best for context, links, and quick questions. I'll reply with next steps or a short
                Loom.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="mailto:terry.henrard@outlook.com?subject=Hello%20Terry">
                  terry.henrard@outlook.com
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Call / Text */}
          <Card className="rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 justify-between">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Call</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Quick chat to see if I can help. If I'm in a rush, I'll call back ASAP.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary">
                <a href="tel:+32498146651" className="w-full">
                  +32 498 14 66 51
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Address */}
          <Card className="rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Address</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                42 Rue Léon Bernus, Charleroi
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Office Hours & Response Policy */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="rounded-3xl p-8">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Office Hours (CET)</h2>
              <p className="text-foreground/70 leading-relaxed">
                Mon-Fri, 09:00-18:00. Replies within 24h on weekdays. For production issues (clients
                on a Care Plan), call the number above.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl p-8">
            <CardContent>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Privacy & Respect</h2>
              <p className="text-foreground/70 leading-relaxed">
                Your details stay between us. No spam, no resale. Please—no cold agency pitches.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Optional Brief */}
        <Card className="rounded-3xl p-8 mb-12">
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Optional: 3-Minute Brief</h2>
            </div>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Share a bit of context to speed things up:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Your stage & team size",
                "Outcome you want (1 KPI)",
                "Key data sources (read-only)",
                "Constraints or guardrails",
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl p-4">
                  <CardContent>
                    <p className="text-sm text-foreground/70">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <Link href="/brief">Fill the short brief</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Direct Email */}
        <Card className="rounded-3xl p-8 text-center">
          <CardContent>
            <h2 className="text-3xl font-bold mb-4">Prefer Email?</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Send context, links, or docs. I'll reply with next steps or a quick Loom.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="inline-flex items-center gap-2">
                <a href="mailto:terry.henrard@outlook.com?subject=Hello%20Terry">
                  <Mail className="w-4 h-4" />
                  <span>terry.henrard@outlook.com</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="inline-flex items-center gap-2"
              >
                <a href="tel:+32498146651">
                  <Phone className="w-4 h-4" />
                  <span>Call Terry</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
