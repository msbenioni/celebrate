import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Calendar, Gift, Camera, Users, MessageSquare, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: "#ede7e3" }}>
        <div className="absolute inset-0 bg-[url('/floral-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-3xl text-[#9f7756] font-serif italic mb-4 block">Honoring Life's Moments – Celebrating the Present, Remembering the Past.</span>
            <h1 className="text-5xl font-bold mb-6 text-[#422717]">
              Celebrate Life's Moments & Remember Loved Ones
            </h1>
            <p className="text-xl mb-8 text-[#72513a]">
              Create beautiful websites for weddings, birthdays, anniversaries, or heartfelt tributes. Share stories, collect RSVPs, and honor memories.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup">
                <Button className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
                  Create Your Celebration or Tribute Website
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "transparent", color: "#422717", borderColor: "#d3bfaa" }}>
                  Sign In to Access Memories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: "#fcfcfb" }}>
        <div className="container mx-auto px-4">
          <div className="text-center relative mb-16">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs h-[1px] bg-[#9f7756]/20"></div>
            <h2 className="text-3xl font-medium relative inline-block px-8 bg-[#fcfcfb] text-[#422717]">Everything You Need</h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#d3bfaa]/30 text-center transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Event Details & Memorial Services</h3>
              <p className="text-[#72513a]">Share important dates, venue information, or service details for all life events.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#d3bfaa]/30 text-center transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">RSVP & Guest Management</h3>
              <p className="text-[#72513a]">Seamlessly collect and manage responses for celebrations or remembrance gatherings.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#d3bfaa]/30 text-center transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Registry & Memory Sharing</h3>
              <p className="text-[#72513a]">Create gift registries for events and memory books or virtual guestbooks for tributes.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#d3bfaa]/30 text-center transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Photo & Video Galleries</h3>
              <p className="text-[#72513a]">Share photos and videos to cherish memories and celebrate life.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#d3bfaa]/30 text-center transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Online Guestbook</h3>
              <p className="text-[#72513a]">Allow friends and family to leave heartfelt messages and stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: "#d3bfaa30" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-6" style={{ color: "#422717" }}>Start Honoring & Celebrating Today</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#422717" }}>Create your personalized website in minutes to share your stories, honor loved ones, and celebrate life's precious moments.</p>
          <Link href="/signup">
            <Button className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
              Create Your Celebration or Tribute Website
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}