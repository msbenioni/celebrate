import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Calendar, Gift, Camera, Users } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: "#FFF8F5" }}>
        <div className="absolute inset-0 bg-[url('/floral-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-3xl text-[#FF6F61] font-serif italic mb-4 block">Forever & Always</span>
            <h1 className="text-5xl font-bold mb-6 text-[#333333]">
              Create Beautiful Celebration Event Websites
            </h1>
            <p className="text-xl mb-8 text-[#333333]">
              Celebrate your special day with an elegant, customizable website. Share your love story, collect RSVPs, and bring your loved ones together.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup">
                <Button className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
                  Get Started
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "transparent", color: "#422717", borderColor: "#d3bfaa" }}>
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: "white" }}>
        <div className="container mx-auto px-4">
          <div className="text-center relative mb-16">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs h-[1px] bg-[#FF6F61]/20"></div>
            <h2 className="text-3xl font-medium relative inline-block px-8 bg-white text-[#333333]">Everything You Need</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#F7E7CE]/30 text-center transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#FADADD]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-[#FF6F61]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#FF6F61]">Event Details</h3>
              <p className="text-[#666666]">Share your Celebration date, venue information, and schedule with your guests.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#F7E7CE]/30 text-center transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#FADADD]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-[#FF6F61]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#FF6F61]">RSVP Management</h3>
              <p className="text-[#666666]">Collect and manage guest responses easily with our built-in RSVP system.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#F7E7CE]/30 text-center transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#FADADD]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-6 w-6 text-[#FF6F61]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#FF6F61]">Registry</h3>
              <p className="text-[#666666]">Link to your gift registry or create a custom registry directly on your site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: "#d3bfaa30" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-6" style={{ color: "#422717" }}>Start Planning Your Perfect Day</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#422717" }}>Create your Celebration website in minutes and share your love story with the world.</p>
          <Link href="/signup">
            <Button className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
              Create Your Celebration Website
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}