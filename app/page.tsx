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
            <span className="text-3xl text-[#9f7756] font-serif italic mb-4 block">Honoring Every Moment</span>
            <h1 className="text-5xl font-bold mb-6 text-[#422717] main-headline">
              Celebrating Life, Remembering Love
            </h1>
            <p className="text-xl mb-8 text-[#72513a]">
              Create beautiful websites for weddings, birthdays, anniversaries, and heartfelt tributes. Share stories, collect RSVPs, and keep memories alive forever.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup">
                <Button className="text-lg px-6 py-2 rounded-md btn-primary">
                  Create Your Own
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="text-lg px-6 py-2 rounded-md btn-outline" style={{ color: "#422717" }}>
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: "#fcfcfb" }}>
        <div className="container mx-auto px-4">
          <div className="text-center relative mb-16">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs h-[1px] bg-[#9f7756]/20"></div>
            <h2 className="text-3xl font-medium relative inline-block px-8 bg-[#fcfcfb] text-[#422717]">Everything You Need</h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            <div className="feature-card text-center">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Event Details</h3>
              <p className="text-[#72513a]">Share your celebration dates or memorial service details with those who matter most.</p>
            </div>
            
            <div className="feature-card text-center">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">RSVP & Guest Management</h3>
              <p className="text-[#72513a]">Effortlessly manage guest responses for weddings, birthdays, and remembrance gatherings.</p>
            </div>
            
            <div className="feature-card text-center">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Registry & Memory Sharing</h3>
              <p className="text-[#72513a]">Create gift registries for joyous occasions or virtual guestbooks for heartfelt memories.</p>
            </div>

            <div className="feature-card text-center">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Photo & Video Galleries</h3>
              <p className="text-[#72513a]">Capture and share your most treasured moments—past and present.</p>
            </div>

            <div className="feature-card text-center">
              <div className="w-12 h-12 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-[#72513a]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Online Guestbook</h3>
              <p className="text-[#72513a]">Give your loved ones a place to share their memories, thoughts, and well wishes.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: "#d3bfaa30" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-6 main-headline" style={{ color: "#422717" }}>Celebrate Today. Remember Forever.</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#422717" }}>In just minutes, create a beautiful, lasting space for celebrations or tributes—where memories are cherished and stories are shared.</p>
          <Link href="/signup">
            <Button className="text-lg px-6 py-2 rounded-md btn-primary">
              Create Your Own
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}