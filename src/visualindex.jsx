import React from "react";

const VisualIndex = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-gray-50 rounded-2xl shadow-lg text-gray-900 space-y-12 ">
      {/* Title and Subtitle */}
      <h1 className="text-3xl font-bold mb-2">
        The Visual Index – Digital Creative Showcase
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
            src="/TheVIsualIndex/1st draft.png"
            alt="Hero Visual"
            className="rounded-2xl shadow-2xl bg-white w-full h-full object-fit object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
        </div>
        {/* Right Image (same size as left) */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[340px] flex items-center justify-center md:justify-start pr-0 md:pr-4">
          <img
            src="/TheVIsualIndex/VisualWorl.png"
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
          Designers and creatives often struggle to present diverse visuals
          (ads, magazines, cards) in a way that feels modern, aesthetic, and
          interactive.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Possible Solution</h2>
        <p>
          A magazine-inspired, card-based interactive showcase where users can
          explore various categories (movies, football, fashion, lifestyle) and
          open detailed visual stories.
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Target Audience</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Creative recruiters (assess design + prototyping skills)</li>
          <li>UI/UX hiring managers (evaluate portfolio projects)</li>
          <li>Design enthusiasts</li>
        </ul>
      </section>

            {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Project Summary</h2>
        <p>
          Built an interactive, Pinterest-like grid of cards in Figma with hover
          and click effects. Clicking a card expands it into a full-screen
          visual + scrollable content (images/text/animations).
        </p>
      </section>

      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Research & Ideation</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Inspiration: Pinterest, Behance magazine layouts.</li>
          <li>
            Challenge: avoid repetition → main page with mixed creative cards +
            additional editorial-style pages.
          </li>
        </ul>
      </section>

       {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2"> Typography & Colors</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            {" "}
            Fonts: Crimson Text (primary)
          </li>
          <li>
            {" "}
            Colors: White (#FFFFFF) , Oil Black (#0C0C0C),
          
          </li>
        </ul>
      </section>


      {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          High-Fidelity Design
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Magazine aesthetic, dark/light contrast.</li>
          <li>Interactive cards, storytelling transitions</li>
          
        </ul>
      </section>

            {/* Text below grid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learnings & Takeaways</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Practiced component variants & interactions in Figma.</li>
          <li>
            Improved layout rhythm & visual hierarchy.
          </li>
          <li>
            Learned to balance aesthetic showcase vs usability.
          </li>
        </ul>
      </section>



      {/* Optional Gallery at End */}
      <section>
        <h2 className="text-xl font-semibold mb-4">More Project Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/TheVIsualIndex/MainBg2.png"
            alt="Option 1"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-contain object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/TheVIsualIndex/MainBg4.png"
            alt="Option 2"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-contain object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/TheVIsualIndex/MainBg 1.png"
            alt="Option 3"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-contain object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/TheVIsualIndex/MainBg6.png"
            alt="Option 4"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-contain object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/TheVIsualIndex/MainBg3.png"
            alt="Option 5"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-contain object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
          <img
            src="/TheVIsualIndex/MainBg8.png"
            alt="Option 6"
            className="rounded-xl shadow-2xl bg-white w-auto h-40 object-contain object-center transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default VisualIndex;
