import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      <Link href="/projects" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slategreen">
        <ArrowLeft size={15} /> 返回项目
      </Link>
      <SectionHeading eyebrow={project.type} title={project.title} description={project.summary} />
      <div className="mb-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <div className="grid gap-5">
        {project.sections.map((section) => (
          <section key={section.title} className="border border-line bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">{section.title}</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              {section.items.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
