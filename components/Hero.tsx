import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Tag } from "@/components/Tag";

export function Hero() {
  return (
    <section className="grid gap-8 border-b border-line pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
      <div>
        <div className="mb-5 flex flex-wrap gap-2">
          {profile.keywords.slice(0, 5).map((keyword) => <Tag key={keyword}>{keyword}</Tag>)}
        </div>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-ink md:text-6xl">
          {profile.nameCn} / {profile.nameEn}
        </h1>
        <p className="mt-5 text-xl font-medium leading-8 text-slategreen">{profile.subtitle}</p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            ["/experience", "查看经历"],
            ["/projects", "查看项目"],
            ["/research", "查看研究"],
            ["/resume", "查看完整简历"],
            ["/contact", "联系我"]
          ].map(([href, label]) => (
            <Link key={href} href={href} className="inline-flex items-center gap-2 border border-slategreen bg-slategreen px-4 py-2.5 text-sm font-medium text-white transition hover:bg-ink">
              {label}<ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </div>
      <div className="border border-line bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-clay">个人主线</p>
        <p className="mt-3 text-base leading-8 text-ink">{profile.positioning}</p>
      </div>
    </section>
  );
}
