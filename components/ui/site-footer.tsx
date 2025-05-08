"use client";

import * as React from "react";
import Link from "next/link";
import { Heart, Facebook, Instagram, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d3bfaa]" style={{ backgroundColor: "#72513a" }}>
      
      <div className="container py-16 px-4">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Heart className="h-5 w-5 text-[#d4af37]" />
              </div>
              <span className="font-serif text-lg font-medium text-[#fcfcfb]">Celebrate & Remember</span>
            </div>
            <p className="text-sm text-[#fcfcfb]/90">
              Beautiful, personalized websites to Celebrate Life's Milestones and Honor Loved Ones.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors social-icon"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors social-icon"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors social-icon"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-[#fcfcfb]">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features/celebration-websites"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Celebration Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/features/tribute-memorial"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Tribute & Memorial Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/features/online-guestbook"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Online Guestbook
                </Link>
              </li>
              <li>
                <Link
                  href="/features/photo-gallery"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Photo & Video Galleries
                </Link>
              </li>
              <li>
                <Link
                  href="/features/rsvp"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  RSVP Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-[#fcfcfb]">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources/event-planning"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Event Planning Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/tribute-ideas"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Tribute Ideas
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/memorial-etiquette"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Memorial Service Etiquette
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/celebration-themes"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Wedding & Celebration Themes
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-[#fcfcfb]">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-[#fcfcfb]">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-[#fcfcfb]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-[#fcfcfb]/80 hover:text-[#9f7756] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-[#9f7756]/30 pt-8">
          <p className="text-center text-sm text-[#fcfcfb]/80">
            &copy; {new Date().getFullYear()} Celebrate & Remember. All rights reserved.
          </p>
        </div>
      </div>
    
    </footer>
  );
}

