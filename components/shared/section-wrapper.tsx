import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-14 lg:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">{children}</div>
    </section>
  );
}
