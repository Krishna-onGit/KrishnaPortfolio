import React from "react";

export default function MangaVerse() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-gray-50 rounded-2xl shadow-lg text-gray-900 space-y-12 ">
      {/* Title and Subtitle */}
      <h1 className="text-3xl font-bold mb-2">
        MangaVerse – Manga & Novel Reading Platform
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Designed a flow that balances discoverability + continuity highlighting
        major manga. Here’s how I approached it !!
      </p>
      {/* Hero/Image Grid: Two images side by side, same size, centered */}
      <div className="flex flex-col md:flex-row gap-5 items-center mb-8 justify-center">
        {/* Hero Image Left */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[340px] flex items-center justify-center md:justify-end pl-0 md:pl-4">
          <img
            src="/MangaVerse/8-min.png"
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
            src="/MangaVerse/7-min.png"
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
          Manga and light novel fans lack a flashy, aesthetic, community-driven
          web platform where they can read, discover, and connect.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Possible Solution</h2>
        <p>
          An anime-inspired website with bento grid layouts, vibrant typography,
          interactive animations, and sections for stories, community, and
          reading.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Target Audience</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Manga/Anime fans (Gen-Z & Millennials)</li>
          <li>Digital readers & fan community members</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Project Summary</h2>
        <p>
          Created MangaVerse, a flashy, modern web reading platform. Features
          include a hero bento grid, hover animations, immersive story cards,
          and a storytelling-first navigation style.
        </p>
        
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Research & Ideation</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            Inspiration: Crunchyroll, MangaDex, Anime streaming platforms.
          </li>
          <li>
            Decided tone: Flashy + energetic + immersive.
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Design Thinking Process</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
           Hero with bento grid + call-to-action.
          </li>
          <li>
           Card layouts for manga chapters & stories.
          </li>
          <li>
            Menu design with immersive categories.
          </li>
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
          <li>Bright, Japanese-inspired color palette.</li>
          <li>Google fonts with Japanese aesthetics.</li>
          <li>
            Smooth hover states, animations, and glowing buttons.
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learnings & Takeaways</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
           Practiced bento grid hero layouts.
          </li>
          <li>
            Improved color psychology in entertainment UI.
          </li>
          <li>
            Learned how to balance flashy vs usability for Gen-Z apps.
          </li>
        </ul>
      </section>

      {/* Optional Gallery at End */}
      <section>
        <h2 className="text-xl font-semibold mb-4">More Project Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/MangaVerse/1-min.png"
            alt="Option 1"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/MangaVerse/2-min.png"
            alt="Option 2"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/MangaVerse/4-min.png"
            alt="Option 3"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/MangaVerse/5-min.png"
            alt="Option 4"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/MangaVerse/3-min.png"
            alt="Option 5"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/MangaVerse/6-min.png"
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
