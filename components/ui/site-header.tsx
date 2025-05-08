"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Bell, User, Menu, X, HelpCircle, PlusCircle, Home, LayoutGrid, Palette } from 'lucide-react';

import { Button } from '@/components/ui/button';
// Theme toggle removed as requested

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // This would be replaced with actual auth state
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  // Navigation items when user is not signed in
  const publicNavItems = [
    { 
      href: '/design-gallery', 
      label: 'Design Gallery', 
      icon: LayoutGrid,
      tooltip: 'Browse celebration and tribute templates for inspiration.' 
    },
  ];

  // Navigation items when user is signed in
  const privateNavItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/create-new', label: 'Create New', icon: PlusCircle },
    { 
      href: '/design-gallery', 
      label: 'Design Gallery', 
      icon: LayoutGrid,
      tooltip: 'Browse celebration and tribute templates for inspiration.' 
    },
    { href: '/help', label: 'Help', icon: HelpCircle },
  ];

  // Choose which nav items to display based on login status
  const navItems = isLoggedIn ? privateNavItems : publicNavItems;

  const isActive = (path: string) => {
    return pathname === path;
  };

  // Toggle login state for demo purposes (would be replaced with actual auth)
  const toggleLoginState = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsProfileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-sm" style={{ backgroundColor: "#223d3c", borderColor: "#9f7756" }}>
      <div className="container flex h-16 items-center justify-between">
        {/* For demo purposes - would be removed in production */}
        <div className="absolute top-0 left-0 bg-[#9f7756] text-[#fcfcfb] text-xs px-2 py-1 rounded-br-md z-50">
          <button onClick={toggleLoginState}>
            {isLoggedIn ? 'Switch to Logged Out' : 'Switch to Logged In'}
          </button>
        </div>
        
        {/* Optional welcome banner when logged in */}
        {isLoggedIn && (
          <div className="absolute left-0 right-0 top-16 bg-[#d3bfaa]/30 py-2 text-center text-[#422717] text-sm">
            Hi Username, ready to create your next memory?
          </div>
        )}
        
        {/* Left section: Nav links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="nav-link flex items-center gap-2"
                style={{
                  color: isActive(item.href) ? '#9f7756' : '#fcfcfb'
                }}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
              {item.tooltip && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-[-40px] w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                  <div className="bg-[#422717] text-[#fcfcfb] text-xs rounded py-1 px-2 shadow-lg">
                    {item.tooltip}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-45 w-2 h-2 bg-[#422717]"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Center section: Logo - Acts as home button */}
        <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <Link 
            href="/" 
            className="flex items-center space-x-2 group" 
            title="Home"
            aria-label="Go to homepage"
          >
            <div className="relative">
              <Heart className="h-6 w-6 transition-transform group-hover:scale-110" style={{ color: '#9f7756' }} />
              <Heart className="h-6 w-6 absolute -top-1 -right-1 opacity-50 scale-75 transition-transform group-hover:scale-90" style={{ color: '#9f7756' }} />
            </div>
            <span className="font-serif text-xl font-medium" style={{ color: '#fcfcfb' }}>
              Celebrate & Remember
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              {/* Notifications icon */}
              <Link href="/notifications" className="relative">
                <Bell className="h-5 w-5" style={{ color: '#fcfcfb' }} />
                <span className="absolute -top-1 -right-1 bg-[#9f7756] text-[#fcfcfb] rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
              </Link>
              
              {/* Profile dropdown */}
              <div className="relative">
                <button 
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="h-8 w-8 rounded-full bg-[#72513a] flex items-center justify-center">
                    <User className="h-5 w-5" style={{ color: '#fcfcfb' }} />
                  </div>
                </button>
                
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-lg z-50">
                    <Link href="/account" className="block px-4 py-2 text-sm text-[#422717] hover:bg-[#ede7e3]">
                      My Account
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm text-[#422717] hover:bg-[#ede7e3]">
                      Settings
                    </Link>
                    <div className="border-t border-[#d3bfaa] my-1"></div>
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full text-left px-4 py-2 text-sm text-[#422717] hover:bg-[#ede7e3]"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" className="btn-outline" size="sm" style={{ backgroundColor: "transparent", color: "#fcfcfb", borderColor: "#9f7756" }}>
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="btn-primary" size="sm" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
                  Create Your Own
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="flex md:hidden items-center justify-center absolute right-4"
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
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`nav-link text-lg flex items-center gap-2 ${
                      isActive(item.href)
                        ? 'text-[#9f7756]'
                        : 'text-[#fcfcfb]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    title={item.tooltip || ''}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
            
            {isLoggedIn ? (
              <div className="flex flex-col space-y-3 border-t border-[#9f7756]/30 mt-4 pt-4">
                <Link href="/account" className="text-[#fcfcfb] text-lg">
                  My Account
                </Link>
                <Link href="/settings" className="text-[#fcfcfb] text-lg">
                  Settings
                </Link>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="text-[#fcfcfb] text-lg text-left"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-3 pt-2">
                <Link href="/login">
                  <Button variant="outline" className="btn-outline w-full" style={{ backgroundColor: "transparent", color: "#fcfcfb", borderColor: "#9f7756" }}>
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="btn-primary w-full" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
                    Create Your Own
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
