import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { HighlightCard } from "@/components/HighlightCard";
import { MetricCard } from "@/components/MetricCard";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { metrics } from "@/data/metrics";
import { research } from "@/data/research";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <Hero />
      <section className="border-y border-line py-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-clay">FEATURED FIELDWORK</p>
            <h2 className="mt-2 text-2xl font-semibold leading-8 text-ink">{research.workshop.title}</h2>
            <p className="mt-2 text-sm text-muted">{research.workshop.subtitle} · {research.workshop.period}</p>
          </div>
          <div>
            <p className="text-base leading-8 text-muted">{research.workshop.lead}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slategreen">
              {research.workshop.metrics.slice(0, 3).map((metric) => <span key={metric}>{metric}</span>)}
            </div>
            <Link href="/research" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
              查看完整学术经历 <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
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
