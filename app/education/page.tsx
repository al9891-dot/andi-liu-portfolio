import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <div>
      <SectionHeading title="教育背景" description="国际关系训练与旅游管理本科背景共同构成了我的研究方法、目的地理解和服务场景意识。" />
      <Timeline>
        {education.map((item) => (
          <article key={item.school} className="relative border border-line bg-white p-5 shadow-sm">
            <span className="absolute -left-[29px] top-6 h-3 w-3 border border-slategreen bg-paper" />
            <p className="text-sm font-semibold text-clay">{item.period}</p>
            <h2 className="mt-1 text-xl font-semibold text-ink">{item.school}</h2>
            <p className="mt-1 text-sm font-medium text-muted">{item.degree}{item.location ? ` · ${item.location}` : ""}</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
              {item.details.map((detail) => <li key={detail}>• {detail}</li>)}
            </ul>
          </article>
        ))}
      </Timeline>
    </div>
  );
}
