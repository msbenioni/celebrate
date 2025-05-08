"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  LayoutGrid, 
  Paintbrush, 
  ArrowRight, 
  Heart, 
  Calendar, 
  Gift, 
  Camera, 
  MessageSquare,
  Clock,
  Music,
  Quote,
  ChevronRight
} from 'lucide-react';

export default function DesignGallery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ backgroundColor: "#ede7e3" }}>
        <div className="absolute inset-0 bg-[url('/floral-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-[#422717]">
              Welcome to the Design Gallery
            </h1>
            <p className="text-xl mb-10 text-[#72513a]">
              Browse beautifully crafted templates for celebrations and tributes. Whether you're planning a wedding, birthday, or memorial, find the perfect starting point to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
                Browse Templates
              </Button>
              <Button variant="outline" className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "transparent", color: "#422717", borderColor: "#d3bfaa" }}>
                See Customization Ideas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section className="py-20" style={{ backgroundColor: "#fcfcfb" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium mb-4 text-[#422717]">Choose the Perfect Look for Your Occasion</h2>
            <p className="text-lg max-w-2xl mx-auto text-[#72513a]">
              Our professionally designed templates are made to fit your style, story, and purpose.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Template Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#d3bfaa]/30 transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 bg-[#223d3c]/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-[#9f7756]" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-medium text-[#422717]">Forever & Always</h3>
                  <span className="text-xs px-2 py-1 bg-[#d3bfaa]/20 rounded text-[#72513a]">Wedding</span>
                </div>
                <p className="text-[#72513a] mb-4">Elegant, romantic design with RSVP and registry options</p>
                <Link href="/templates/wedding">
                  <Button variant="outline" className="w-full" style={{ borderColor: "#9f7756", color: "#72513a" }}>
                    View Template
                  </Button>
                </Link>
              </div>
            </div>

            {/* Template Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#d3bfaa]/30 transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 bg-[#d3bfaa]/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gift className="h-16 w-16 text-[#9f7756]" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-medium text-[#422717]">Bright & Bold</h3>
                  <span className="text-xs px-2 py-1 bg-[#d3bfaa]/20 rounded text-[#72513a]">Birthday</span>
                </div>
                <p className="text-[#72513a] mb-4">Fun, colorful layout with countdown and photo gallery</p>
                <Link href="/templates/birthday">
                  <Button variant="outline" className="w-full" style={{ borderColor: "#9f7756", color: "#72513a" }}>
                    View Template
                  </Button>
                </Link>
              </div>
            </div>

            {/* Template Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#d3bfaa]/30 transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 bg-[#ede7e3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-[#9f7756]" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-medium text-[#422717]">Timeless Moments</h3>
                  <span className="text-xs px-2 py-1 bg-[#d3bfaa]/20 rounded text-[#72513a]">Anniversary</span>
                </div>
                <p className="text-[#72513a] mb-4">A classic design to showcase love stories and memories</p>
                <Link href="/templates/anniversary">
                  <Button variant="outline" className="w-full" style={{ borderColor: "#9f7756", color: "#72513a" }}>
                    View Template
                  </Button>
                </Link>
              </div>
            </div>

            {/* Template Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#d3bfaa]/30 transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 bg-[#223d3c]/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-[#9f7756]" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-medium text-[#422717]">In Loving Memory</h3>
                  <span className="text-xs px-2 py-1 bg-[#d3bfaa]/20 rounded text-[#72513a]">Tribute</span>
                </div>
                <p className="text-[#72513a] mb-4">Serene and respectful design to honor a loved one</p>
                <Link href="/templates/tribute">
                  <Button variant="outline" className="w-full" style={{ borderColor: "#9f7756", color: "#72513a" }}>
                    View Template
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/templates">
              <Button variant="link" className="text-lg inline-flex items-center gap-2" style={{ color: "#72513a" }}>
                See All Templates <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customization Inspiration Section */}
      <section className="py-20" style={{ backgroundColor: "#d3bfaa30" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium mb-4 text-[#422717]">Make It Uniquely Yours</h2>
            <p className="text-lg max-w-2xl mx-auto text-[#72513a]">
              See how others have used custom images, videos, and layouts to tell their stories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Inspiration Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 bg-[#ede7e3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-[#9f7756]" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-[#72513a] text-center">A couple's wedding timeline with photo moments</p>
              </div>
            </div>

            {/* Inspiration Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 bg-[#ede7e3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-[#9f7756]" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-[#72513a] text-center">A tribute with a slideshow of memories and messages</p>
              </div>
            </div>

            {/* Inspiration Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 bg-[#ede7e3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Clock className="h-12 w-12 text-[#9f7756]" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-[#72513a] text-center">A birthday site with a live countdown and guestbook</p>
              </div>
            </div>

            {/* Inspiration Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 bg-[#ede7e3]">
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                  <Music className="h-8 w-8 text-[#9f7756]" />
                  <Quote className="h-8 w-8 text-[#9f7756]" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-[#72513a] text-center">A memorial site with custom background music and quotes</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/inspiration">
              <Button variant="link" className="text-lg inline-flex items-center gap-2" style={{ color: "#72513a" }}>
                Get Inspired <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20" style={{ backgroundColor: "#fcfcfb" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium mb-4 text-[#422717]">Create a Website in 3 Simple Steps</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#72513a]">1</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Pick a Template</h3>
              <p className="text-[#72513a]">Choose a starting design from the gallery.</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#72513a]">2</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Customize It</h3>
              <p className="text-[#72513a]">Add photos, videos, stories, and event info.</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ede7e3] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#72513a]">3</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#72513a]">Go Live & Share</h3>
              <p className="text-[#72513a]">Publish your site and share the link with loved ones.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/create-new">
              <Button className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
                Start Creating
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-20" style={{ backgroundColor: "#ede7e3" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium mb-4 text-[#422717]">Stories from Our Community</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#d3bfaa]/30">
              <p className="text-[#72513a] mb-4 italic">
                "This gallery gave us the perfect layout to create a tribute that felt truly personal."
              </p>
              <p className="text-[#422717] font-medium">– Grace, Auckland</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#d3bfaa]/30">
              <p className="text-[#72513a] mb-4 italic">
                "We found a design that perfectly matched our beach wedding theme."
              </p>
              <p className="text-[#422717] font-medium">– Kai & Olivia</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/stories">
              <Button variant="outline" className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "transparent", color: "#422717", borderColor: "#d3bfaa" }}>
                Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16" style={{ backgroundColor: "#d3bfaa30" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-6" style={{ color: "#422717" }}>Found Your Style? Let's Bring It to Life.</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#422717" }}>
            Choose a design, customize it with your story, and share something meaningful.
          </p>
          <Link href="/create-new">
            <Button className="text-lg px-6 py-2 rounded-md" style={{ backgroundColor: "#72513a", color: "#fcfcfb" }}>
              Create Your Website
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
