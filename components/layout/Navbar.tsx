
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#271522]/95 text-[#F6F0E8] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center border border-[#C5A46D]/60 font-serif text-lg text-[#C5A46D] transition-colors group-hover:bg-[#C5A46D] group-hover:text-[#271522]">
            MF
          </span>

          <span>
            <span className="block font-serif text-lg leading-tight">
              Mookho Fuma
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.25em] text-[#F6F0E8]/55">
              Film & Production
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-sm transition-colors ${
                  isActive
                    ? "text-[#C5A46D]"
                    : "text-[#F6F0E8]/70 hover:text-[#F6F0E8]"
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-[#C5A46D]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="border border-[#C5A46D] px-5 py-3 text-sm font-medium text-[#C5A46D] transition-colors hover:bg-[#C5A46D] hover:text-[#271522]"
          >
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/15 md:hidden"
        >
          <span
            className={`h-px w-5 bg-[#F6F0E8] transition-transform ${
              menuOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-[#F6F0E8] transition-transform ${
              menuOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 px-6 pb-6 pt-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-white/10 py-4 text-sm ${
                    isActive
                      ? "text-[#C5A46D]"
                      : "text-[#F6F0E8]/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 bg-[#C5A46D] px-5 py-4 text-center text-sm font-semibold text-[#271522]"
            >
              Let&apos;s Talk ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
