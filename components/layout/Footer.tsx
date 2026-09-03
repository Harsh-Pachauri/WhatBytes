import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-blue-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} Whatbytes. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-blue-200 transition-colors hover:text-white"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-blue-200 transition-colors hover:text-white"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-blue-200 transition-colors hover:text-white"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
