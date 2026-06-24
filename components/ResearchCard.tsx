export function ResearchCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border border-line bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-muted">{children}</div>
    </section>
  );
}
