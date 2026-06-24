export function HighlightCard({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <article className="border border-line bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      {children ? <div className="mt-3 text-sm leading-7 text-muted">{children}</div> : null}
    </article>
  );
}
