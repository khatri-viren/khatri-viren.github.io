import React, { useCallback, useRef, useState } from "react";
import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";

const quickFacts = [
  {
    title: "Based in",
    value: "Pune, India",
    icon: MapPin,
  },
  {
    title: "Recent role",
    value: "Co-Founder & CTO at WorqHat",
    icon: BriefcaseBusiness,
  },
  {
    title: "Education",
    value: "B.Tech CSE, MIT-WPU",
    icon: GraduationCap,
  },
];

const About = () => {
  const [cvLoading, setCvLoading] = useState(false);
  const cvBusyRef = useRef(false);

  const downloadCv = useCallback(async () => {
    if (cvBusyRef.current) return;
    cvBusyRef.current = true;
    setCvLoading(true);
    try {
      const { default: href } =
        await import("../../assets/Viren_Khatri_9_April_2026.pdf");
      const a = document.createElement("a");
      a.href = href;
      a.download = "Viren_Khatri_9_April_2026.pdf";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } finally {
      cvBusyRef.current = false;
      setCvLoading(false);
    }
  }, []);

  return (
    <section
      className="section py-18! pb-8! max-md:py-9! max-md:pb-8!"
      id="about"
    >
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle mb-6! max-md:mb-5!">
        My introduction
      </span>

      <div className="container mx-auto max-w-[980px]">
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(250px,0.85fr)]">
          <div className="space-y-4 text-pretty text-sm leading-7 text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">
                I&apos;m a full-stack engineer passionate about building
                scalable software products from the ground up.
              </span>
            </p>
            <p>
              Over the past few years, I&apos;ve worked on designing and
              developing complex platforms including AI-powered systems, no-code
              application builders, workflow automation platforms, and developer
              tools. My focus has always been on transforming ideas into real,
              production-ready products — from architecture and prototyping to
              scaling and iteration.
            </p>
            <p>
              I specialize in the JavaScript/TypeScript ecosystem, building
              high-performance applications across the stack using technologies
              like React, Next.js, Node.js, and modern cloud infrastructure. I
              enjoy solving challenging engineering problems, designing scalable
              systems, and building intuitive user experiences.
            </p>
            <p className="font-medium text-foreground">
              Some of the systems and products I&apos;ve worked on include:
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-muted-foreground">
              <li>
                AI interview platforms that simulate real interviews and
                generate detailed performance reports
              </li>
              <li>
                No-code platforms that allow users to build full-stack
                applications visually
              </li>
              <li>
                Workflow automation systems that enable complex task
                orchestration
              </li>
              <li>AI-driven developer tools and SaaS products</li>
            </ul>
            <p>
              Beyond software, I also enjoy experimenting with hardware, IoT
              systems, and embedded devices, exploring how software and physical
              systems can work together to build intelligent automation.
            </p>
            <p>
              I&apos;m always interested in working on ambitious products,
              solving complex technical problems, and collaborating with people
              who enjoy building things that matter.
            </p>
          </div>

          <div className="border-t border-border/60 pt-4 lg:border-t-0 lg:border-l lg:pl-5">
            <div className="space-y-3">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.title}
                    className={`flex items-start gap-3 pb-3 ${
                      index !== quickFacts.length - 1
                        ? "border-b border-border/60"
                        : ""
                    }`}
                  >
                    <div className="mt-0.5 inline-flex rounded-full bg-accent/80 p-2 text-primary">
                      <Icon className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {fact.title}
                      </p>
                      <p className="text-sm font-medium leading-6 text-foreground">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={downloadCv}
              disabled={cvLoading}
              className="mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-card disabled:pointer-events-none disabled:opacity-70"
            >
              {cvLoading ? "Preparing…" : "Download CV"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"></path>
                <path d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"></path>
                <path d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"></path>
                <path d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
