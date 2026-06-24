export function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-7">
      <h2 className="mb-4 text-xl font-semibold text-ink">{title}</h2>
      {children}
    </section>
  );
}
