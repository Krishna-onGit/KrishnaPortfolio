import React from "react";
import { useEffect } from "react";
import { motion } from "motion/react";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionClass = "max-w-4xl mx-auto px-4 py-12 text-white";

  return (
    <div className="bg-black min-h-screen font-sans text-white ">
    <header className="text-center py-10">
      <h1 className="text-4xl font-bold hover:text-indigo-400 transition duration-300 hover:scale-110">Krishna Enagandula</h1>
      <p className="text-gray-400 mt-2 hover:text-indigo-300 transition duration-300 hover:scale-110">UI/UX Designer</p>
    </header>
  

      <motion.section
        className={sectionClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-400 transition duration-300 hover:scale-110">About Me</h2>
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
        <h2 className="text-2xl font-semibold mb-4  hover:scale-y-110 transition duration-300">Projects</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold  hover:scale-y-110 transition duration-300">MangaVerse</h3>
          <p className="text-gray-300 hover:scale-110 transition duration-300">
            An immersive platform for reading novels and manga with a
            user-centric UI and engaging design.
          </p>
          <a
            href="https://www.figma.com/proto/qJpFZqP8rHKxNsrKA7y6Dd/NIDEKI-READS?node-id=3-1072&t=SvXvDrAoUpVcGLqW-1"
            className="text-blue-400 hover:text-blue-200 duration-200 "
            target="_blank"
            rel="noreferrer"
          >
            View Figma Prototype
          </a>
          {/* <div className="mt-4 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
            Insert images/videos here
          </div> */}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold  hover:scale-y-110 transition duration-300">Star Connect</h3>
          <p className="text-gray-300 hover:scale-110 transition duration-300">
            A full-stack job portal for actors and directors with features like
            profile creation, auditions, and recommendation system.
          </p>
          <div className="">
            <a
              href="https://www.figma.com/design/iHJGFOtxkh1UXhlCMfvQtP/STARCONNNECTUI?node-id=0-1&m=dev&t=JklJRhLSYEV7JBLB-1"
              className="text-blue-400 hover:text-blue-200 duration-200"
              target="_blank"
              rel="noreferrer"
            >
              Initial Design (Figma Design)
            </a>
            <br />
            <a
              href="https://www.figma.com/design/TRCIsGzwc1IdgZve5Yq6Hy/Untitled?node-id=0-1&m=dev&t=IYeQ3x3RYLp9jKRC-1"
              className="text-blue-400 hover:text-blue-200 duration-200"
              target="_blank"
              rel="noreferrer"
            >
              Final Design (Website Images)
            </a>
          </div>
          {/* <div className="mt-4 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
            Insert images/videos here
          </div> */}
        </div>

        <div>
          <h3 className="text-xl font-semibold  hover:scale-y-105 transition duration-300">BentoGrid UI Component</h3>
          <p className="text-gray-300 hover:scale-110 transition duration-300">
            Custom UI component built using inspirations from Shadcn and
            Aceternity UI libraries.
          </p>
          <a
            href="https://www.figma.com/proto/LySEinaa4wRheWCWihYRgb/Untitled?page-id=0%3A1&node-id=3-7&viewport=171%2C83%2C0.24&t=UyKAr0lgkzxpbcp2-1&scaling=contain&content-scaling=fixed"
            className="text-blue-400 hover:text-blue-200 duration-200"
            target="_blank"
            rel="noreferrer"
          >
            View on Figma Prototype
          </a>
          <br />
          <a
            href="https://github.com/Krishna-onGit/BentoGridImages-UI-COMPONENT-/blob/main/Bento.jpg"
            className="text-blue-400 hover:text-blue-200 duration-200"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
          {/* <div className="mt-4 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
            Insert images/videos here
          </div> */}
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
        <h2 className="text-2xl font-semibold mb-4 ">Skills & Tools</h2>
        <div className="text-gray-300 grid md:grid-cols-3 gap-8 mt-4">
  {/* Tools */}
  <div className="bg-gray-900 rounded-xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-white mb-2 hover:scale-105 transition duration-300">🧰 Tools</h3>
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
    <h3 className="text-lg font-semibold text-white mb-2 hover:scale-105 transition duration-300">💻 Development</h3>
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
    <h3 className="text-lg font-semibold text-white mb-2 hover:scale-105 transition duration-300">🎨 Design Skills</h3>
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
        <h2 className="text-2xl font-semibold mb-4 hover:scale-y-110 transition duration-300">Contact</h2>
        <p className="text-gray-300  hover:scale-y-110 transition duration-300">📍 Parel, Mumbai 400013</p>
        <p className="text-gray-300  hover:scale-y-110 transition duration-300">📞 +91 7715056885</p>
        <p className="text-gray-300  hover:scale-y-110 transition duration-300">✉️ enagandulakrishna224@gmail.com</p>
      </motion.section>

      <footer className="text-center text-gray-500 py-8 text-sm">
        &copy; {new Date().getFullYear()} Krishna Enagandula. All rights
        reserved.
      </footer>
    </div>
  );
}
