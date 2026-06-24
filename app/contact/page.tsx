import { ContactCard } from "@/components/ContactCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { contact } from "@/data/contact";

export default function ContactPage() {
  return (
    <div>
      <SectionHeading title="联系" description="我目前开放兼职、实习、项目制合作机会，尤其关注文化旅游、入境旅游、内容运营、国际客户沟通与目的地研究等方向。" />
      <section className="mb-8 border border-line bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">开放方向</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {contact.openTo.map((item) => <Tag key={item}>{item}</Tag>)}
        </div>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        <ContactCard label="邮箱" value={contact.email} />
        <ContactCard label="LinkedIn" value={contact.linkedin} />
        <ContactCard label="位置" value={contact.location} />
        <ContactCard label="电话 / 微信" value={contact.phone.isPublic || contact.wechat.isPublic ? `${contact.phone.value} / ${contact.wechat.value}` : "可按需提供"} />
      </div>
    </div>
  );
}
