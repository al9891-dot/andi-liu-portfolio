import { Hero } from "@/components/Hero";
import { HighlightCard } from "@/components/HighlightCard";
import { MetricCard } from "@/components/MetricCard";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { metrics } from "@/data/metrics";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <Hero />
      <section>
        <SectionHeading title="核心能力概览" description="用文化研究的敏感度理解地方材料，用产品和运营经验把它们转化为可被用户理解、体验与传播的内容。" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {profile.capabilities.map((capability) => <HighlightCard key={capability} title={capability} />)}
        </div>
      </section>
      <section>
        <SectionHeading title="量化亮点" description="第一版先集中展示最能快速建立可信度的成果，完整版本在“量化成果”页面。" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.slice(0, 11).map((metric) => <MetricCard key={`${metric.value}-${metric.label}`} metric={metric} />)}
        </div>
      </section>
      <section className="border border-line bg-white p-6 shadow-soft">
        <SectionHeading eyebrow="MAIN THREAD" title="我如何理解自己的主线" />
        <p className="max-w-4xl text-base leading-8 text-muted">{profile.mainThread}</p>
      </section>
    </div>
  );
}
