import React from "react";

export default function Netbanking() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-gray-50 rounded-2xl shadow-lg text-gray-900 space-y-12 ">
      {/* Title and Subtitle */}
      <h1 className="text-3xl font-bold mb-2">
        NetBanking App – Mobile Banking Redesign
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Worked on designing a NetBanking App UI in Figma. The idea was to make
        banking simple, modern, and interactive while keeping trust and clarity
        at the center. Here’s how I approached it !!
      </p>
      {/* Hero/Image Grid: Two images side by side, same size, centered */}
      <div className="flex flex-col md:flex-row gap-5 items-center mb-8 justify-center">
        {/* Hero Image Left */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[340px] flex items-center justify-center md:justify-end pl-0 md:pl-4">
          <img
            src="/NetBanking/1.png"
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
            src="/NetBanking/4.png"
            alt="Right Visual"
            className="rounded-2xl shadow-2xl bg-white w-full h-full object-fit object-center transition-transform duration-200 hover:scale-105"
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
          Traditional mobile banking apps feel cluttered and unintuitive, making
          it difficult for users to find what they need quickly.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Possible Solution</h2>
        <p>
          A clean, modern netbanking mobile app with easy navigation, essential
          features upfront, and minimal but professional styling.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Target Audience</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Everyday banking users (ages 18–40)</li>
          <li>Users seeking quick access to balances, transfers, and cards</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Project Summary</h2>
        <p>
          Created a mobile app UI with a modern side menu, essential actions
          (Transfers, Bills, Cards, Settings), and advertisement space.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Research & Ideation</h2>
        <p>
          {" "}
          Studied apps like Revolut, Paytm, and Wise.Identified user frustration
          with overloaded dashboards.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Design Thinking Process</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Minimal hamburger menu with icons + labels.</li>
          <li>
            Dashboard with account balance, quick actions, recent activity.
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2"> Project Timeline</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li> Week 1: Research & Ideation</li>
          <li> Week 2: Wireframes & Visual explorations</li>
          <li> Week 3: page design & iteration.</li>
          <li> Week 4: Content refinements & hover/scroll interactions</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2"> Typography & Colors</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            {" "}
            Fonts: Roboto Flex (primary), Roboto Condensed (secondary) , Inter
            (accent)
          </li>
          <li>
            {" "}
            Colors: Old Lace (#FFF2E6), Black (#000000), gradient , low
            saturation overlays Charcoal (#1C1C1C), White with subtle noise
            background.
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">High-Fidelity Design</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li> Clean typography, strong contrast</li>
          <li> Ad banner integrated in side menu (non-intrusive)</li>
          <li> Consistent grid-based design</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learnings & Takeaways</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li> Learned mobile-first UI rules.</li>
          <li> Balanced business needs (ads) with usability</li>
          <li> Practiced visual consistency across app screens.</li>
        </ul>
      </section>

      {/* Optional Gallery at End */}
      <section>
        <h2 className="text-xl font-semibold mb-4">More Project Images</h2>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/NetBanking/2.png"
            alt="Option 1"
            className="rounded-xl shadow-2xl bg-white w-full h-64 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NetBanking/3.png"
            alt="Option 2"
            className="rounded-xl shadow-2xl bg-white w-full h-64 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NetBanking/5.png"
            alt="Option 3"
            className="rounded-xl shadow-2xl bg-white w-full h-64 object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NetBanking/6.png"
            alt="Option 4"
            className="rounded-xl shadow-2xl bg-white w-full h-64 object-cover object-center transition-transform duration-200 hover:scale-105"
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
