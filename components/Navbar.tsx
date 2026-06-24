"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="min-w-0">
          <p className="text-sm font-semibold text-ink">{profile.nameCn} / {profile.nameEn}</p>
          <p className="hidden text-xs text-muted sm:block">文化旅游 · 遗产叙事 · 国际沟通</p>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-3 py-2 text-sm text-muted transition hover:bg-white hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "关闭导航" : "打开导航"}
          className="inline-flex h-10 w-10 items-center justify-center border border-line bg-white text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <nav className="grid border-t border-line bg-paper px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="py-3 text-sm text-ink" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
