import { motion } from "framer-motion";
import Cursor from "./components/Cursor";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0f14] text-slate-200 font-sans overflow-hidden">
      {/* CURSOR */}
      <Cursor />

      {/* AMBIENT BACKGROUND LIGHTS */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 -right-40 w-[520px] h-[520px] bg-indigo-500/10 rounded-full blur-[160px]" />

      {/* HERO */}
      <section className="relative flex items-center min-h-screen px-6 md:px-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.35] pb-2 bg-gradient-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent">
            Mayank Verma
          </h1>

          <p className="mt-4 text-xl text-cyan-400">
            Software Developer • Web • AI
          </p>

          <p className="mt-6 leading-relaxed text-slate-400">
            I design and build modern, scalable web applications with a strong
            focus on clean architecture, performance, and real-world usability.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="px-6 py-3 font-medium text-black transition rounded-lg bg-cyan-400 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/Mayank-Verma-Resume.pdf"
              download
              className="px-6 py-3 transition border rounded-lg border-slate-600 hover:bg-slate-900"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl px-6 py-24 mx-auto md:px-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">
            About Me
          </h2>

          <p className="leading-relaxed text-slate-400">
            I am a passionate software developer who enjoys building efficient
            digital products and exploring AI-driven systems. I focus on writing
            clean, maintainable code and crafting user-friendly experiences.
          </p>

          <p className="mt-4 leading-relaxed text-slate-400">
            Currently preparing for product-based software engineering roles and
            continuously improving my DSA and problem-solving skills.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-24 py-28 bg-[#0f141a]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-semibold text-white mb-14 md:text-4xl">
            Skills & Tools
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Frontend",
                desc: "Building responsive and interactive user interfaces",
                items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
              },
              {
                title: "Backend & Logic",
                desc: "Problem solving and application logic",
                items: ["Python", "DSA", "OOP", "AI Concepts"],
              },
              {
                title: "Tools & Workflow",
                desc: "Development tools and best practices",
                items: ["Git", "GitHub", "VS Code", "Linux", "Debugging"],
              },
            ].map((group) => (
              <motion.div
                key={group.title}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="relative group p-8 rounded-2xl border border-slate-800 bg-[#0b0f14]
                transition-all duration-300 hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              >
                {/* glow */}
                <div className="absolute inset-0 transition opacity-0 rounded-2xl group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-transparent" />

                {/* content */}
                <div className="relative z-10">
                  <h3 className="mb-2 text-xl font-semibold text-cyan-300">
                    {group.title}
                  </h3>

                  <p className="mb-6 text-sm text-slate-400">
                    {group.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 text-sm transition border rounded-full border-slate-700 text-slate-300 hover:border-cyan-400/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl px-6 mx-auto md:px-24 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-3xl font-semibold text-white md:text-4xl">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Glassmorphism UI",
                desc: "Modern UI design with glass effects and clean layout.",
                tech: "HTML • CSS",
              },
              {
                title: "Animated Download Button",
                desc: "Smooth CTA animation focused on micro-interactions.",
                tech: "HTML • CSS • JS",
              },
              {
                title: "AI Expert System",
                desc: "Rule-based AI system demonstrating decision logic.",
                tech: "Python • AI",
              },
            ].map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="relative group p-6 rounded-2xl border border-slate-800 bg-[#070707]
                transition-all duration-300 hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              >
                <div className="absolute inset-0 transition opacity-0 rounded-2xl group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-transparent" />

                <div className="relative z-10">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mb-4 text-slate-400">{p.desc}</p>
                  <span className="text-sm text-cyan-400">{p.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16 text-center border-t md:px-24 border-slate-800">
        <p className="mb-4 text-slate-400">
          Let’s build something meaningful together.
        </p>
        <div className="flex justify-center gap-6 text-cyan-400">
          <a href="https://github.com/MayankVermaMV">GitHub</a>
          <a href="https://www.linkedin.com/in/mayank-verma-a0959027b">LinkedIn</a>
          <a href="mailto:mayankv189@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}