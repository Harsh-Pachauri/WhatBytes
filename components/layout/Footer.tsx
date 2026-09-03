import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const categories = [
  { label: "All", href: "/" },
  { label: "Electronics", href: "/?category=electronics" },
  { label: "Clothing", href: "/?category=clothing" },
  { label: "Home", href: "/?category=home" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#002B60] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">Filters</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              {categories.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">About Us</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#005EB7] text-white transition-colors hover:bg-[#0858A8]"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#005EB7] text-white transition-colors hover:bg-[#0858A8]"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#005EB7] text-white transition-colors hover:bg-[#0858A8]"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-blue-200 sm:text-left">
          © {new Date().getFullYear()} Whatbytes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
