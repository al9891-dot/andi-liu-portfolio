import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/types/site";
import { Tag } from "@/components/Tag";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-clay">{project.type}</p>
      <h2 className="mt-2 text-xl font-semibold leading-7 text-ink">{project.title}</h2>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slategreen">
        查看详情 <ArrowUpRight size={15} />
      </Link>
    </article>
  );
}
