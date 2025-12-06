"use client";

import React from "react";
import { Timeline as TimelineUI } from "@/components/ui/timeline";
import { Briefcase, GraduationCap, Rocket, LucideIcon } from "lucide-react";

interface Experience {
  id: number;
  type: string;
  icon: LucideIcon;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    icon: Rocket,
    title: "Lorem Ipsum Dolor",
    company: "Sit Amet Inc.",
    period: "2023 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlights: ["Lorem", "Ipsum", "Dolor"],
  },
  {
    id: 2,
    type: "work",
    icon: Briefcase,
    title: "Consectetur Adipiscing",
    company: "Elit Solutions Co.",
    period: "2021 - 2023",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: ["Sit", "Amet", "Consectetur"],
  },
  {
    id: 3,
    type: "work",
    icon: Briefcase,
    title: "Sed Eiusmod Tempor",
    company: "Incididunt Studio",
    period: "2019 - 2021",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    highlights: ["Adipiscing", "Elit", "Sed"],
  },
  {
    id: 4,
    type: "education",
    icon: GraduationCap,
    title: "Labore et Dolore",
    company: "Magna Aliqua University",
    period: "2015 - 2019",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    highlights: ["Eiusmod", "Tempor", "Incididunt"],
  },
];

export function Timeline() {
  const data = experiences.map((item) => ({
    title: item.period,
    content: (
      <div>
        <div className="flex items-center gap-3 mb-2">
          <item.icon className="w-5 h-5 text-primary" />
          <h4 className="text-xl font-bold text-foreground">
            {item.title}
          </h4>
        </div>
        <p className="text-primary font-medium mb-4">{item.company}</p>
        <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="w-full">
      <TimelineUI data={data} />
    </section>
  );
}

