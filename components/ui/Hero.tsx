// components/ui/Hero.tsx
export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          I design & build <span className="text-violet-400">secure</span> web apps that feel futuristic.
        </h1>
        <p className="mt-4 max-w-xl text-gray-300">
          Full-stack dev focused on production apps: Next.js, TypeScript, Tailwind. Projects include cybersecurity tools, AI integrations, and polished MVPs.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#projects" className="px-5 py-3 rounded-md glass">View Projects</a>
          <a href="/contact" className="px-5 py-3 rounded-md bg-violet-500 hover:opacity-90">Contact</a>
        </div>
      </div>

      <div>
        <div className="glass rounded-xl p-6 min-h-[240px] flex items-center justify-center">
          {/* Placeholder for animated card or screenshot */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">Project highlight / screenshot</div>
        </div>
      </div>
    </section>
  );
}
