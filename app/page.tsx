export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* ==================== NAVBAR ==================== */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            Ghayoor<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/4 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 top-1/3 -z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 py-32 lg:grid-cols-2 lg:px-8">
          {/* Hero Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                Full-Stack Developer
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-cyan-400">
                Ghayoor Ahmad
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build modern, responsive web applications with React,
              Next.js, Node.js, Express.js, and MongoDB.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
              I&apos;m passionate about creating clean user experiences,
              scalable applications, and practical digital solutions for
              businesses and individuals.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>

            {/* Technologies */}
            <div className="mt-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Developer Code Card */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl" />

              <div className="relative w-[420px] rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-sm">
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="font-mono text-sm leading-8">
                  <p className="text-slate-500">
                    {"// developer.tsx"}
                  </p>

                  <p>
                    <span className="text-purple-400">
                      const
                    </span>{" "}
                    <span className="text-cyan-400">
                      developer
                    </span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-6">
                    name:{" "}
                    <span className="text-green-400">
                      &quot;Ghayoor Ahmad&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    role:{" "}
                    <span className="text-green-400">
                      &quot;Full-Stack Developer&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    frontend:{" "}
                    <span className="text-green-400">
                      &quot;React / Next.js&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    backend:{" "}
                    <span className="text-green-400">
                      &quot;Node / Express&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    database:{" "}
                    <span className="text-green-400">
                      &quot;MongoDB&quot;
                    </span>
                  </p>

                  <p>{"};"}</p>

                  <p className="mt-4">
                    <span className="text-purple-400">
                      export
                    </span>{" "}
                    <span className="text-purple-400">
                      default
                    </span>{" "}
                    developer;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="text-xs uppercase tracking-widest text-slate-500">
            Scroll
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section
        id="about"
        className="border-t border-white/10 bg-slate-950 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Building ideas into{" "}
              <span className="text-cyan-400">
                web experiences.
              </span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-slate-300">
                I&apos;m Ghayoor Ahmad, a Full-Stack Web Developer
                focused on building modern and responsive web
                applications.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400">
                I work with technologies across the frontend and
                backend, including React.js, Next.js, JavaScript,
                Node.js, Express.js, MongoDB, and Tailwind CSS.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400">
                My goal is to create applications that are clean,
                user-friendly, responsive, and practical for
                real-world use.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Card 1 */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
                <p className="text-3xl font-bold text-cyan-400">
                  01
                </p>

                <h3 className="mt-4 text-lg font-semibold">
                  Frontend
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Responsive interfaces with React, Next.js and
                  Tailwind CSS.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
                <p className="text-3xl font-bold text-cyan-400">
                  02
                </p>

                <h3 className="mt-4 text-lg font-semibold">
                  Backend
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Server-side applications and APIs using Node.js
                  and Express.js.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
                <p className="text-3xl font-bold text-cyan-400">
                  03
                </p>

                <h3 className="mt-4 text-lg font-semibold">
                  Database
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Working with MongoDB for storing and managing
                  application data.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
                <p className="text-3xl font-bold text-cyan-400">
                  04
                </p>

                <h3 className="mt-4 text-lg font-semibold">
                  Deployment
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Deploying modern web applications with platforms
                  such as Vercel and Netlify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}
      <section
        id="skills"
        className="border-t border-white/10 bg-slate-900/40 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              My Skills
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Technologies I use to{" "}
              <span className="text-cyan-400">
                build.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Frontend */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <h3 className="text-xl font-semibold">
                Frontend
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "Tailwind CSS",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <h3 className="text-xl font-semibold">
                Backend
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "Node.js",
                  "Express.js",
                  "REST APIs",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <h3 className="text-xl font-semibold">
                Database
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "MongoDB",
                  "Mongoose",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <h3 className="text-xl font-semibold">
                Tools
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "Git",
                  "GitHub",
                  "Vercel",
                  "Netlify",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS ==================== */}
      <section
        id="projects"
        className="border-t border-white/10 bg-slate-950 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              My Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Featured{" "}
              <span className="text-cyan-400">
                Projects
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              A selection of projects I have built using modern
              web development technologies.
            </p>
          </div>

          {/* Luna Bistro */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="grid lg:grid-cols-2">
              {/* Project Visual */}
              <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-950 p-8">
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-semibold">
                      Luna Bistro
                    </span>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                      Live
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 rounded-full bg-white/10" />
                    <div className="h-3 w-4/5 rounded-full bg-white/10" />
                    <div className="h-3 w-3/5 rounded-full bg-cyan-400/30" />
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-lg bg-white/5" />
                    <div className="h-16 rounded-lg bg-white/5" />
                    <div className="h-16 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="p-8 lg:p-12">
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                  Project 01
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  Luna Bistro
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  A modern restaurant landing page designed to
                  showcase food, atmosphere, services, menu items,
                  testimonials, and contact information.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Tailwind CSS",
                    "Vite",
                    "JavaScript",
                    "Vercel",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://luna-bistro-omega.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/ghayoorahmadgondal/luna-bistro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Future Projects */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-white/10 p-8">
              <p className="text-sm text-slate-500">
                Project 02
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Coming Soon
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Your next portfolio project will be added here.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-white/10 p-8">
              <p className="text-sm text-slate-500">
                Project 03
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Coming Soon
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                More full-stack projects will be showcased here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section
        id="contact"
        className="border-t border-white/10 bg-slate-900/40 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Let&apos;s work{" "}
              <span className="text-cyan-400">
                together.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Have a project, job opportunity, or idea in mind?
              Feel free to get in touch.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-semibold">
                Get in touch
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                I&apos;m open to web development opportunities,
                freelance projects, and collaborations.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Email
                  </p>

                  <p className="mt-2 text-slate-300">
                    ghayoorahmad05@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Role
                  </p>

                  <p className="mt-2 text-slate-300">
                    Full-Stack Web Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="text-sm text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-sm text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Ghayoor Ahmad. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ghayoorahmadgondal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ghayoor-ahmad-6271a839a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}