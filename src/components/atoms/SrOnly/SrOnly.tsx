interface SrOnlyProps {
  children: React.ReactNode;
}

export function SrOnly({ children }: SrOnlyProps) {
  return <span className="sr-only">{children}</span>;
}
