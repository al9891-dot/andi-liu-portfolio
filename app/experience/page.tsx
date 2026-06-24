import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div>
      <SectionHeading title="经历" description="这里保留较完整的工作、田野、运营和创业经历。每张卡片可以展开，查看完整描述、关键成果和能力标签。" />
      <Timeline>
        {experiences.map((item, index) => <ExperienceCard key={item.id} item={item} defaultOpen={index < 2} />)}
      </Timeline>
    </div>
  );
}
