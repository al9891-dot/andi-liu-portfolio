import type { Metric } from "@/types/site";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="border border-line bg-white p-5">
      <p className="text-2xl font-semibold text-slategreen">{metric.value}</p>
      <h3 className="mt-2 text-sm font-semibold leading-6 text-ink">{metric.label}</h3>
      {metric.context ? <p className="mt-2 text-sm leading-6 text-muted">{metric.context}</p> : null}
    </article>
  );
}
