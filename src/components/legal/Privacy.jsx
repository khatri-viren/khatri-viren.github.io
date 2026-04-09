import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <section className="section work pb-20 max-md:pb-16" id="privacy">
      <h1 className="section__title">Privacy Policy</h1>
      <span className="section__subtitle">How this site handles your information</span>

      <div className="container max-w-3xl text-pretty">
        <p className="mb-10 text-sm text-muted-foreground">
          Last updated: April 9, 2026. This policy applies to{" "}
          <a
            href="https://khatri-viren.github.io/"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            khatri-viren.github.io
          </a>{" "}
          (the “site”), operated by Viren Khatri.
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-foreground/90">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Summary</h2>
            <p className="text-muted-foreground">
              The site uses privacy-focused analytics (Umami) to see aggregate usage. The contact form
              sends messages through EmailJS. I do not sell your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              Analytics (Umami)
            </h2>
            <p className="text-muted-foreground">
              I use{" "}
              <a
                href="https://umami.is/"
                className="font-medium text-primary underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Umami
              </a>
              , a privacy-oriented analytics tool, to understand how visitors use the site (for example
              which pages are viewed and general traffic patterns). The analytics script is loaded from{" "}
              <span className="font-mono text-xs text-foreground/80">cloud.umami.is</span> and processes
              data on Umami&apos;s infrastructure.
            </p>
            <p className="text-muted-foreground">
              Umami is designed to avoid cookies for tracking in the usual setup and to minimize
              collection of personally identifiable data. Typical measurements include aggregated
              information such as page URL, referrer, browser and device type, and coarse location
              derived from IP (often with IP anonymization, depending on Umami configuration).
            </p>
            <p className="text-muted-foreground">
              For details on how Umami handles data, see the{" "}
              <a
                href="https://umami.is/privacy"
                className="font-medium text-primary underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Umami privacy policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Contact form</h2>
            <p className="text-muted-foreground">
              If you use the contact form, the details you submit (such as name, email address, and
              message) are transmitted through{" "}
              <a
                href="https://www.emailjs.com/"
                className="font-medium text-primary underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                EmailJS
              </a>{" "}
              so the message can be delivered. Processing is limited to responding to your inquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              Third-party content
            </h2>
            <p className="text-muted-foreground">
              The site may load fonts or icons from third-party CDNs (for example Google Fonts, Boxicons,
              Unicons). Those providers may receive technical data (such as IP address) as part of a
              normal web request. See their respective policies if you need more detail.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Your rights</h2>
            <p className="text-muted-foreground">
              Depending on where you live, you may have rights to access, correct, or delete personal
              data, or to object to certain processing. To exercise these rights or ask questions about
              this policy, contact me via the details on the{" "}
              <Link
                to={{ pathname: "/", hash: "#contact" }}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                contact
              </Link>{" "}
              section of the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Changes</h2>
            <p className="text-muted-foreground">
              I may update this policy from time to time. The “Last updated” date at the top will change
              when material updates are made.
            </p>
          </section>

          <p className="pt-4">
            <Link
              to="/"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
