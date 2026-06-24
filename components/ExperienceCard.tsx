"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ExperienceItem } from "@/types/site";
import { Tag } from "@/components/Tag";

export function ExperienceCard({ item, defaultOpen = false }: { item: ExperienceItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className="relative border border-line bg-white p-5 shadow-sm">
      <span className="absolute -left-[29px] top-6 h-3 w-3 border border-slategreen bg-paper" />
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold text-clay">{item.period}</p>
          <h2 className="mt-1 text-xl font-semibold text-ink">{item.companyDisplayName}</h2>
          <p className="mt-1 text-sm font-medium text-muted">{item.role}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center gap-2 border border-line px-3 py-2 text-sm text-ink transition hover:bg-paper md:w-auto"
        >
          {open ? "收起详情" : "展开详情"}
          <ChevronDown size={16} className={open ? "rotate-180 transition" : "transition"} />
        </button>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.keywords.map((keyword) => <Tag key={keyword}>{keyword}</Tag>)}
      </div>
      {item.periodNote ? <p className="mt-4 border-l-2 border-clay pl-3 text-sm leading-6 text-muted">{item.periodNote}</p> : null}
      {open ? (
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <h3 className="text-sm font-semibold text-ink">完整描述</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              {item.details.map((detail) => <li key={detail}>• {detail}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink">关键成果</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              {item.outcomes.map((outcome) => <li key={outcome}>• {outcome}</li>)}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}
