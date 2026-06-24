import { SectionHeading } from "@/components/SectionHeading";
import { SkillGroup } from "@/components/SkillGroup";
import { skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div>
      <SectionHeading title="能力" description="能力不是孤立标签。这里把每组能力和实际经历对应起来，帮助读者理解这些能力从哪里被训练出来。" />
      <div className="grid gap-5">
        {skillGroups.map((group) => <SkillGroup key={group.title} group={group} />)}
      </div>
    </div>
  );
}
