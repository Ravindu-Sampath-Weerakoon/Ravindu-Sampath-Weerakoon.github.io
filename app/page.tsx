import { personalInfo, projects, experience } from '@/lib/data';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="snap-container">
      <ThemeToggle />
      
      {/* Hero Section */}
      <Section id="hero">
        <div className="flex flex-col gap-6">
          <span className="text-xl md:text-2xl font-mono tracking-tighter uppercase opacity-60">
            Hello, I am
          </span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-4">
            {personalInfo.name.split(' ')[0]}<br />
            {personalInfo.name.split(' ')[1]}
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl font-medium opacity-80 leading-relaxed text-balance">
            {personalInfo.summary}
          </p>
          <div className="flex gap-8 mt-8">
            <a href="#projects" className="text-sm font-bold border-b-2 border-current pb-1 hover:opacity-50 transition-all">PROJECTS</a>
            <a href="#work" className="text-sm font-bold border-b-2 border-current pb-1 hover:opacity-50 transition-all">EXPERIENCE</a>
            <a href="#contact" className="text-sm font-bold border-b-2 border-current pb-1 hover:opacity-50 transition-all">CONTACT</a>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-[var(--foreground)] text-[var(--background)] !snap-align-start overflow-hidden">
        <div className="h-full flex flex-col justify-center">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Selected<br />Works</h2>
            <div className="hidden md:block text-right opacity-50 font-mono text-sm">
              01 / 04
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </Section>

      {/* Work Section */}
      <Section id="work">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-16">Work<br />Experience</h2>
        <div className="space-y-12 max-w-4xl">
          {experience.map((job, index) => (
            <div key={index} className="group relative pl-8 border-l-4 border-[var(--foreground)]">
              <span className="text-sm font-mono opacity-50 mb-2 block">{job.date}</span>
              <h3 className="text-3xl font-bold mb-1">{job.role}</h3>
              <h4 className="text-xl font-medium opacity-70 mb-4">{job.company}</h4>
              <ul className="space-y-3">
                {job.points.map((point, i) => (
                  <li key={i} className="text-lg leading-relaxed opacity-80 flex gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 bg-current rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="text-center">
          <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">
            Let's<br />Talk
          </h2>
          <div className="flex flex-col gap-4 text-xl md:text-3xl font-medium mb-16">
            <a href={`mailto:${personalInfo.contact.email}`} className="hover:opacity-50 transition-all">{personalInfo.contact.email}</a>
            <p className="opacity-50">{personalInfo.contact.phone}</p>
          </div>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            <a href={`https://${personalInfo.contact.github}`} target="_blank" className="text-sm font-bold border-b-2 border-current pb-1 hover:scale-110 transition-all">GITHUB</a>
            <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" className="text-sm font-bold border-b-2 border-current pb-1 hover:scale-110 transition-all">LINKEDIN</a>
            <a href={`https://${personalInfo.contact.website}`} target="_blank" className="text-sm font-bold border-b-2 border-current pb-1 hover:scale-110 transition-all">PORTFOLIO</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 right-8 flex justify-between text-[10px] font-mono tracking-widest opacity-30 uppercase">
          <span>© 2026 Ravindu Weerakoon</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </Section>
    </main>
  );
}
