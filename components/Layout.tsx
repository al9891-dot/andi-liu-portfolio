import { Navbar } from "@/components/Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-10 md:px-6 md:py-14">{children}</main>
      <footer className="border-t border-line px-4 py-8 text-center text-sm text-muted md:px-6">
        刘安迪 / Andi Liu · 中文个人展示网站 MVP · 内容均来自本地静态数据文件
      </footer>
    </>
  );
}
