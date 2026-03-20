import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const products = [
  "NKB-ONCO 101",
  "NKB-CARDIO 202",
  "NKB-IMMUNO 303",
  "NKB-RARE 404",
  "NKB-BIO 505",
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/markets", label: "Markets" },
  { to: "/commitment", label: "Our Commitment" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/uploads/Logo-1.png"
              alt="NKB Biopharma"
              className="h-12 object-contain mb-4"
            />
            <p className="text-sm leading-relaxed">
              Innovating pharmaceutical solutions to improve lives and build a
              healthier tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-gold transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p}>
                  <Link
                    to="/products"
                    className="text-sm hover:text-gold transition-colors"
                    data-ocid="nav.link"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-gold" />
                <span>
                  NKB Biopharma Ltd.,
                  <br />
                  123 Pharma Park, Science City,
                  <br />
                  Hyderabad – 500 081, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href="mailto:info@nkbbiopharma.com"
                  className="hover:text-gold transition-colors"
                >
                  info@nkbbiopharma.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a
                  href="tel:+914012345678"
                  className="hover:text-gold transition-colors"
                >
                  +91 40 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© {year} NKB Biopharma Ltd. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
