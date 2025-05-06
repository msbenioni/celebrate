"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, LogOut, Home, Calendar, Users, FileText, Settings, Heart } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'My Memorials', href: '/dashboard/memorials', icon: Heart },
    { name: 'Events', href: '/dashboard/events', icon: Calendar },
    { name: 'Tributes', href: '/dashboard/tributes', icon: FileText },
    { name: 'RSVPs', href: '/dashboard/rsvps', icon: Users },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  return (
    <div className="flex h-screen bg-[#fcfcfb]" style={{ borderColor: "#d3bfaa" }}>
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col" style={{ borderColor: "#d3bfaa" }}>
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-[#fcfcfb] border-r border-[#d3bfaa]" style={{ borderColor: "#d3bfaa" }}>
          <div className="flex items-center justify-center flex-shrink-0 px-4 mb-6">
            <Link href="/" className="flex items-center">
              <Heart className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Tribute Hub</span>
            </Link>
          </div>
          <div className="flex flex-col flex-grow px-4 mt-5">
            <nav className="flex-1 space-y-1 bg-[#fcfcfb]">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out ${isActive(item.href) ? 'bg-[#d3bfaa30] text-[#72513a]' : 'text-[#72513a] hover:bg-[#ede7e350] hover:text-[#422717]'}`}
                  >
                    <Icon className={`flex-shrink-0 w-6 h-6 mr-3 ${isActive(item.href) ? 'text-[#9f7756]' : 'text-[#72513a80] group-hover:text-[#72513a]'}`} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 p-4 border-t border-[#d3bfaa]" style={{ borderColor: "#d3bfaa" }}>
            <Link
              href="/api/auth/signout"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-[#422717] bg-[#fcfcfb] border border-[#d3bfaa] rounded-md hover:bg-[#ede7e350] transition-colors duration-150"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sign Out
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex flex-col flex-1 overflow-hidden" style={{ borderColor: "#d3bfaa" }}>
        <div className="relative z-10 flex-shrink-0 h-16 bg-[#fcfcfb] border-b border-[#d3bfaa] md:hidden" style={{ borderColor: "#d3bfaa" }}>
          <div className="flex items-center justify-between h-full px-4">
            <Link href="/" className="flex items-center">
              <Heart className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Tribute Hub</span>
            </Link>
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-[#72513a] rounded-md hover:text-[#422717] hover:bg-[#ede7e350] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#9f7756]"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-[#fcfcfb]">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
