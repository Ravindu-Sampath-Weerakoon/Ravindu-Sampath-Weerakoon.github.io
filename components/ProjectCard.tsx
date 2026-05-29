'use client';

import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  type: string;
  stack: string[];
  description: string;
  slug: string;
}

export default function ProjectCard({ title, type, stack, description, slug }: ProjectCardProps) {
  return (
    <div className="group relative bg-[var(--card-bg)] p-6 border-2 border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-500 flex flex-col justify-between h-full">
      <div>
        <span className="text-xs uppercase tracking-widest opacity-60 mb-2 block">{type}</span>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-sm opacity-80 mb-6 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {stack.slice(0, 3).map((s) => (
            <span key={s} className="text-[10px] px-2 py-1 border border-current rounded-full">
              {s}
            </span>
          ))}
          {stack.length > 3 && <span className="text-[10px] px-2 py-1">+{stack.length - 3}</span>}
        </div>
      </div>
      
      <Link 
        href={`/projects/${slug}`}
        className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-current pb-1 w-fit hover:gap-4 transition-all"
      >
        READ MORE
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </Link>
    </div>
  );
}
