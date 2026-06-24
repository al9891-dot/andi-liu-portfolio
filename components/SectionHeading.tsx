export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="mb-2 text-sm font-semibold tracking-wide text-clay">{eyebrow}</p> : null}
      <h1 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">{title}</h1>
      {description ? <p className="mt-4 text-base leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
