import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <SectionHeading title="项目" description="项目页把研究、田野、产品、增长和社群运营拆开呈现，每个项目都有独立详情页，方便面试官按兴趣深入查看。" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}
