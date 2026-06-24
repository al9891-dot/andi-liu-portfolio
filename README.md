# 刘安迪 / Andi Liu 个人展示网站

中文版个人展示网站 MVP，基于 Next.js、TypeScript 和 Tailwind CSS。

## 本地运行

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
```

## 内容编辑

- 个人信息：首页与 About：`data/profile.ts`
- 教育背景：`data/education.ts`
- 经历：`data/experience.ts`
- 项目：`data/projects.ts`
- 研究：`data/research.ts`
- 能力：`data/skills.ts`
- 量化成果：`data/metrics.ts`
- 联系方式：`data/contact.ts`

电话和微信默认隐藏，可在 `data/contact.ts` 中调整 `isPublic`。
