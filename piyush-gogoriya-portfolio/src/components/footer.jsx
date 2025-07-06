"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0d0d] text-gray-400 py-6 mt-10">
      <div className="mt-8 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <div className="text-xs text-gray-500 text-left">
          © {new Date().getFullYear()} Piyush Gogoriya. All rights reserved.
        </div>

        {/* Social Links + Download */}
        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:piyushgogoriya0312@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={18} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1 hover:text-lime-400 transition text-xs"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
