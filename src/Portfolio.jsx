import React from "react";
import { useEffect } from "react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionClass = "max-w-4xl mx-auto px-4 py-12 text-white";

  // Modal state for viewing images/videos
  const [modal, setModal] = useState({ open: false, type: null, src: "", alt: "" });

  // Helper to open modal
  const openModal = (type, src, alt = "") => setModal({ open: true, type, src, alt });
  const closeModal = () => setModal({ open: false, type: null, src: "", alt: "" });

  return (
    <div className="bg-black min-h-screen font-sans text-white ">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold hover:text-indigo-400 transition duration-300 hover:scale-110">
          Krishna Enagandula
        </h1>
        <p className="text-gray-400 mt-2 hover:text-indigo-300 transition duration-300 hover:scale-110">
          UI/UX Designer & Frontend Developer
        </p>
        <div className="mt-6 flex justify-center">
          <div className="mt-6 flex justify-center">
            <img
              src="/Krishna.png"
              alt="Krishna Enagandula"
              className=" w-42 h-52 rounded-full object-cover border-2 border-indigo-500 shadow-lg hover:scale-150 transition-transform duration-300 "
            />
          </div>
        </div>
      </header>

      <motion.section
        className={sectionClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-400 transition duration-300 hover:scale-110">
          About Me
        </h2>
        <p className="text-gray-300 hover:text-indigo-200 transition duration-300 hover:scale-110">
          Hi, I’m a budding UI/UX designer with a background in BSc.IT. I love
          crafting digital experiences that are both visually appealing and
          user-focused. I'm passionate about bridging the gap between design and
          usability, currently exploring the intersection of UI/UX and frontend
          development.
        </p>
      </motion.section>

      <motion.section
        className={sectionClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold mb-8 hover:text-indigo-400 transition duration-300 hover:scale-110 text-center">
          Projects
        </h2>
        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* BentoGrid UI Component */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 hover:text-indigo-400 transition-colors duration-300">
              BentoGrid UI Component
            </h3>
            <p className="text-gray-300 mb-2">
              Custom UI component built using inspirations from Shadcn and Aceternity UI libraries.
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              <a
                href="https://www.figma.com/proto/LySEinaa4wRheWCWihYRgb/Untitled?page-id=0%3A1&node-id=3-7&viewport=171%2C83%2C0.24&t=UyKAr0lgkzxpbcp2-1&scaling=contain&content-scaling=fixed"
                className="text-blue-400 hover:text-white underline underline-offset-4 decoration-2 transition-colors duration-200 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                View on Figma Prototype
              </a>
              <a
                href="https://github.com/Krishna-onGit/BentoGridImages-UI-COMPONENT-/blob/main/Bento.jpg"
                className="text-blue-400 hover:text-white underline underline-offset-4 decoration-2 transition-colors duration-200 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <div className="flex justify-center mt-2 relative group">
              <img
                src="/Bento.jpg"
                alt="BentoGrid UI Demo"
                className="object-contain h-40 w-full rounded-lg shadow cursor-pointer transition-transform duration-200 hover:scale-105"
                loading="lazy"
                onClick={() => openModal("img", "/Bento.jpg", "BentoGrid UI Demo")}
                onMouseEnter={e => {
                  const label = e.currentTarget.nextSibling;
                  if (label) label.style.opacity = 1;
                }}
                onMouseLeave={e => {
                  const label = e.currentTarget.nextSibling;
                  if (label) label.style.opacity = 0;
                }}
              />
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded bg-black/70 text-indigo-200 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ pointerEvents: "none" }}
              >
                Click Me
              </span>
            </div>
            <button
              className="mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-semibold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={() => openModal("video", "/BentoGrid.mp4", "BentoGrid UI Demo Video")}
            >
              <span className="mr-2">▶️</span> Watch Demo Video
            </button>
          </motion.div>

          {/* MangaVerse */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 hover:text-indigo-400 transition-colors duration-300">
              MangaVerse
            </h3>
            <p className="text-gray-300 mb-2">
              An immersive platform for reading novels and manga with a user-centric UI and engaging design.
            </p>
            <a
              href="https://www.figma.com/proto/qJpFZqP8rHKxNsrKA7y6Dd/NIDEKI-READS?node-id=3-1072&t=SvXvDrAoUpVcGLqW-1"
              className="text-blue-400 hover:text-white underline underline-offset-4 decoration-2 transition-colors duration-200 font-medium mb-2"
              target="_blank"
              rel="noreferrer"
            >
              View Figma Prototype
            </a>
            <div className="flex justify-center mt-2 relative group">
              <img
                src="/NIDEKI READS.jpg"
                alt="MangaVerse Demo"
                className="object-contain h-40 w-full rounded-lg shadow cursor-pointer transition-transform duration-200 hover:scale-105"
                loading="lazy"
                onClick={() => openModal("img", "/NIDEKI READS.jpg", "MangaVerse Demo")}
                onMouseEnter={e => {
                  const label = e.currentTarget.nextSibling;
                  if (label) label.style.opacity = 1;
                }}
                onMouseLeave={e => {
                  const label = e.currentTarget.nextSibling;
                  if (label) label.style.opacity = 0;
                }}
              />
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded bg-black/70 text-indigo-200 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ pointerEvents: "none" }}
              >
                Click Me
              </span>
            </div>
            <button
              className="mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-semibold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={() => openModal("video", "/Manga reads.mp4", "MangaVerse Demo Video")}
            >
              <span className="mr-2">▶️</span> Watch Demo Video
            </button>
          </motion.div>

          {/* CA MONK */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 hover:text-indigo-400 transition-colors duration-300">
              CA MONK
            </h3>
            <p className="text-gray-300 mb-2">
              AI resume analyzer website design for CA
            </p>
            <a
              href="https://www.figma.com/proto/YWApmGcCgyUhvuK2XxgiPh/Krishna_UIAssignment_CAmonk?page-id=0%3A1&node-id=1-2&p=f&viewport=276%2C-252%2C0.26&t=Mdb4KcNf5z0Omama-1&scaling=scale-down&content-scaling=fixed"
              className="text-blue-400 hover:text-white underline underline-offset-4 decoration-2 transition-colors duration-200 font-medium"
              target="_blank"
              rel="noreferrer"
            >
              View on Figma Prototype
            </a>
            <div className="flex justify-center mt-2 relative group">
              <img
                src="/Krishna_UIAssignment_CAmonk.jpg"
                alt="CA Monk Demo"
                className="object-contain h-56 w-80 rounded-lg shadow cursor-pointer transition-transform duration-200 hover:scale-105"
                loading="lazy"
                onClick={() => openModal("img", "/Krishna_UIAssignment_CAmonk.jpg", "CA Monk Demo")}
                onMouseEnter={e => {
                  const label = e.currentTarget.nextSibling;
                  if (label) label.style.opacity = 1;
                }}
                onMouseLeave={e => {
                  const label = e.currentTarget.nextSibling;
                  if (label) label.style.opacity = 0;
                }}
              />
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded bg-black/70 text-indigo-200 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ pointerEvents: "none" }}
              >
                Click Me
              </span>
            </div>
          </motion.div>

          {/* Star Connect */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 hover:text-indigo-400 transition-colors duration-300">
              Star Connect
            </h3>
            <p className="text-gray-300 mb-2">
              A full-stack job portal for actors and directors with features like profile creation, auditions, and recommendation system.
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              <a
                href="https://www.figma.com/design/iHJGFOtxkh1UXhlCMfvQtP/STARCONNNECTUI?node-id=0-1&m=dev&t=JklJRhLSYEV7JBLB-1"
                className="text-blue-400 hover:text-white underline underline-offset-4 decoration-2 transition-colors duration-200 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Initial Design (Figma Design)
              </a>
              <a
                href="https://www.figma.com/design/TRCIsGzwc1IdgZve5Yq6Hy/Untitled?node-id=0-1&m=dev&t=IYeQ3x3RYLp9jKRC-1"
                className="text-blue-400 hover:text-white underline underline-offset-4 decoration-2 transition-colors duration-200 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Final Design (Website Images)
              </a>
            </div>
            <div className="flex flex-row gap-2 justify-center mt-2">
              <div className="relative group">
                <img
                  src="/AC HOME PAGE.png"
                  alt="Star Connect Home"
                  className="object-contain h-44 w-44 rounded-lg shadow cursor-pointer transition-transform duration-200 hover:scale-105"
                  loading="lazy"
                  onClick={() => openModal("img", "/AC HOME PAGE.png", "Star Connect Home")}
                  onMouseEnter={e => {
                    const label = e.currentTarget.nextSibling;
                    if (label) label.style.opacity = 1;
                  }}
                  onMouseLeave={e => {
                    const label = e.currentTarget.nextSibling;
                    if (label) label.style.opacity = 0;
                  }}
                />
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded bg-black/70 text-indigo-200 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ pointerEvents: "none" }}
                >
                  Click Me
                </span>
              </div>
              <div className="relative group">
                <img
                  src="/AC LIST.png"
                  alt="Star Connect List"
                  className="object-contain h-44 w-44 rounded-lg shadow cursor-pointer transition-transform duration-200 hover:scale-105"
                  loading="lazy"
                  onClick={() => openModal("img", "/AC LIST.png", "Star Connect List")}
                  onMouseEnter={e => {
                    const label = e.currentTarget.nextSibling;
                    if (label) label.style.opacity = 1;
                  }}
                  onMouseLeave={e => {
                    const label = e.currentTarget.nextSibling;
                    if (label) label.style.opacity = 0;
                  }}
                />
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded bg-black/70 text-indigo-200 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ pointerEvents: "none" }}
                >
                  Click Me
                </span>
              </div>
            </div>
            <button
              className="mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-semibold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={() => openModal("video", "/STARCONNECTProtfoliovid.mp4", "Star Connect Demo Video")}
            >
              <span className="mr-2">▶️</span> Watch Demo Video
            </button>
          </motion.div>
        </div>

        {/* Modal for images/videos */}
        {modal.open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-all"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-gray-900 rounded-xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-300 hover:text-red-400 text-2xl font-bold"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              {modal.type === "img" ? (
                <img
                  src={modal.src}
                  alt={modal.alt}
                  className="max-h-[70vh] w-auto rounded-lg shadow"
                  style={{ objectFit: "contain" }}
                  loading="eager"
                />
              ) : (
                <video
                  src={modal.src}
                  controls
                  autoPlay
                  className="max-h-[70vh] w-full rounded-lg shadow bg-black"
                  style={{ objectFit: "contain" }}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="mt-2 text-gray-300 text-center">{modal.alt}</div>
            </motion.div>
          </div>
        )}
      </motion.section>

      <motion.section
        className={sectionClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold mb-4 ">Skills & Tools</h2>
        <div className="text-gray-300 grid md:grid-cols-3 gap-8 mt-4">
          {/* Tools */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-2 hover:scale-105 transition duration-300">
              🧰 Tools
            </h3>
            <ul className="list-inside space-y-2 hover:scale-105 transition duration-300">
              <li>🖌️ Figma</li>
              <li>🎨 Canva</li>
              <li>🧼 Adobe Photoshop</li>
              <li>🎞️ Adobe Premiere Pro</li>
              <li>🧑‍💻 VS Code</li>
              <li>🐱 GitHub</li>
            </ul>
          </div>

          {/* Development */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-2 hover:scale-105 transition duration-300">
              💻 Development
            </h3>
            <ul className="list-inside space-y-2 hover:scale-105 transition duration-300">
              <li>📜 JavaScript</li>
              <li>🐍 Python</li>
              <li>⚛️ React.js</li>
              <li>🌬️ Tailwind CSS</li>
              <li>📱 Responsive Design</li>
            </ul>
          </div>

          {/* Design */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-2 hover:scale-105 transition duration-300">
              🎨 Design Skills
            </h3>
            <ul className="list-inside space-y-2 hover:scale-105 transition duration-300">
              <li>🧩 Wireframing</li>
              <li>🧪 Prototyping</li>
              <li>📐 UI Design</li>
              <li>🧠 Creative Thinking</li>
              <li>🛠️ Problem Solving</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={sectionClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold mb-4 hover:scale-y-110 transition duration-300">
          Contact
        </h2>
        <p className="text-gray-300  hover:scale-y-110 transition duration-300">
          📍 Parel, Mumbai 400013
        </p>
        <p className="text-gray-300  hover:scale-y-110 transition duration-300">
          📞 +91 7715056885
        </p>
        <p className="text-gray-300  hover:scale-y-110 transition duration-300">
          ✉️ enagandulakrishna224@gmail.com
        </p>
      </motion.section>

      <footer className="text-center text-gray-500 py-8 text-sm">
        &copy; {new Date().getFullYear()} Krishna Enagandula. All rights
        reserved.
      </footer>
    </div>
  );
}

