"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Edit,
  ChevronLeft,
  Share,
  Mail,
  Phone,
  Check,
  X,
  Send
} from 'lucide-react';

type EventType = 'memorial' | 'anniversary' | 'gathering';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  organizer: string;
  eventType: EventType;
  maxAttendees?: number;
}

interface RSVP {
  id: string;
  name: string;
  email: string;
  attending: boolean;
  message?: string;
}

export default function EventDetailPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [event, setEvent] = useState<Event | null>(null);
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    attending: true,
    message: ''
  });
  
  const [isRSVPSubmitting, setIsRSVPSubmitting] = useState(false);
  const [rsvpError, setRsvpError] = useState('');
  const [showRSVPForm, setShowRSVPForm] = useState(false);
  
  // Check for success message from URL params
  useEffect(() => {
    if (searchParams.get('created') === 'true') {
      setSuccessMessage('Event created successfully!');
    } else if (searchParams.get('updated') === 'true') {
      setSuccessMessage('Event updated successfully!');
    }
    
    // Clear success message after 5 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [searchParams, successMessage]);
  
  // Fetch event and RSVPs
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        // Mock data - in a real app this would be API calls
        const mockEvents: Record<string, Event> = {
          '1': {
            id: '1',
            title: 'Memorial Service for John Doe',
            date: '2025-05-15T14:00:00Z',
            location: 'Riverside Cemetery',
            description: 'A celebration of life for our beloved friend and family member. John was known for his kindness and generosity. Please join us as we gather to share memories and celebrate his life.',
            organizer: 'Smith Family',
            eventType: 'memorial'
          },
          '2': {
            id: '2',
            title: 'Anniversary Remembrance',
            date: '2025-06-03T18:30:00Z',
            location: 'Oak Park Memorial Garden',
            description: 'Annual gathering to honor the memory of Jane Smith. It\'s been 5 years since Jane left us, and we continue to carry her spirit in our hearts. Join us for an evening of remembrance.',
            organizer: 'Smith Family Foundation',
            eventType: 'anniversary'
          },
          '3': {
            id: '3',
            title: 'Charity Walk in Memory of Veterans',
            date: '2025-05-30T09:00:00Z',
            location: 'Central Park',
            description: 'Join us for a 5k walk to raise funds for veterans memorial. This event honors those who served and supports the building of a new memorial in our community.',
            organizer: 'Veterans Memorial Association',
            eventType: 'gathering',
            maxAttendees: 200
          }
        };
        
        const eventData = mockEvents[id];
        
        if (!eventData) {
          throw new Error('Event not found');
        }
        
        setEvent(eventData);
        
        // Fetch RSVPs
        // In a real app, this would be a separate API call
        const mockRSVPs: Record<string, RSVP[]> = {
          '1': [
            { id: '101', name: 'Jane Smith', email: 'jane@example.com', attending: true, message: 'I will be there to pay my respects.' },
            { id: '102', name: 'Tom Johnson', email: 'tom@example.com', attending: true, message: 'Looking forward to celebrating their life.' }
          ],
          '2': [
            { id: '201', name: 'Michael Williams', email: 'michael@example.com', attending: true, message: 'I will be attending with my family.' }
          ],
          '3': [
            { id: '301', name: 'Sarah Davis', email: 'sarah@example.com', attending: true, message: 'Count me in for the charity walk.' },
            { id: '302', name: 'Robert Brown', email: 'robert@example.com', attending: false, message: 'Unfortunately I can\'t make it, but I will donate.' }
          ]
        };
        
        setRsvps(mockRSVPs[id] || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [id]);
  
  const handleRSVPChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setRsvpForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  const handleRSVPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRSVPSubmitting(true);
    setRsvpError('');
    
    try {
      // Validate form
      if (!rsvpForm.name || !rsvpForm.email) {
        throw new Error('Name and email are required');
      }
      
      // In a real app, this would be an API call
      // For demo, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add new RSVP to the list
      const newRSVP: RSVP = {
        id: `${Date.now()}`,
        name: rsvpForm.name,
        email: rsvpForm.email,
        attending: rsvpForm.attending,
        message: rsvpForm.message,
      };
      
      setRsvps(prev => [...prev, newRSVP]);
      
      // Reset form
      setRsvpForm({
        name: '',
        email: '',
        attending: true,
        message: ''
      });
      
      setShowRSVPForm(false);
      setSuccessMessage('Thank you for your RSVP!');
    } catch (err) {
      setRsvpError(err instanceof Error ? err.message : 'Failed to submit RSVP');
    } finally {
      setIsRSVPSubmitting(false);
    }
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  // Get event type icon
  const getEventTypeIcon = (type: EventType) => {
    switch (type) {
      case 'memorial':
        return <Heart className="h-5 w-5" style={{ color: "#9f7756" }} />;
      case 'anniversary':
        return <Calendar className="h-5 w-5" style={{ color: "#72513a" }} />;
      case 'gathering':
        return <Users className="h-5 w-5" style={{ color: "#9f7756" }} />;
      default:
        return <Calendar className="h-5 w-5" style={{ color: "#72513a" }} />;
    }
  };
  
  // Get event type label
  const getEventTypeLabel = (type: EventType) => {
    switch (type) {
      case 'memorial':
        return 'Memorial Service';
      case 'anniversary':
        return 'Anniversary Remembrance';
      case 'gathering':
        return 'Memorial Gathering';
      default:
        return 'Event';
    }
  };
  
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 p-8">
          <div className="flex items-center justify-center h-24">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#72513a] mx-auto"></div>
              <p className="mt-4 text-[#422717]">Loading event details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error === 'Event not found' || !event) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#422717] mb-4">Event Not Found</h2>
            <p className="text-[#72513a] mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <button
              onClick={() => router.push('/events')}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-[#fcfcfb] bg-[#72513a] hover:bg-[#422717] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9f7756]"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Events
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  const attendingCount = rsvps.filter(rsvp => rsvp.attending).length;
  const notAttendingCount = rsvps.filter(rsvp => !rsvp.attending).length;
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Success message */}
      {successMessage && (
        <div className="mb-6 p-4 bg-[#d3bfaa30] border-l-4 border-[#9f7756] text-[#72513a] flex items-center">
          <Check className="h-5 w-5 mr-2" />
          <p>{successMessage}</p>
        </div>
      )}
      
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center px-3 py-2 border border-[#d3bfaa] shadow-sm text-sm font-medium rounded-md text-[#422717] bg-[#fcfcfb] hover:bg-[#ede7e3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9f7756]"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </button>
        
        <div className="flex space-x-3">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    title: event.title,
                    text: `Join me at ${event.title}`,
                    url: window.location.href,
                  })
                  .catch(console.error);
              } else {
                navigator.clipboard.writeText(window.location.href);
                setSuccessMessage('Link copied to clipboard');
              }
            }}
            className="inline-flex items-center px-3 py-2 border border-[#d3bfaa] shadow-sm text-sm font-medium rounded-md text-[#422717] bg-[#fcfcfb] hover:bg-[#ede7e3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9f7756]"
          >
            <Share className="h-5 w-5 mr-1" />
            Share
          </button>
          
          <Link
            href={`/events/${id}/edit`}
            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-[#fcfcfb] bg-[#72513a] hover:bg-[#422717] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9f7756]"
          >
            <Edit className="h-5 w-5 mr-1" />
            Edit
          </Link>
        </div>
      </div>
      
      <div className="bg-[#fcfcfb] rounded-xl shadow-xl overflow-hidden border border-[#ede7e3]">
        {/* Event details */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center space-x-2 text-sm font-medium text-[#72513a] mb-4">
            <span className="flex items-center">
              {getEventTypeIcon(event.eventType)}
              <span className="ml-1">{getEventTypeLabel(event.eventType)}</span>
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-[#422717] mb-6">{event.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-indigo-700">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-[#422717]">Date & Time</h2>
                <p className="text-[#72513a]">{formatDate(event.date)}</p>
                <p className="text-[#72513a]">{formatTime(event.date)}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-indigo-700">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-[#422717]">Location</h2>
                <p className="text-[#72513a]">{event.location}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-indigo-700">
                <Users className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-[#422717]">Attendance</h2>
                <p className="text-[#72513a]">
                  {attendingCount} confirmed
                  {event.maxAttendees && (
                    <span> / {event.maxAttendees} max</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#422717] mb-3">About this Event</h2>
            <div className="prose max-w-none text-[#72513a]">
              <p>{event.description}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#422717] mb-3">Organizer</h2>
            <p className="text-[#72513a]">{event.organizer}</p>
            <div className="mt-3 flex items-center space-x-4">
              <a href="#" className="inline-flex items-center text-sm text-[#72513a] hover:text-[#9f7756]">
                <Mail className="h-4 w-4 mr-1" />
                Contact organizer
              </a>
              <a href="#" className="inline-flex items-center text-sm text-[#72513a] hover:text-[#9f7756]">
                <Phone className="h-4 w-4 mr-1" />
                Call organizer
              </a>
            </div>
          </div>
          
          {/* RSVP Section */}
          <div className="border-t border-[#ede7e3] pt-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#422717]">RSVPs ({rsvps.length})</h2>
              {!showRSVPForm ? (
                <button
                  onClick={() => setShowRSVPForm(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[#fcfcfb] bg-[#72513a] hover:bg-[#422717] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9f7756]"
                >
                  RSVP to this event
                </button>
              ) : (
                <button
                  onClick={() => setShowRSVPForm(false)}
                  className="inline-flex items-center px-4 py-2 border border-[#d3bfaa] text-sm font-medium rounded-md shadow-sm text-[#422717] bg-[#fcfcfb] hover:bg-[#ede7e3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9f7756]"
                >
                  <X className="h-5 w-5 mr-1" />
                  Cancel
                </button>
              )}
            </div>
            
            {/* RSVP Form */}
            {showRSVPForm && (
              <div className="bg-[#ede7e330] rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-[#422717] mb-4">Your RSVP</h3>
                
                {rsvpError && (
                  <div className="mb-4 p-3 bg-[#223d3c10] border-l-4 border-[#223d3c] text-[#223d3c]">
                    <p>{rsvpError}</p>
                  </div>
                )}
                
                <form onSubmit={handleRSVPSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#422717]">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={rsvpForm.name}
                        onChange={handleRSVPChange}
                        className="mt-1 block w-full rounded-md border-[#d3bfaa] shadow-sm focus:border-[#72513a] focus:ring-[#9f7756] sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#422717]">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={rsvpForm.email}
                        onChange={handleRSVPChange}
                        className="mt-1 block w-full rounded-md border-[#d3bfaa] shadow-sm focus:border-[#72513a] focus:ring-[#9f7756] sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#422717]">Attendance</label>
                    <div className="mt-2 space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="attending"
                          checked={rsvpForm.attending}
                          onChange={() => setRsvpForm(prev => ({ ...prev, attending: true }))}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <span className="ml-2 text-[#72513a]">I will attend</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="attending"
                          checked={!rsvpForm.attending}
                          onChange={() => setRsvpForm(prev => ({ ...prev, attending: false }))}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <span className="ml-2 text-[#72513a]">I cannot attend</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#422717]">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={rsvpForm.message}
                      onChange={handleRSVPChange}
                      className="mt-1 block w-full rounded-md border-[#d3bfaa] shadow-sm focus:border-[#72513a] focus:ring-[#9f7756] sm:text-sm"
                      placeholder="Add a personal message or note"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isRSVPSubmitting}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[#fcfcfb] bg-[#72513a] hover:bg-[#422717] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9f7756] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isRSVPSubmitting ? (
                        <>
                          <div className="animate-spin h-4 w-4 mr-2 border-2 border-t-transparent border-[#fcfcfb] rounded-full"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit RSVP
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* RSVP List */}
            {rsvps.length > 0 ? (
              <div className="space-y-4">
                {rsvps.map((rsvp) => (
                  <div key={rsvp.id} className="border-b border-[#ede7e3] pb-4 last:border-b-0">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full ${rsvp.attending ? 'bg-[#d3bfaa30] text-[#72513a]' : 'bg-[#223d3c10] text-[#223d3c]'}`}>
                        {rsvp.attending ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-[#422717]">{rsvp.name}</p>
                        <p className="text-sm text-[#72513a]">{rsvp.attending ? 'Attending' : 'Not attending'}</p>
                        {rsvp.message && (
                          <p className="mt-1 text-sm text-[#72513a]">"{rsvp.message}"</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#72513a] italic">No RSVPs yet. Be the first to RSVP!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
