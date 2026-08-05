import { cn } from "@/lib/utils";

export function WireframeSphere({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center pointer-events-none", className)}>
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-150" />
      
      {/* Layer 1: Forward spin */}
      <svg viewBox="0 0 200 200" className="w-full h-full text-primary/15 stroke-current absolute animate-[spin_25s_linear_infinite]" fill="none">
        <ellipse cx="100" cy="100" rx="90" ry="40" strokeWidth="0.5" transform="rotate(20 100 100)" />
        <ellipse cx="100" cy="100" rx="90" ry="40" strokeWidth="0.5" transform="rotate(80 100 100)" />
        <ellipse cx="100" cy="100" rx="90" ry="40" strokeWidth="0.5" transform="rotate(140 100 100)" />
      </svg>
      
      {/* Layer 2: Reverse spin */}
      <svg viewBox="0 0 200 200" className="w-full h-full text-foreground/20 stroke-current absolute animate-[spin_35s_linear_infinite_reverse]" fill="none">
        <ellipse cx="100" cy="100" rx="80" ry="25" strokeWidth="0.5" transform="rotate(50 100 100)" />
        <ellipse cx="100" cy="100" rx="80" ry="25" strokeWidth="0.5" transform="rotate(110 100 100)" />
        <ellipse cx="100" cy="100" rx="80" ry="25" strokeWidth="0.5" transform="rotate(170 100 100)" />
        
        {/* Floating dots */}
        <circle cx="20" cy="100" r="1.5" fill="currentColor" stroke="none" transform="rotate(50 100 100)" />
        <circle cx="180" cy="100" r="1.5" fill="currentColor" stroke="none" transform="rotate(110 100 100)" />
      </svg>
      
      {/* Layer 3: Dashed outer rings forward spin */}
      <svg viewBox="0 0 200 200" className="w-full h-full text-primary/25 stroke-current absolute animate-[spin_45s_linear_infinite]" fill="none">
        <circle cx="100" cy="100" r="95" strokeWidth="0.2" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="70" strokeWidth="0.2" strokeDasharray="2 6" />
      </svg>
    </div>
  );
}
