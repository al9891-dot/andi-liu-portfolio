import { ResearchCard } from "@/components/ResearchCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { research } from "@/data/research";

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <SectionHeading title="研究" description="研究页面完整呈现我目前的硕士研究方向、核心问题、方法和它与文旅实践之间的连接。" />
      <ResearchCard title={research.overviewTitle}><p>{research.overview}</p></ResearchCard>
      <ResearchCard title={research.currentTitle}>
        <ul className="space-y-2">
          {research.current.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      </ResearchCard>
      <ResearchCard title="研究方法">
        <div className="flex flex-wrap gap-2">
          {research.methods.map((method) => <Tag key={method}>{method}</Tag>)}
        </div>
      </ResearchCard>
      <ResearchCard title="研究与实践的连接"><p>{research.connection}</p></ResearchCard>
    </div>
  );
}
