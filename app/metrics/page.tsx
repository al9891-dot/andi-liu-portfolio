import { MetricCard } from "@/components/MetricCard";
import { SectionHeading } from "@/components/SectionHeading";
import { metrics } from "@/data/metrics";

export default function MetricsPage() {
  return (
    <div>
      <SectionHeading title="量化成果" description="把简历中分散出现的可量化结果集中呈现，方便快速判断经验规模、执行力度和结果导向。" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => <MetricCard key={`${metric.value}-${metric.label}`} metric={metric} />)}
      </div>
    </div>
  );
}
