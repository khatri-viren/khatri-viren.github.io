import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactCards = [
  {
    icon: "bx bx-mail-send",
    title: "Email",
    value: "vk102002@gmail.com",
    cta: "Write me",
    href: "mailto:vk102002@gmail.com",
  },
  {
    icon: "bx bxl-linkedin-square",
    title: "LinkedIn",
    value: "Open profile",
    cta: "Let's connect",
    href: "https://www.linkedin.com/in/khatriviren",
  },
  {
    icon: "bx bxl-github",
    title: "Github",
    value: "Open profile",
    cta: "Let's connect",
    href: "https://github.com/khatri-viren",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    e.target.reset();
    alert("Message sent Successfully!");
  };

  return (
    <section className="section py-20! pb-8! max-md:py-10! max-md:pb-8!" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle mb-6! max-md:mb-5!">Contact Me</span>

      <div className="container mx-auto grid max-w-[980px] grid-cols-[minmax(0,300px)_minmax(0,1fr)] items-start justify-center gap-6 pb-6 max-lg:grid-cols-1">
        <div>
          <p className="max-w-[30ch] text-pretty text-sm leading-6 text-muted-foreground">
            I&apos;m always up for backend architecture, product engineering, and ideas around AI and developer tooling.
          </p>

          <div className="mt-5 divide-y divide-border/60 border-y border-border/60">
            {contactCards.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between gap-3 py-3"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <i className={`${item.icon} text-xl text-primary`}></i>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{item.title}</p>
                    <p className="truncate text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {item.cta}
                  <i className="bx bx-right-arrow-alt transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </a>
            ))}
          </div>
        </div>

        <Card
          size="sm"
          className="w-full border-(--surface-border) bg-card/82 shadow-(--surface-shadow)"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <CardContent className="space-y-6 p-5 max-md:p-4">
              <div className="relative h-14">
                <Label
                  htmlFor="name"
                  className="absolute -top-2.5 left-4 z-10 rounded-lg bg-card px-1 text-primary"
                  style={{ fontSize: "var(--smaller-font-size)" }}
                >
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  className="absolute inset-0 z-1 h-full rounded-xl border-border/70 bg-background/80 px-4 pt-1.5"
                  placeholder="Insert your name"
                  autoComplete="name"
                />
              </div>

              <div className="relative h-14">
                <Label
                  htmlFor="email"
                  className="absolute -top-2.5 left-4 z-10 rounded-lg bg-card px-1 text-primary"
                  style={{ fontSize: "var(--smaller-font-size)" }}
                >
                  Mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className="absolute inset-0 z-1 h-full rounded-xl border-border/70 bg-background/80 px-4 pt-1.5"
                  placeholder="Insert your email"
                  autoComplete="email"
                />
              </div>

              <div className="relative h-36">
                <Label
                  htmlFor="message"
                  className="absolute -top-2.5 left-4 z-10 rounded-lg bg-card px-1 text-primary"
                  style={{ fontSize: "var(--smaller-font-size)" }}
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="absolute inset-0 z-1 min-h-0 resize-none rounded-xl border-border/70 bg-background/80 px-4 pt-7"
                  placeholder="Write your message"
                />
              </div>

              <Button
                type="submit"
                className="button button--flex h-auto rounded-xl border-0 px-6 py-4 text-sm shadow-(--surface-shadow) hover:shadow-(--surface-shadow-strong)"
              >
                Send Message
                <svg
                  className="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"></path>
                  <path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"></path>
                </svg>
              </Button>
            </CardContent>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
