import React from "react";

export default function Nomad() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-gray-50 rounded-2xl shadow-lg text-gray-900 space-y-12 ">
      {/* Title and Subtitle */}
      <h1 className="text-3xl font-bold mb-2">
        NOMAD – Travel Storytelling & Trip Platform
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        A modern, interactive, card-based showcase for creative visuals and
        editorial layouts. Here’s how I approached it !!
      </p>
      {/* Hero/Image Grid: Two images side by side, same size, centered */}
      <div className="flex flex-col md:flex-row gap-5 items-center mb-8 justify-center">
        {/* Hero Image Left */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[340px] flex items-center justify-center md:justify-end pl-0 md:pl-4">
          <img
            src="/NOMAD/Nomadwork.png"
            alt="Hero Visual"
            className="rounded-2xl shadow-2xl bg-white w-full h-full object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
        </div>
        {/* Right Image (same size as left) */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[340px] flex items-center justify-center md:justify-start pr-0 md:pr-4">
          <img
            src="/NOMAD/Nomad.png"
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
        <p>
          Solo travelers and digital nomads often struggle with finding reliable
          communities, authentic travel stories, and safe trips they can join.
          Casual tourists, too, face decision fatigue while planning trips with
          too much scattered information online
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Possible Solution</h2>
        <p>
          Design a digital platform that brings together authentic travel
          stories, guides, trip enrollment features, and a focus on community
          connection.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Target Audience</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Solo Travelers → looking to find groups and safe trips.</li>
          <li>
            Casual Tourists → seeking simple, trustworthy guides & itineraries.
          </li>
          <li>Digital Nomads → creating and consuming authentic content.</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Project Summary</h2>
        <p>
          NOMAD is a storytelling and community-driven travel platform. It
          blends UI aesthetics with UX principles to create: a modern,
          adventurous landing page, sections for trip enrollment, blogs,
          galleries, reviews, highlights, and consistent CTAs.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Research & Ideation</h2>
        <p>
          {" "}
          Started with card-based layouts, iterated multiple times on the hero
          section, added Why Nomad, Highlights, and Reviews sections, balancing
          storytelling with clarity.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Design Thinking Process</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Empathize → Research traveler pain points.</li>
          <li> Define → Need for stories + community + trips in one place</li>
          <li> Ideate → Explored layouts & interactions.</li>
          <li> Prototype → Wireframes → High-fidelity screens.</li>
          <li> Test → Reviewed usability, CTA placement, and hierarchy</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2"> Project Timeline</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li> Week 1: Research & Ideation</li>
          <li> Week 2: Wireframes & Visual explorations</li>
          <li> Week 3: Landing page design & iteration.</li>
          <li> Week 4: Content refinements & hover/scroll interactions</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2"> Typography & Colors</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            {" "}
            Fonts: Segoe UI (primary), Michroma (tech), Caveat (handwritten)
          </li>
          <li>
            {" "}
            Colors: Crimson (#EB235C), White (#FFFFFF), Yellow (#F1C40F),
            Charcoal (#1C1C1C), White with subtle noise background.
          </li>
        </ul>
      </section>

      
      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          High-Fidelity Design
        </h2>
        <p> Landing page includes Hero, Trip sections, Upcoming Trips, Why Nomad, Gallery, Highlights, Reviews,
 and Footer</p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learnings & Takeaways</h2>
        <p> Importance of visual hierarchy, balancing storytelling and functionality, learning Figma auto-layout &
 hover states, CTA prioritization, and consistency with design systems</p>
      </section>

      {/* Optional Gallery at End */}
      <section>
        <h2 className="text-xl font-semibold mb-4">More Project Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/NOMAD/1.png"
            alt="Option 1"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-fit object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NOMAD/2.png"
            alt="Option 2"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-fit object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NOMAD/8.png"
            alt="Option 3"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-fit object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NOMAD/3.png"
            alt="Option 4"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-fit object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NOMAD/4.png"
            alt="Option 5"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-fit object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NOMAD/5.png"
            alt="Option 6"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-fit object-center transition-transform duration-200 hover:scale-105"
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
