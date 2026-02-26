"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { usePathname } from "next/navigation";
import Image from "next/image";
const navLinks = [
  { to: "/", label: "Trang chủ" },
  { to: "/products", label: "Sản phẩm" },
  { to: "/blog", label: "Bài viết" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const pathname = usePathname();

  return (
    <header className="w-full px-16 py-2 mx-auto sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container-page flex items-center justify-between h-fit">
        <Link
          href="/"
          className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground"
        >
          <Image
            src="/logo-treknice.png"
            alt="Treknice"
            className="rounded-full"
            width={50}
            height={50}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative p-2 text-foreground hover:text-primary transition-colors"
          >
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container-page py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium tracking-wide uppercase py-2 ${
                  pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
