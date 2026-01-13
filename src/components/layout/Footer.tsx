import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/MAGNUNMAX",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/feed/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <p className="text-lg font-bold">Pedro's Portfolio</p>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 transition-colors hover:text-[#FFD93D]"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>
            Designed with <span className="text-[#FF6B6B]">❤</span> and built with{" "}
            <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD93D] transition-colors">
              Next.js
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
