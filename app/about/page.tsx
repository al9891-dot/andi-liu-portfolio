import { HighlightCard } from "@/components/HighlightCard";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div>
      <SectionHeading title="关于我" description="这不是一段压缩版自我介绍，而是把学习兴趣、实践路径和团队价值放在同一个叙事里。" />
      <div className="grid gap-5">
        <HighlightCard title="我是谁"><p>{profile.about.who}</p></HighlightCard>
        <HighlightCard title="我的兴趣"><p>{profile.about.interests}</p></HighlightCard>
        <HighlightCard title="我的实践路径"><p>{profile.about.path}</p></HighlightCard>
        <HighlightCard title="我能为团队带来什么">
          <ul className="space-y-2">
            {profile.about.contribution.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </HighlightCard>
      </div>
    </div>
  );
}
