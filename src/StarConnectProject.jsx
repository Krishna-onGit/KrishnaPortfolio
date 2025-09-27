import React from "react";

export default function StarConnectProject() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-gray-50 rounded-2xl shadow-lg text-gray-900 space-y-12 ">
      {/* Title and Subtitle */}
      <h1 className="text-3xl font-bold mb-2">
        STARCONNECT – Job Portal for Actors & Casting Directors
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        A role-based job marketplace connecting actors with casting directors —
        Designed an intuitive, media-first platform to simplify auditions and
        job discovery in the entertainment industry. Here’s how I approached it
        !!
      </p>
      {/* Hero/Image Grid: Two images side by side, same size, centered */}
      <div className="flex flex-col md:flex-row gap-5 items-center mb-8 justify-center">
        {/* Hero Image Left */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[340px] flex items-center justify-center md:justify-end pl-0 md:pl-4">
          <img
            src="/STARCONNECT/Bento-min.jpg"
            alt="Hero Visual"
            className="rounded-2xl shadow-2xl bg-white w-full h-full object-contain object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
        </div>
        {/* Right Image (same size as left) */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[340px] flex items-center justify-center md:justify-start pr-0 md:pr-4">
          <img
            src="/STARCONNECT/Hero-min.png"
            alt="Right Visual"
            className="rounded-2xl shadow-2xl bg-white w-full h-full object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
        </div>
      </div>

      {/* Problem Statement */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Problem Statement</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            Existing job portals are generic and lack support for media-rich
            actor profiles.
          </li>
          <li>
            Casting directors face difficulty filtering applicants and managing
            audition logistics.
          </li>
          <li>
            Actors often struggle to track application statuses and rely on
            uncertain communication.
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Possible Solution</h2>
        <p>Build a role-based platform with tailored dashboards:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            Actors: Easy portfolio creation with images + application tracking.
          </li>
          <li>
            Directors: Streamlined job posting, applicant management, and
            audition setup.
          </li>
          <li>Admins: Platform monitoring and quality assurance.</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Target Audience</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Actors: Aspiring & professional performers seeking roles.</li>
          <li>Casting Directors: Film/series recruiters managing auditions.</li>
          <li>Admins: Platform overseers ensuring smooth operations.</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Project Summary</h2>
        <p>
          STARCONNECT solves the frustrations of both sides by focusing on clear
          UI flows, intuitive navigation, and role-based dashboards. Every
          interaction was designed to reduce friction:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>One-step profile setup for actors.</li>
          <li>Compact job cards with audition tags for quick scanning.</li>
          <li>
            Clear application statuses (Accepted, Pending, Rejected) to keep
            actors informed.
          </li>
          <li>Minimalist director dashboard for fast decision-making.</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Research & Ideation</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            Actors value visibility of audition type upfront (online vs
            offline).
          </li>
          <li>
            Directors need quick filters & search to avoid information overload.
          </li>
          <li>
            Both sides want simplified, clean interfaces without distractions.
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Design Thinking Process</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            Empathize: Interviews → actors want media-first profiles, directors
            want simple applicant screening.
          </li>
          <li>
            {" "}
            Define → How can we design a job portal that feels built for the
            entertainment industry?
          </li>
          <li>
            {" "}
            Ideate → Card-based UI for jobs, dashboard segregation, application
            tracker with color-coded statuses.
          </li>
          <li>
            {" "}
            Prototype → Wireframes → Mid-fidelity → High-fidelity screens.
          </li>
          <li>
            {" "}
            Test → Focus on usability, accessibility, and reducing steps in the
            flow.
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Key UX/UI Solutions (How STARCONNECT Solves It)
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Role-Based Dashboards</li>
          <li>Media-First Actor Profiles</li>
          <li>Job Discovery UI</li>
          <li>Application Tracking UX</li>
          <li>Notification & Feedback Loops</li>
          <li>Minimalist, Accessible UI</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2"> Project Timeline</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li> Week 1–2: User research, journey mapping, wireframes.</li>
          <li>
            {" "}
            Week 3: Mid-fidelity prototypes for flows (actor → apply, director →
            post job).
          </li>
          <li> Week 4: High-fidelity UI + design system.</li>
          <li> Week 5: Usability tests, refinements.</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2"> Typography & Colors</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li> Fonts: Poppins (modern, clean, professional feel).</li>
          <li>
            {" "}
            Colors: Deep Indigo (#0F4C81), White (#FFFFFF), Glazed Carrot
            (#A94E20), Coral (#FF7A59), Status Colors: Accepted = Green
            (#22C55E) Rejected = Red (#EF4444) Pending = Amber (#FBBF24)
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">High-Fidelity Design</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Landing page with role selector.</li>
          <li>Actor dashboard: profile setup + “Your Applications” tracker.</li>
          <li>
            Job listing page: card-based, filterable, audition tags visible.
          </li>
          <li>
            Director dashboard: applicant list with accept/reject actions.
          </li>
          <li>
            Application detail modal: one-tap decision-making for directors.
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learnings & Takeaways</h2>
         <ul className="list-disc list-inside space-y-1 ml-4">
          <li>UX lesson: Actors want simplicity; too many input fields cause drop-offs → solved via minimal profile setup.</li>
          <li>UI lesson: Role-based segregation reduces clutter and improves navigation.</li>
          <li>Feedback loops are critical: Upload states + application statuses built user trust.</li>
          <li>Design insight: In media-focused industries, visual-first UI (reels, photos, thumbnails) matters more than text-heavy resumes.</li>
        </ul>
      </section>

      {/* Optional Gallery at End */}
      <section>
        <h2 className="text-xl font-semibold mb-4">More Project Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/STARCONNECT/JOBS PAGE-min.png"
            alt="Option 1"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/STARCONNECT/AC HOME PAGE 4-min.png"
            alt="Option 2"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/STARCONNECT/ACTOR DASHBOARD-min.png"
            alt="Option 3"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/STARCONNECT/DC DETAILS-min.png"
            alt="Option 4"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/STARCONNECT/DC JOBS-min.png"
            alt="Option 5"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/STARCONNECT/DC ACTORS LSIT-min.png"
            alt="Option 6"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
        </div>
      </section>
    </div>
  );
}
