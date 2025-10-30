"use client";

import { Badge } from "@/core/components/ui/badge";
import { Card, CardContent } from "@/core/components/ui/card";

const timelineItems: {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}[] = [
  {
    year: "2025 - Present",
    title: "Web Developer specialized in AI and MVP",
    company: "Freelance",
    description:
      "Developing AI-powered web applications using Next.js, React, and TypeScript. Adding intelligent features to enhance user experience and save time to my clients.",
    tags: ["AI", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    year: "2023 - 2025",
    title: "Web Developer",
    company: "VISIT ME",
    description:
      "Built and maintained a full-stack SaaS platform — designed infrastructure from database schemas to production codebase and ongoing operations.",
    tags: ["AI", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    year: "2024 - 2025",
    title: "Intern Developer",
    company: "Thomas & Piron",
    description:
      "Worked on integrating realtime AI agents into after-sales service. When clients call, an AI helps answer their questions quickly and accurately directly on the phone.",
    tags: ["AI", "Docker", "TypesScript", "Azure", "React", "C#"],
  },
  {
    year: "2024 - 2025",
    title: "Intern Developer",
    company: "Microsoft Innovate Create",
    description:
      "Worked on web development projects and gained experience with AI technologies. (Fell in love with AI here!)",
    tags: ["AI", "React", "TypesScript", "C#", "Azure", "Docker"],
  },
  {
    year: "2022 - 2024",
    title: "Student Developer",
    company: "Tech High School",
    description: "Built several web projects integrating AI features as part of my coursework.",
    tags: ["Python", "C#", "C", "Java", "React Native"],
  },
  {
    year: "2018 - 2022",
    title: "Hobbyist Developer",
    company: "Self-Taught",
    description:
      "Explored web development and AI through personal projects and online courses. Since my early teens, I've been passionate about coding and technology.",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
  },
];

export default function Timeline() {
  return (
    <main className="relative overflow-hidden">
      <div className="relative z-10 container mx-auto py-4 min-h-[calc(100vh-4rem)] p-8 bg-transparent border-0 shadow-none">
        <div className="relative py-8">
          {/* Centered vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent-foreground -translate-x-1/2" />

          {/* Timeline items alternating left and right */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative group">
                  {/* Center dot */}
                  <div className="absolute left-1/2 top-6 w-4 h-4 rounded-full bg-accent-foreground shadow-lg shadow-accent-foreground/50  -translate-x-1/2 z-10 group-hover:scale-125 transition-transform" />

                  {/* Card positioned left or right */}
                  <div className={`relative w-[calc(50%-2rem)] ${isLeft ? "mr-auto" : "ml-auto"}`}>
                    <Card className="hover:-translate-y-1 hover:shadow-xl   transition-all">
                      <CardContent className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1 flex-1">
                            <h4 className="text-base font-bold text-foreground">{item.title}</h4>
                            <p className="text-xs text-accent-foreground font-medium">
                              {item.company}
                            </p>
                          </div>
                          <Badge>{item.year}</Badge>
                        </div>

                        <p className="text-sm text-muted-foreground/90 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant={"secondary"}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Connecting line from card to center */}
                    <div
                      className={`absolute bg-accent-foreground top-8 w-8 h-px ${
                        isLeft ? "left-full" : "right-full"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
