interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="relative">
      <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>
      <div className="mt-2 h-1 w-10 rounded-full bg-foreground" />
    </div>
  );
}
