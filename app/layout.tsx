import type { Metadata } from "next";
import "@/app/globals.css";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: "刘安迪 / Andi Liu",
  description: "文化旅游、遗产叙事、国际沟通、内容与产品运营个人展示网站"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
