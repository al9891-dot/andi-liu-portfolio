import { ResearchCard } from "@/components/ResearchCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { research } from "@/data/research";

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <SectionHeading eyebrow="ACADEMIC PROFILE" title="研究与田野" description="从女性主义国际关系、文化遗产与田野研究出发，追问谁有权讲述一座遗产城市，以及女性劳动、地方经验和公共记忆如何被看见。" />
      <ResearchCard title={research.overviewTitle}><p>{research.overview}</p></ResearchCard>
      <ResearchCard title={research.currentTitle}>
        <ul className="space-y-2">
          {research.current.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      </ResearchCard>
      <section className="border border-slategreen bg-white p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-3 border-b border-line pb-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold text-clay">重点田野项目</p>
            <h2 className="mt-2 text-2xl font-semibold leading-8 text-ink">{research.workshop.title}</h2>
            <p className="mt-1 text-sm text-muted">{research.workshop.subtitle}</p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-slategreen">{research.workshop.period}</p>
        </div>
        <p className="mt-5 text-sm leading-7 text-muted">{research.workshop.organizers}</p>
        <p className="mt-4 text-base leading-8 text-ink">{research.workshop.lead}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {research.workshop.metrics.map((metric) => (
            <div key={metric} className="border border-line bg-paper p-4 text-sm font-semibold leading-6 text-ink">{metric}</div>
          ))}
        </div>
        <div className="mt-7 grid gap-7 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h3 className="font-semibold text-ink">田野与分析</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              {research.workshop.fieldwork.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-ink">三层分析框架</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {research.workshop.framework.map((item) => <Tag key={item}>{item}</Tag>)}
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">{research.workshop.contribution}</p>
          </div>
        </div>
      </section>
      <ResearchCard title="研究成果与学术汇报">
        <div className="divide-y divide-line">
          {research.outputs.map((output) => (
            <article key={output.title} className="py-4 first:pt-0 last:pb-0">
              <h3 className="font-semibold text-ink">{output.title}</h3>
              <p className="mt-1 text-xs font-semibold text-clay">{output.meta}</p>
              <p className="mt-2">{output.description}</p>
            </article>
          ))}
        </div>
      </ResearchCard>
      <ResearchCard title="研究方法">
        <div className="flex flex-wrap gap-2">
          {research.methods.map((method) => <Tag key={method}>{method}</Tag>)}
        </div>
      </ResearchCard>
      <ResearchCard title="研究训练与相关课程">
        <p>{research.training}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {research.courses.map((course) => <Tag key={course}>{course}</Tag>)}
        </div>
      </ResearchCard>
      <ResearchCard title="研究与实践的连接"><p>{research.connection}</p></ResearchCard>
    </div>
  );
}
