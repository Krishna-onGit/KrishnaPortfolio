import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import VisualIndex from "./visualIndex";
import Nomad from "./Nomad";
import Netbanking from "./Netbanking";
import NeoNatura from "./NeoNatura";
import StarConnectProject from "./StarConnectProject";
import MangaVerse from "./MangaVerse";

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

  // Modal state for each project
  const [visualIndexModal, setVisualIndexModal] = useState(false);
  const [nomadModal, setNomadModal] = useState(false);
  const [netbankingModal, setNetbankingModal] = useState(false);
  const [neoNaturaModal, setNeoNaturaModal] = useState(false);
  const [starConnectModal, setStarConnectModal] = useState(false);
  const [mangaVerseModal, setMangaVerseModal] = useState(false);

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

      {/* ---------- DESIGN ROADMAP ---------- */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="mx-auto max-w-2xl px-2 py-10">
          <h2 className="mb-3 text-center text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
            My 5-Step Design Roadmap
          </h2>
          <p className="mb-12 text-center text-lg text-indigo-200 font-medium tracking-wide">
            A compact, shareable roadmap you can drop into any project page.
          </p>
          <div className="relative">
            {/* Vertical Dotted Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 border-l-2 border-dashed border-gray-300 -translate-x-1/2 z-0"></div>
            <ol className="relative z-10 flex flex-col gap-16">
              {/* Step 1 */}
              <li className="flex items-center justify-start relative group">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-gray-900 rounded-xl p-6 shadow-lg max-w-xs text-right transition duration-200 group-hover:ring-2 group-hover:ring-indigo-400 group-hover:shadow-[0_0_24px_0_rgba(99,102,241,0.4)] group-hover:bg-gray-800/90">
                    <h3 className="text-lg font-bold text-indigo-200 drop-shadow-sm mb-2">
                      Discover
                    </h3>
                    <p className="text-base text-indigo-100 font-medium">
                      Define problems & goals with clarity.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg border-4 border-black transition duration-200 group-hover:brightness-125 group-hover:scale-110 group-hover:shadow-[0_0_32px_0_rgba(251,191,36,0.5)]">
                    {/* Lightbulb icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v1m0 16v1m8.485-9h1M3.515 12h1m15.364 6.364l.707.707M4.929 4.929l.707.707M17.657 6.343l.707-.707M6.343 17.657l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </li>
              {/* Step 2 */}
              <li className="flex items-center justify-end relative group">
                <div className="w-1/2"></div>
                <div className="flex flex-col items-center z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-lg border-4 border-black transition duration-200 group-hover:brightness-125 group-hover:scale-110 group-hover:shadow-[0_0_32px_0_rgba(56,189,248,0.5)]">
                    {/* Brain icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.5c-1.5 0-3 .75-3.75 2.25C7.5 8.25 6 9 4.5 9c0 3 1.5 6 4.5 7.5V21h6v-4.5c3-1.5 4.5-4.5 4.5-7.5 0-1.5-1.5-2.25-3-2.25C15 5.25 13.5 4.5 12 4.5z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-1/2 pl-8 flex justify-start">
                  <div className="bg-gray-900 rounded-xl p-6 shadow-lg max-w-xs text-left transition duration-200 group-hover:ring-2 group-hover:ring-sky-400 group-hover:shadow-[0_0_24px_0_rgba(56,189,248,0.4)] group-hover:bg-gray-800/90">
                    <h3 className="text-lg font-bold text-indigo-200 drop-shadow-sm mb-2">
                      Research
                    </h3>
                    <p className="text-base text-indigo-100 font-medium">
                      User interviews, market & competitor study.
                    </p>
                  </div>
                </div>
              </li>
              {/* Step 3 */}
              <li className="flex items-center justify-start relative group">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-gray-900 rounded-xl p-6 shadow-lg max-w-xs text-right transition duration-200 group-hover:ring-2 group-hover:ring-emerald-400 group-hover:shadow-[0_0_24px_0_rgba(52,211,153,0.4)] group-hover:bg-gray-800/90">
                    <h3 className="text-lg font-bold text-indigo-200 drop-shadow-sm mb-2">
                      Wireframe
                    </h3>
                    <p className="text-base text-indigo-100 font-medium">
                      Map layouts & flows with speed.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg border-4 border-black transition duration-200 group-hover:brightness-125 group-hover:scale-110 group-hover:shadow-[0_0_32px_0_rgba(52,211,153,0.5)]">
                    {/* Pencil icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L7.5 21H3v-4.5L16.732 3.732z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </li>
              {/* Step 4 */}
              <li className="flex items-center justify-end relative group">
                <div className="w-1/2"></div>
                <div className="flex flex-col items-center z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-violet-600 text-white shadow-lg border-4 border-black transition duration-200 group-hover:brightness-125 group-hover:scale-110 group-hover:shadow-[0_0_32px_0_rgba(139,92,246,0.5)]">
                    {/* Figma icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="h-7 w-7"
                    >
                      <path
                        fill="currentColor"
                        d="M128 128a32 32 0 1 0-32-32h32a32 32 0 0 0 0-64H96a32 32 0 0 0 0 64a32 32 0 1 0 0 64a32 32 0 1 0 32 32V128Zm0 96a32 32 0 0 1-32-32h32a32 32 0 0 1 0 64Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-1/2 pl-8 flex justify-start">
                  <div className="bg-gray-900 rounded-xl p-6 shadow-lg max-w-xs text-left transition duration-200 group-hover:ring-2 group-hover:ring-violet-400 group-hover:shadow-[0_0_24px_0_rgba(139,92,246,0.4)] group-hover:bg-gray-800/90">
                    <h3 className="text-lg font-bold text-indigo-200 drop-shadow-sm mb-2">
                      Design System
                    </h3>
                    <p className="text-base text-indigo-100 font-medium">
                      Build tokens & reusable Figma components.
                    </p>
                  </div>
                </div>
              </li>
              {/* Step 5 */}
              <li className="flex items-center justify-start relative group">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-gray-900 rounded-xl p-6 shadow-lg max-w-xs text-right transition duration-200 group-hover:ring-2 group-hover:ring-rose-400 group-hover:shadow-[0_0_24px_0_rgba(251,113,133,0.4)] group-hover:bg-gray-800/90">
                    <h3 className="text-lg font-bold text-indigo-200 drop-shadow-sm mb-2">
                      Prototype & Launch
                    </h3>
                    <p className="text-base text-indigo-100 font-medium">
                      Interactive prototypes, testing, and handoff.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-lg border-4 border-black transition duration-200 group-hover:brightness-125 group-hover:scale-110 group-hover:shadow-[0_0_32px_0_rgba(251,113,133,0.5)]">
                    {/* Rocket icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7M12 22C6.477 22 2 17.523 2 12c0-1.657.336-3.236.936-4.677L12 12l9.064-4.677A9.956 9.956 0 0022 12c0 5.523-4.477 10-10 10z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </li>
            </ol>
          </div>
        </div>
      </section>
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
                openModal(
                  "video",
                  "/Videso/MAGAZINE.mp4",
                  "Visual Index Demo Video"
                )
              }
              tabIndex={0}
              role="button"
              aria-label="Play Visual Index Demo Video"
            >
              <img
                src="/TheVIsualIndex/MAINSCREEN.png"
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

          {/* NOMAD Project */}
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
                openModal("video", "/Videso/NOMAD (1).mp4", "NOMAD Demo Video")
              }
              tabIndex={0}
              role="button"
              aria-label="Play NOMAD Demo Video"
            >
              <img
                src="/NOMAD/Nomad.png"
                alt="NOMAD Main Screen"
                className="rounded-2xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <span className="absolute text-white bg-black/60 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm pointer-events-none">
                ▶️ Watch Demo
              </span>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-1 hover:text-indigo-400 transition-colors duration-300">
                NOMAD
              </h3>
              <p className="text-gray-300 mb-4">
                A travel planning app that helps users discover, organize, and
                share unique journeys. Focused on seamless UX, map integration,
                and collaborative trip building.
              </p>
              <div className="flex gap-4">
                <button
                  className="px-5 py-2 rounded-lg border-2 border-indigo-500 text-indigo-400 font-semibold bg-transparent hover:bg-indigo-900/10 hover:text-indigo-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  onClick={() => setNomadModal(true)}
                >
                  View Project
                </button>
                <a
                  href="https://www.figma.com/proto/dHOnXyD0uYJkaHS3r66Uq6/NOMAD?page-id=0%3A1&node-id=1-2&p=f&viewport=-83%2C97%2C0.06&t=Hj60QHo0HwDblKnh-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-bold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
          </motion.div>

          {/* Netbanking Project */}
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
                openModal(
                  "video",
                  "/Videso/Netbanking.mp4",
                  "Netbanking Demo Video"
                )
              }
              tabIndex={0}
              role="button"
              aria-label="Play Netbanking Demo Video"
            >
              <img
                src="/NetBanking/Netbank.png"
                alt="Netbanking Main Screen"
                className="rounded-2xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <span className="absolute text-white bg-black/60 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm pointer-events-none">
                ▶️ Watch Demo
              </span>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-1 hover:text-indigo-400 transition-colors duration-300">
                Netbanking
              </h3>
              <p className="text-gray-300 mb-4">
                Modern netbanking UI/UX with focus on security, accessibility,
                and intuitive navigation. Includes dashboard, transactions, and
                analytics.
              </p>
              <div className="flex gap-4">
                <button
                  className="px-5 py-2 rounded-lg border-2 border-indigo-500 text-indigo-400 font-semibold bg-transparent hover:bg-indigo-900/10 hover:text-indigo-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  onClick={() => setNetbankingModal(true)}
                >
                  View Project
                </button>
                <a
                  href="https://www.figma.com/proto/IAP2MwbV6WVNd9lXfAX56b/Net-Banking?page-id=0%3A1&node-id=140-398&p=f&viewport=-2180%2C358%2C0.3&t=Fv1Azx6Qt3vFG6T5-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=177%3A1755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-bold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
          </motion.div>

          {/* NeoNatura Project */}
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
                openModal(
                  "video",
                  "/Videso/NeoNatura.mp4",
                  "NeoNatura Demo Video"
                )
              }
              tabIndex={0}
              role="button"
              aria-label="Play NeoNatura Demo Video"
            >
              <img
                src="/NeoNatura/NeoNatura.png"
                alt="NeoNatura Main Screen"
                className="rounded-2xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <span className="absolute text-white bg-black/60 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm pointer-events-none">
                ▶️ Watch Demo
              </span>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-1 hover:text-indigo-400 transition-colors duration-300">
                NeoNatura
              </h3>
              <p className="text-gray-300 mb-4">
                Eco-friendly e-commerce platform concept. Focus on green UI,
                product discovery, and sustainability education.
              </p>
              <div className="flex gap-4">
                <button
                  className="px-5 py-2 rounded-lg border-2 border-indigo-500 text-indigo-400 font-semibold bg-transparent hover:bg-indigo-900/10 hover:text-indigo-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  onClick={() => setNeoNaturaModal(true)}
                >
                  View Project
                </button>
                <a
                  href="https://sensible-audience-350580.framer.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-bold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Framer Live Preview
                </a>
              </div>
            </div>
          </motion.div>

          {/* StarConnect Project (detailed page) */}
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
                openModal(
                  "video",
                  "/Videso/STARCONNECTProtfoliovid.mp4",
                  "Star Connect Demo Video"
                )
              }
              tabIndex={0}
              role="button"
              aria-label="Play Star Connect Demo Video"
            >
              <img
                src="/STARCONNECT/Starconnect-min.png"
                alt="Star Connect Main Screen"
                className="rounded-2xl w-full h-full object-fit transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <span className="absolute text-white bg-black/60 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm pointer-events-none">
                ▶️ Watch Demo
              </span>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-1 hover:text-indigo-400 transition-colors duration-300">
                StarConnect
              </h3>
              <p className="text-gray-300 mb-4">
                Full-stack job portal for actors and directors. Features include
                profile creation, auditions, and a recommendation system.
              </p>
              <div className="flex gap-4">
                <button
                  className="px-5 py-2 rounded-lg border-2 border-indigo-500 text-indigo-400 font-semibold bg-transparent hover:bg-indigo-900/10 hover:text-indigo-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  onClick={() => setStarConnectModal(true)}
                >
                  View Project
                </button>
                <a
                  href="https://www.figma.com/design/TRCIsGzwc1IdgZve5Yq6Hy/STARCONNECT?node-id=0-1&t=ubMsiUkaTpuFYuLa-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-bold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
          </motion.div>

          {/* MangaVerse Project */}
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
                openModal(
                  "video",
                  "/Videso/MangaVerse LandingPage.mp4",
                  "MangaVerse Demo Video"
                )
              }
              tabIndex={0}
              role="button"
              aria-label="Play MangaVerse Demo Video"
            >
              <img
                src="/MangaVerse/11-min.png"
                alt="MangaVerse Main Screen"
                className="rounded-2xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <span className="absolute text-white bg-black/60 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm pointer-events-none">
                ▶️ Watch Demo
              </span>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-1 hover:text-indigo-400 transition-colors duration-300">
                MangaVerse
              </h3>
              <p className="text-gray-300 mb-4">
                Manga reading and discovery platform. Features include
                personalized libraries, recommendations, and a vibrant UI for
                manga fans.
              </p>
              <div className="flex gap-4">
                <button
                  className="px-5 py-2 rounded-lg border-2 border-indigo-500 text-indigo-400 font-semibold bg-transparent hover:bg-indigo-900/10 hover:text-indigo-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  onClick={() => setMangaVerseModal(true)}
                >
                  View Project
                </button>
                <a
                  href="https://www.figma.com/proto/qJpFZqP8rHKxNsrKA7y6Dd/NIDEKI-READS?page-id=0%3A1&node-id=3-1353&p=f&viewport=460%2C-27%2C0.04&t=cmgiCS9jw1OTinIw-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=217%3A490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-500 text-white font-bold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
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
                className="relative w-full md:max-w-3xl bg-gray-50 rounded-t-2xl md:rounded-2xl shadow-2xl p-0 md:p-6 max-h-[90vh] overflow-y-auto"
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
        {/* NOMAD Modal */}
        <AnimatePresence>
          {nomadModal && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm overflow-hidden"
              onClick={() => setNomadModal(false)}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
              style={{ overscrollBehavior: "none" }}
            >
              <style>{`body { overflow: hidden !important; }`}</style>
              <div
                className="relative w-full md:max-w-3xl bg-gray-50 rounded-t-2xl md:rounded-2xl shadow-2xl p-0 md:p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-400 text-2xl font-bold z-10"
                  onClick={() => setNomadModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="pt-10 md:pt-0">
                  <Nomad />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Netbanking Modal */}
        <AnimatePresence>
          {netbankingModal && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm overflow-hidden"
              onClick={() => setNetbankingModal(false)}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
              style={{ overscrollBehavior: "none" }}
            >
              <style>{`body { overflow: hidden !important; }`}</style>
              <div
                className="relative w-full md:max-w-3xl bg-gray-50 rounded-t-2xl md:rounded-2xl shadow-2xl p-0 md:p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-400 text-2xl font-bold z-10"
                  onClick={() => setNetbankingModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="pt-10 md:pt-0">
                  <Netbanking />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* NeoNatura Modal */}
        <AnimatePresence>
          {neoNaturaModal && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm overflow-hidden"
              onClick={() => setNeoNaturaModal(false)}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
              style={{ overscrollBehavior: "none" }}
            >
              <style>{`body { overflow: hidden !important; }`}</style>
              <div
                className="relative w-full md:max-w-3xl bg-gray-50 rounded-t-2xl md:rounded-2xl shadow-2xl p-0 md:p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-400 text-2xl font-bold z-10"
                  onClick={() => setNeoNaturaModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="pt-10 md:pt-0">
                  <NeoNatura />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* StarConnect Modal */}
        <AnimatePresence>
          {starConnectModal && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm overflow-hidden"
              onClick={() => setStarConnectModal(false)}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
              style={{ overscrollBehavior: "none" }}
            >
              <style>{`body { overflow: hidden !important; }`}</style>
              <div
                className="relative w-full md:max-w-3xl bg-gray-50 rounded-t-2xl md:rounded-2xl shadow-2xl p-0 md:p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-400 text-2xl font-bold z-10"
                  onClick={() => setStarConnectModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="pt-10 md:pt-0">
                  <StarConnectProject />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* MangaVerse Modal */}
        <AnimatePresence>
          {mangaVerseModal && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm overflow-hidden"
              onClick={() => setMangaVerseModal(false)}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
              style={{ overscrollBehavior: "none" }}
            >
              <style>{`body { overflow: hidden !important; }`}</style>
              <div
                className="relative w-full md:max-w-3xl bg-gray-50 rounded-t-2xl md:rounded-2xl shadow-2xl p-0 md:p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-400 text-2xl font-bold z-10"
                  onClick={() => setMangaVerseModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="pt-10 md:pt-0">
                  <MangaVerse />
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
        <div className="grid md:grid-cols-2 gap-8 mt-4 text-gray-300">
          {/* Tools */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-lg font-semibold mb-3">Design Tools</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-gray-800">
                🖌️ Figma
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800">
                🧩 Framer
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800">
                🎨 Canva
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800">
                🎞️ Premiere Pro
              </span>
            </div>
          </div>

          {/* Design */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-lg font-semibold mb-3">UI/UX Skills</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-gray-800">
                📐 Wireframing & Prototyping
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800">
                🧠 User Research & Personas
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800">
                🛠️ Usability Testing
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800">
                ♿ Accessibility & Inclusive Design
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800">
                🎨 Visual Design & Design Systems
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800">
                💡 Creative Problem Solving
              </span>
            </div>
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
        <p className="text-gray-300">📍 Parel, Mumbai </p>
        <p className="text-gray-300">📞 +91 7715056885</p>
        <div className="flex gap-5 mt-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=enagandulakrishna224@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
            aria-label="Gmail"
          >
            <img src="/icongmail.png" alt="Gmail" className="w-6 h-6" />
            {/* enagandulakrishna224@gmail.com */}
          </a>
          <a
            href="https://x.com/Krishnna10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
            aria-label="X (Twitter)"
          >
            <img src="/iconX.png" alt="X (Twitter)" className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/krishnae10/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v4.78z"
              />
            </svg>
          </a>
        </div>
      </motion.section>
      {/* ---------- FOOTER ---------- */}
      <footer className="text-center text-gray-500 py-8 text-sm">
        &copy; {new Date().getFullYear()} Krishna Enagandula. All rights
        reserved.
      </footer>
    </div>
  );
}

{
  /* Development
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
            <ul className="space-y-2">
              <li>📜 JavaScript</li>
              <li>🐍 Python</li>
              <li>⚛️ React.js</li>
              <li>🌬️ Tailwind CSS</li>
              <li>📱 Responsive Design</li>
            </ul>
          </div> */
}
