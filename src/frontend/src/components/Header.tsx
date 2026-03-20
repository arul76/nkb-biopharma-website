import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/markets", label: "Markets" },
  { to: "/commitment", label: "Our Commitment" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouterState();
  const pathname = router.location.pathname;

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className="bg-white sticky top-0 z-50 shadow-md"
      style={{ borderBottom: "3px solid oklch(0.72 0.12 80)" }}
      data-ocid="nav.panel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-between"
          style={{ minHeight: 96 }}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            data-ocid="nav.link"
          >
            <img
              src="/assets/uploads/Logo-1.png"
              alt="NKB Biopharma"
              style={{ height: 80 }}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className={`px-3 py-2 rounded text-sm font-semibold transition-colors ${
                  isActive(link.to)
                    ? "bg-gold text-white"
                    : "text-navy hover:bg-gold hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-navy p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            type="button"
            data-ocid="nav.toggle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                isActive(link.to)
                  ? "bg-gold text-white"
                  : "text-navy hover:bg-gold hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
