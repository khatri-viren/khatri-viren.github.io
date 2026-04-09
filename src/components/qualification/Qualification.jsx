import React, { useLayoutEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const education = [
  {
    title: "B.Tech Computer Science & Engineering",
    org: "MIT World Peace University, Pune",
    period: "2021 – May 2025 · CGPA 9.21",
    side: "left",
  },
  {
    title: "Senior Secondary (XII)",
    org: "Nowrosjee Wadia College",
    period: "2018 – 2020",
    side: "right",
  },
  {
    title: "Higher Secondary (X)",
    org: "Sardar Dastur Hormazdiar High School",
    period: "2018",
    side: "left",
  },
];

const experience = [
  {
    title: "Co-Founder & Chief Technology Officer (CTO)",
    org: "WorqHat, Pune",
    period: "January 2025 – February 2026",
    details: `At WorqHat, we built and scaled an AI-native, multi-tenant SaaS platform from the ground up, bringing together database, workflow automation, a drag-and-drop UI builder, external portals, mailboxes, documents and integrations into a unified system

As CTO, I led the engineering direction behind a small, high-impact team focused on one goal: reducing the time it takes to go from idea to a working application. Together, we shipped a fully dynamic UI builder and white-labeled portal system with authentication and scoped data access, cutting customer delivery timelines from weeks down to days.

On the backend, we evolved a basic node-based workflow builder into a production-grade distributed workflow engine. This required rethinking execution, reliability, and scale, eventually supporting 100K+ executions per day per tenant with 99.9% reliability.

I also architected and built the core systems behind SmartMocks, our AI interview platform. This included designing a distributed asynchronous processing pipeline capable of handling thousands of concurrent users, implementing fault-tolerant job orchestration using queues (retries, dead-letter queues, concurrency control), and developing LLM-based evaluation pipelines that reduced manual review effort by over 85%.

Beyond systems, a big part of my role was building the team itself, mentoring engineers, setting technical direction, and establishing development standards that allowed us to move fast while maintaining reliability.`,
    side: "left",
  },
  {
    title: "Full Stack Development Intern",
    org: "WorqHat, Pune",
    period: "January 2024 – December 2024",
    details:
      "Built a drag-and-drop no-code backend system and internal platforms for RFQs, POs, deliveries, and financial workflows.",
    side: "right",
  },
];

const ExpandableDetails = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const measure = () => {
      const node = textRef.current;
      if (!node) return;
      if (expanded) {
        setShowToggle(true);
        return;
      }
      setShowToggle(node.scrollHeight > node.clientHeight + 1);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [text, expanded]);

  return (
    <div className="mt-3">
      <div
        ref={textRef}
        className={cn(
          "whitespace-pre-line leading-7 text-muted-foreground",
          !expanded && "line-clamp-4",
        )}
        style={{ fontSize: "var(--small-font-size)" }}
      >
        {text}
      </div>
      {showToggle ? (
        <button
          type="button"
          className="mt-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      ) : null}
    </div>
  );
};

const TimelineItem = ({ item, isLast }) => {
  const alignLeft = item.side === "left";

  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 md:grid-cols-[1fr_auto_1fr] md:gap-x-8">
      <div className="col-start-1 row-span-2 row-start-1 flex justify-center md:col-start-2">
        <div className="flex h-full flex-col items-center">
          <span className="mt-2 inline-flex size-3 rounded-full bg-primary"></span>
          {!isLast ? (
            <span className="mt-3 block h-full w-px min-h-18 bg-border md:min-h-24"></span>
          ) : null}
        </div>
      </div>

      <div
        className={[
          "col-start-2 row-start-1 pb-6 max-md:pt-0.5",
          alignLeft ? "md:col-start-1 md:text-right" : "md:col-start-3",
        ].join(" ")}
      >
        <h3
          className="font-medium text-foreground"
          style={{ fontSize: "var(--normal-font-size)" }}
        >
          {item.title}
        </h3>
        <span
          className="mt-1.5 inline-block text-muted-foreground"
          style={{ fontSize: "var(--small-font-size)" }}
        >
          {item.org}
        </span>
        <div
          className="mt-2 text-muted-foreground"
          style={{ fontSize: "var(--small-font-size)" }}
        >
          <i className="uil uil-calendar-alt"></i> {item.period}
        </div>
        {item.details ? <ExpandableDetails text={item.details} /> : null}
      </div>
    </div>
  );
};

const qualificationTabsTriggerClassName =
  "flex items-center gap-2 rounded-full px-4 py-2 font-medium text-muted-foreground/55 transition-colors hover:text-muted-foreground data-[state=active]:font-semibold data-[state=active]:text-foreground data-[state=active]:border-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:ring-0 dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent";

const Qualification = () => {
  return (
    <section className="section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Education &amp; experience</span>

      <div className="container mx-auto max-w-4xl">
        <Tabs defaultValue="experience" className="w-full">
          <TabsList
            variant="line"
            className="mx-auto mb-10 h-auto w-full max-w-fit flex-wrap justify-center gap-2 rounded-full bg-transparent p-0"
          >
            <TabsTrigger
              value="education"
              className={qualificationTabsTriggerClassName}
              style={{ fontSize: "var(--h3-font-size)" }}
            >
              <i className="uil uil-graduation-cap text-3xl"></i>
              Education
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className={qualificationTabsTriggerClassName}
              style={{ fontSize: "var(--h3-font-size)" }}
            >
              <i className="uil uil-briefcase-alt text-3xl"></i>
              Experience
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="mt-0 outline-none">
            <div className="mx-auto flex max-w-4xl flex-col gap-4">
              {education.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience" className="mt-0 outline-none">
            <div className="mx-auto flex max-w-4xl flex-col gap-4">
              {experience.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  isLast={index === experience.length - 1}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Qualification;
