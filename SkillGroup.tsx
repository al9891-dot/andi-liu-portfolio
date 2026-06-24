import type { SkillGroup as SkillGroupType } from "@/types/site";
import { Tag } from "@/components/Tag";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <article className="border border-line bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-ink">{group.title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
      </div>
      <div className="mt-5 border-t border-line pt-4">
        <p className="text-sm font-semibold text-ink">对应经历</p>
        <p className="mt-2 text-sm leading-7 text-muted">{group.related.join(" / ")}</p>
      </div>
    </article>
  );
}
