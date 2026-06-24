import { ResumeSection } from "@/components/ResumeSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { awards } from "@/data/awards";
import { contact } from "@/data/contact";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { metrics } from "@/data/metrics";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { research } from "@/data/research";
import { skillGroups } from "@/data/skills";

export default function ResumePage() {
  return (
    <article className="border border-line bg-white p-5 shadow-soft md:p-8">
      <SectionHeading title="完整简历" description="网页版简历尽量完整承载已有材料。隐私联系方式默认隐藏，后续可在 contact 数据文件中决定是否公开。" />

      <ResumeSection title="个人信息">
        <div className="grid gap-4 text-sm leading-7 text-muted md:grid-cols-2">
          <p><strong className="text-ink">{profile.nameCn} / {profile.nameEn}</strong></p>
          <p>{profile.title}</p>
          <p>邮箱：{contact.email}</p>
          <p>电话与微信：{contact.phone.isPublic || contact.wechat.isPublic ? `${contact.phone.value} / ${contact.wechat.value}` : "可按需提供"}</p>
          <p>位置：{contact.location}</p>
          <p>LinkedIn：{contact.linkedin}</p>
        </div>
      </ResumeSection>

      <ResumeSection title="个人简介">
        <p className="text-sm leading-8 text-muted">{profile.intro}</p>
        <p className="mt-3 text-sm leading-8 text-muted">{profile.positioning}</p>
      </ResumeSection>

      <ResumeSection title="教育背景">
        <div className="space-y-5">
          {education.map((item) => (
            <div key={item.school}>
              <p className="text-sm font-semibold text-clay">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.school}</h3>
              <p className="text-sm text-muted">{item.degree}</p>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-muted">
                {item.details.map((detail) => <li key={detail}>• {detail}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="实习经历">
        <div className="space-y-6">
          {experiences.filter((item) => !["gulangyu", "chengxin"].includes(item.id)).map((item) => (
            <div key={item.id}>
              <p className="text-sm font-semibold text-clay">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.companyDisplayName}</h3>
              <p className="text-sm text-muted">{item.role}</p>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-muted">
                {[...item.details, ...item.outcomes].map((detail) => <li key={detail}>• {detail}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="研究与田野经验">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-ink">{research.currentTitle}</h3>
            <ul className="mt-2 space-y-1 text-sm leading-7 text-muted">
              {research.current.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          {experiences.filter((item) => item.id === "gulangyu").map((item) => (
            <div key={item.id}>
              <p className="text-sm font-semibold text-clay">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.companyDisplayName}</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-muted">
                {[...item.details, ...item.outcomes].map((detail) => <li key={detail}>• {detail}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="项目经历">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.slug} className="border border-line p-4">
              <p className="text-sm font-semibold text-clay">{project.type}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{project.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{project.summary}</p>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="核心能力与亮点">
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="border border-line p-4">
              <h3 className="font-semibold text-ink">{group.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{group.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {metrics.slice(0, 12).map((metric) => <Tag key={`${metric.value}-${metric.label}`}>{metric.value} · {metric.label}</Tag>)}
        </div>
      </ResumeSection>

      <ResumeSection title="语言与专业能力">
        <div className="flex flex-wrap gap-2">
          {["雅思 7.0", "英语可作为工作语言", "中英双语写作", "英文资料检索", "批判话语分析 CDA", "定性研究", "目的地研究", "内容运营", "用户增长", "跨文化沟通"].map((item) => <Tag key={item}>{item}</Tag>)}
        </div>
      </ResumeSection>

      <ResumeSection title="奖项">
        <ul className="space-y-2 text-sm leading-7 text-muted">
          {awards.map((award) => <li key={award}>• {award}</li>)}
        </ul>
      </ResumeSection>
    </article>
  );
}
