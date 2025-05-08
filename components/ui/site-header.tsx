"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Calendar, Gift, Camera, Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
// Theme toggle removed as requested

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/dashboard', label: 'My Celebrations & Tributes' },
    { href: '/create-event', label: 'Create a Celebration or Tribute' },
    { href: '/explore', label: 'Explore Memories & Events' },
    { href: '/help', label: 'Support & Guidance' },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-sm" style={{ backgroundColor: "#223d3c", borderColor: "#9f7756" }}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Heart className="h-6 w-6 transition-transform group-hover:scale-110" style={{ color: '#9f7756' }} />
              <Heart className="h-6 w-6 absolute -top-1 -right-1 opacity-50 scale-75 transition-transform group-hover:scale-90" style={{ color: '#9f7756' }} />
            </div>
            <span className="font-serif text-xl font-medium" style={{ color: '#fcfcfb' }}>
              Celebrate & Remember
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{
                color: isActive(item.href) ? '#9f7756' : '#fcfcfb'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {/* Theme toggle removed */}
          <Link href="/login">
            <Button variant="outline" className="btn-outline" size="sm" style={{ backgroundColor: "transparent", color: "#fcfcfb", borderColor: "#9f7756" }}>
              Sign In to Access Memories
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="btn-primary" size="sm" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
              Create Your Website
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex md:hidden items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" style={{ color: "#9f7756" }} />
          ) : (
            <Menu className="h-6 w-6" style={{ color: "#9f7756" }} />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-sm border-b" style={{ backgroundColor: "#223d3c", borderColor: "#9f7756" }}>
          <div className="container py-6 space-y-6">
            <nav className="flex flex-col space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-lg ${
                    isActive(item.href)
                      ? 'text-secondary'
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 pt-2">
              <Link href="/login">
                <Button variant="outline" className="btn-outline w-full" style={{ backgroundColor: "transparent", color: "#fcfcfb", borderColor: "#9f7756" }}>
                  Sign In to Access Memories
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="btn-primary w-full" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
                  Create Your Website
                </Button>
              </Link>
              <div className="flex justify-center pt-4">
                {/* Theme toggle removed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
