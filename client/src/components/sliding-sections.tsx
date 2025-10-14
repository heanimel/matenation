import { ReactNode } from 'react';

interface SlidingSectionsProps {
  children: ReactNode[];
}

export function SlidingSections({ children }: SlidingSectionsProps) {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {children.map((child, index) => (
        <section 
          key={index} 
          className="min-h-screen snap-start snap-always flex flex-col"
        >
          {child}
        </section>
      ))}
    </div>
  );
}
