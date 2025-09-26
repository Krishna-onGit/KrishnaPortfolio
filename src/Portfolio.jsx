import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import VisualIndex from "./VisualIndex";

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
  const [modal, setModal] = useState({
    open: false,
    type: null,
    src: "",
    alt: "",
  });

  // Modal state for Visual Index project
  const [visualIndexModal, setVisualIndexModal] = useState(false);

  // Helper to open/close modal
  const openModal = (type, src, alt = "") =>
    setModal({ open: true, type, src, alt });
  const closeModal = () =>
    setModal({ open: false, type: null, src: "", alt: "" });

  return (
    <div className="bg-black min-h-screen font-sans text-white ">
      {/* ---------- HEADER ---------- */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold hover:text-indigo-400 transition duration-300 hover:scale-110">
          Krishna Enagandula
        </h1>
        <p className="text-gray-400 mt-2 hover:text-indigo-300 transition duration-300 hover:scale-110">
          UI/UX Designer & Frontend Developer
        </p>
        <div className="mt-6 flex justify-center">
          <img
            src="/Krishna.png"
            alt="Krishna Enagandula"
            className="w-42 h-52 rounded-full object-cover border-2 border-indigo-500 shadow-lg hover:scale-150 transition-transform duration-300"
          />
        </div>
      </header>

      {/* ---------- ABOUT ---------- */}
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

      {/* ---------- PROJECTS ---------- */}
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
        <div className="flex flex-col gap-10">
          {/* Visual Index Project */}
          <motion.div
            className="flex flex-col md:flex-row items-center rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300"
            style={{ background: "none", boxShadow: "none" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className="w-full md:w-[420px] h-[320px] flex items-center justify-center bg-gray-800 rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-10 cursor-pointer transition-transform duration-300 hover:scale-105 group"
              onClick={() =>
                openModal("video", "/MAGAZINE.mp4", "Visual Index Demo Video")
              }
              tabIndex={0}
              role="button"
              aria-label="Play Visual Index Demo Video"
            >
              <img
                src="/MAINSCREEN.png"
                alt="Visual Index Main Screen"
                className="rounded-2xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <span className="absolute text-white bg-black/60 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm pointer-events-none">
                ▶️ Watch Demo
              </span>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-1 hover:text-indigo-400 transition-colors duration-300">
                The Visual Index
              </h3>
              <p className="text-gray-300 mb-4">
                Card-based UI inspired by editorial layouts & ad{" "}
                <showcases className="br">
                  It’s not just a pretty UI — it’s a study in scalability,
                  reusability, and motion. Helped me understand how to design
                  like product teams: systems first, visuals second. Motion
                  design made the prototype feel alive, transforming static
                  layouts into immersive experiences.
                </showcases>
              </p>
              <div className="flex gap-4">
                <button
                  className="px-5 py-2 rounded-lg border-2 border-indigo-500 text-indigo-400 font-semibold bg-transparent hover:bg-indigo-900/10 hover:text-indigo-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 "
                  onClick={() => setVisualIndexModal(true)}
                >
                  View Project
                </button>
                <a
                  href="https://www.figma.com/proto/ItwPsg8mznfWoKXpoB3ub7/Visual-Index?page-id=0%3A1&node-id=9-13&viewport=-310%2C241%2C0.14&t=YBtoUGirssb6UMHG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-bold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
          </motion.div>

          {/* Star Connect Project */}
          <motion.div
            className="flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-6 hover:scale-[1.01] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2 hover:text-indigo-400">
              Star Connect
            </h3>
            <p className="text-gray-300 mb-2">
              A full-stack job portal for actors and directors with features
              like profile creation, auditions, and recommendation system.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-2 mb-2">
              <a
                href="https://www.figma.com/design/iHJGFOtxkh1UXhlCMfvQtP/STARCONNNECTUI"
                className="text-blue-400 hover:text-white underline underline-offset-4 decoration-2 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Initial Design (Figma)
              </a>
              <a
                href="https://www.figma.com/design/TRCIsGzwc1IdgZve5Yq6Hy/Untitled"
                className="text-blue-400 hover:text-white underline underline-offset-4 decoration-2 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Final Design
              </a>
            </div>

            {/* Images */}
            <div className="flex flex-row gap-2 justify-center mt-2">
              {[
                { src: "/AC HOME PAGE.png", alt: "Star Connect Home" },
                { src: "/AC LIST.png", alt: "Star Connect List" },
              ].map((img, idx) => (
                <div key={idx} className="relative group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-contain h-44 w-44 rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                    onClick={() => openModal("img", img.src, img.alt)}
                  />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded bg-black/70 text-indigo-200 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click Me
                  </span>
                </div>
              ))}
            </div>

            {/* Video */}
            <button
              className="mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-semibold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200"
              onClick={() =>
                openModal(
                  "video",
                  "/STARCONNECTProtfoliovid.mp4",
                  "Star Connect Demo Video"
                )
              }
            >
              <span className="mr-2">▶️</span> Watch Demo Video
            </button>
          </motion.div>
        </div>

        {/* Modal (shared) */}
        {modal.open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all overflow-hidden"
            onClick={closeModal}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
            style={{ overscrollBehavior: "none" }}
          >
            <style>{`body { overflow: hidden !important; }`}</style>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-gray-900 rounded-xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
              style={{ overflowY: "auto", maxHeight: "90vh" }}
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
                  className="max-h-[70vh] w-auto rounded-lg shadow-2xl bg-white object-contain transition-transform duration-200 hover:scale-105"
                  style={{
                    boxShadow:
                      "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
                  }}
                  loading="eager"
                />
              ) : (
                <video
                  src={modal.src}
                  controls
                  autoPlay
                  className="max-h-[70vh] w-full rounded-lg shadow-2xl bg-black object-contain"
                  style={{
                    boxShadow:
                      "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="mt-2 text-gray-300 text-center">{modal.alt}</div>
            </motion.div>
          </div>
        )}
        {/* Visual Index Modal */}
        <AnimatePresence>
          {visualIndexModal && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm overflow-hidden"
              onClick={() => setVisualIndexModal(false)}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
              style={{ overscrollBehavior: "none" }}
            >
              <style>{`body { overflow: hidden !important; }`}</style>
              <div
                className="relative w-full md:max-w-3xl bg-gray-900 rounded-t-2xl md:rounded-2xl shadow-2xl p-0 md:p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-400 text-2xl font-bold z-10"
                  onClick={() => setVisualIndexModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="pt-10 md:pt-0">
                  <VisualIndex />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* ---------- SKILLS ---------- */}
      <motion.section
        className={sectionClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-4 text-gray-300">
          {/* Tools */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-lg font-semibold mb-2">🧰 Tools</h3>
            <ul className="space-y-2">
              <li>🖌️ Figma</li>
              <li>🎨 Canva</li>
              <li>🧼 Photoshop</li>
              <li>🎞️ Premiere Pro</li>
              <li>🧑‍💻 VS Code</li>
              <li>🐱 GitHub</li>
            </ul>
          </div>

          {/* Development */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-lg font-semibold mb-2">💻 Development</h3>
            <ul className="space-y-2">
              <li>📜 JavaScript</li>
              <li>🐍 Python</li>
              <li>⚛️ React.js</li>
              <li>🌬️ Tailwind CSS</li>
              <li>📱 Responsive Design</li>
            </ul>
          </div>

          {/* Design */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-lg font-semibold mb-2">🎨 Design Skills</h3>
            <ul className="space-y-2">
              <li>🧩 Wireframing</li>
              <li>🧪 Prototyping</li>
              <li>📐 UI Design</li>
              <li>🧠 Creative Thinking</li>
              <li>🛠️ Problem Solving</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ---------- CONTACT ---------- */}
      <motion.section
        className={sectionClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-300">📍 Parel, Mumbai 400013</p>
        <p className="text-gray-300">📞 +91 7715056885</p>
        <p className="text-gray-300">✉️ enagandulakrishna224@gmail.com</p>
      </motion.section>

      {/* ---------- FOOTER ---------- */}
      <footer className="text-center text-gray-500 py-8 text-sm">
        &copy; {new Date().getFullYear()} Krishna Enagandula. All rights
        reserved.
      </footer>
    </div>
  );
}
