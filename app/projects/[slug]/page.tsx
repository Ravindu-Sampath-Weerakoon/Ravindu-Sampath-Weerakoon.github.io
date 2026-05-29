import { projects } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 md:p-24 bg-[var(--background)] text-[var(--foreground)] animate-in fade-in slide-in-from-bottom-8 duration-700">
      <ThemeToggle />
      
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-current pb-1 mb-16 hover:gap-4 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          BACK TO HOME
        </Link>

        <div className="space-y-8">
          <div>
            <span className="text-sm font-mono uppercase tracking-[0.2em] opacity-50 block mb-4">{project.type} / {project.date}</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
              {project.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t-2 border-[var(--foreground)]">
            <div className="md:col-span-2">
              <h2 className="text-sm font-mono uppercase opacity-50 mb-6">Overview</h2>
              <p className="text-xl md:text-3xl font-medium leading-relaxed">
                {project.details}
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-mono uppercase opacity-50 mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 border-2 border-[var(--foreground)] text-xs font-bold uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-mono uppercase opacity-50 mb-4">Brief</h2>
                <p className="text-sm leading-relaxed opacity-80">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t-2 border-[var(--foreground)] flex justify-between items-center">
          <p className="text-sm font-mono opacity-50 italic">Exploring the boundaries of {project.type.toLowerCase()}...</p>
          <Link 
            href="/" 
            className="text-sm font-bold border-b-2 border-current pb-1 hover:opacity-50 transition-all"
          >
            NEXT PROJECT
          </Link>
        </div>
      </div>
    </main>
  );
}
