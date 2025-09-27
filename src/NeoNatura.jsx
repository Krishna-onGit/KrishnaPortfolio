import React from "react";

export default function NeoNatura() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-gray-50 rounded-2xl shadow-lg text-gray-900 space-y-12 ">
      {/* Title and Subtitle */}
      <h1 className="text-3xl font-bold mb-2">
        NeoNatura – Futuristic Sustainable Brand Website
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        A modern, interactive, card-based showcase for creative visuals and
        editorial layouts.
      </p>
      {/* Hero/Image Grid: Two images side by side, same size, centered */}
      <div className="flex flex-col md:flex-row gap-5 items-center mb-8 justify-center">
        {/* Hero Image Left */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[340px]  flex items-center justify-center md:justify-end pl-0 md:pl-4">
          <img
            src="/NeoNatura/8.png"
            alt="Hero Visual"
            className="rounded-2xl shadow-2xl bg-white w-full h-full object-cover object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 2px 8px 0 rgba(0,0,0,0.10)  ",
            }}
          />
        </div>
        {/* Right Image (same size as left) */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[340px] flex items-center justify-center md:justify-start pr-0 md:pr-4">
          <img
            src="/NeoNatura/7.png"
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
          Most eco-brand websites look too plain or “green-themed,” failing to
          present sustainability as premium + futuristic.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Possible Solution</h2>
        <p>
          A luxury, futuristic sustainable lifestyle brand website with glowing
          product showcases, storytelling sections, and animated highlights.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Target Audience</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Eco-conscious premium customers.</li>
          <li>Lifestyle enthusiasts</li>
          <li>Modern luxury buyers</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Project Summary</h2>
        <p>
          Designed NeoNatura, blending futurism + sustainability. Showcased
          bamboo water bottles, glowing eco-products, and highlighted brand
          philosophy.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Research & Ideation</h2>
        <p>
          Looked at premium brands like Aēsop, Tesla, and eco-startups.Focused
          on eco-luxury positioning instead of generic eco-themes.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Design Thinking Process</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Hero with glowing product pods.</li>
          <li> Bento-inspired product grid.</li>
          <li> Brand philosophy + sustainability commitments.</li>
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
            Fonts: Playfair Display SC (primary), Bebas Neue (secondary), Lora (accent)
          </li>
          <li>
            {" "}
            Colors: dark shade of green with hints of blue (#043A2A), Black (#000000), Linear gradients with white accents,
            White with subtle noise background.
          </li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">High-Fidelity Design</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Dark futuristic backgrounds.</li>
          <li>Neon accents + luxury typography.</li>
          <li>Rotating highlights + hover animations.</li>
        </ul>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learnings & Takeaways</h2>
        <p>
          {" "}
          Learned brand storytelling through UI.{" "}
          Practiced luxury typography & futuristic color palettes.
          Strengthened consistency with hover/scroll interactions in Framer.
        </p>
      </section>

      {/* Optional Gallery at End */}
      <section>
        <h2 className="text-xl font-semibold mb-4">More Project Images</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* First row: 4 desktop images, horizontal rectangles */}
          <img
            src="/NeoNatura/1.png"
            alt="Desktop 1"
            className="rounded-xl shadow-2xl bg-white w-full h-36 object-cover object-center transition-transform duration-200 hover:scale-105 col-span-1"
            style={{
              aspectRatio: "16/7",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NeoNatura/2.png"
            alt="Desktop 2"
            className="rounded-xl shadow-2xl bg-white w-full h-36 object-cover object-center transition-transform duration-200 hover:scale-105 col-span-1"
            style={{
              aspectRatio: "16/7",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NeoNatura/3.png"
            alt="Desktop 3"
            className="rounded-xl shadow-2xl bg-white w-full h-36 object-cover object-center transition-transform duration-200 hover:scale-105 col-span-1"
            style={{
              aspectRatio: "16/7",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NeoNatura/4.png"
            alt="Desktop 4"
            className="rounded-xl shadow-2xl bg-white w-full h-36 object-cover object-center transition-transform duration-200 hover:scale-105 col-span-1"
            style={{
              aspectRatio: "16/7",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          {/* Second row: 2 phone images smaller and centered */}
          <div className="col-span-1"></div>
          <img
            src="/NeoNatura/5.png"
            alt="Phone 1"
            className="rounded-xl shadow-2xl bg-white mx-auto w-[70%] h-40 object-cover object-center transition-transform duration-200 hover:scale-105 col-span-1"
            style={{
              aspectRatio: "9/19",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/NeoNatura/6.png"
            alt="Phone 2"
            className="rounded-xl shadow-2xl bg-white mx-auto w-[70%] h-40 object-cover object-center transition-transform duration-200 hover:scale-105 col-span-1"
            style={{
              aspectRatio: "9/19",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <div className="col-span-1"></div>
        </div>
      </section>
    </div>
  );
}
