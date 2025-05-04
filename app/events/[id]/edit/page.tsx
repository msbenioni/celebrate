"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, Clock, MapPin, Users, FileText, Heart, ChevronLeft, Save } from 'lucide-react';

type EventType = 'memorial' | 'anniversary' | 'gathering';

interface EventFormData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  organizer: string;
  eventType: EventType;
  maxAttendees?: number;
}

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: '',
    eventType: 'memorial',
    maxAttendees: undefined,
  });
  
  // Fetch event data
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        // In a real app, this would be an API call
        // For demo purposes, we're using mock data
        const mockEvents: Record<string, {
          id: string;
          title: string;
          date: string;
          location: string;
          description: string;
          organizer: string;
          eventType: EventType;
          maxAttendees?: number;
        }> = {
          '1': {
            id: '1',
            title: 'Memorial Service for John Doe',
            date: '2025-05-15T14:00:00Z',
            location: 'Riverside Cemetery',
            description: 'A celebration of life for our beloved friend and family member.',
            organizer: 'Smith Family',
            eventType: 'memorial',
          },
          '2': {
            id: '2',
            title: 'Anniversary Remembrance',
            date: '2025-06-03T18:30:00Z',
            location: 'Oak Park Memorial Garden',
            description: 'Annual gathering to honor the memory of Jane Smith.',
            organizer: 'Smith Family Foundation',
            eventType: 'anniversary',
          },
          '3': {
            id: '3',
            title: 'Charity Walk in Memory of Veterans',
            date: '2025-05-30T09:00:00Z',
            location: 'Central Park',
            description: 'Join us for a 5k walk to raise funds for veterans memorial.',
            organizer: 'Veterans Memorial Association',
            eventType: 'gathering',
            maxAttendees: 200
          }
        };
        
        const event = mockEvents[id];
        
        if (!event) {
          throw new Error('Event not found');
        }
        
        // Parse date and time from the ISO string
        const eventDate = new Date(event.date);
        const dateString = eventDate.toISOString().split('T')[0]; // YYYY-MM-DD
        const timeString = eventDate.toTimeString().substring(0, 5); // HH:MM
        
        setFormData({
          title: event.title,
          date: dateString,
          time: timeString,
          location: event.location,
          description: event.description,
          organizer: event.organizer,
          eventType: event.eventType,
          maxAttendees: event.maxAttendees,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load event');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchEvent();
  }, [id]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Format the date and time for the API
      const formattedDateTime = `${formData.date}T${formData.time}:00Z`;
      
      const payload = {
        ...formData,
        date: formattedDateTime,
        id,
      };
      
      // In a real app, this would be an API call
      console.log('Updating event with data:', payload);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push(`/events/${id}?updated=true`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Get title and icon based on event type
  const getEventTypeDetails = () => {
    switch (formData.eventType) {
      case 'memorial':
        return { title: 'Memorial Service', icon: <Heart className="h-6 w-6 text-rose-500" /> };
      case 'anniversary':
        return { title: 'Anniversary Remembrance', icon: <Calendar className="h-6 w-6 text-indigo-500" /> };
      case 'gathering':
        return { title: 'Memorial Gathering', icon: <Users className="h-6 w-6 text-amber-500" /> };
      default:
        return { title: 'Edit Event', icon: <Calendar className="h-6 w-6 text-blue-500" /> };
    }
  };
  
  const { title: eventTypeTitle, icon } = getEventTypeDetails();
  
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 p-8">
          <div className="flex items-center justify-center h-24">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading event details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error === 'Event not found') {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
            <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <button
              onClick={() => router.back()}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-6 sm:p-10">
          <div className="flex items-center space-x-3 mb-6">
            {icon}
            <h1 className="text-2xl font-bold text-gray-900">Edit {eventTypeTitle}</h1>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              <p>{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Event Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder={`e.g., ${eventTypeTitle} for John Doe`}
                />
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Address or venue name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Provide details about the event"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organizer" className="block text-sm font-medium text-gray-700">
                  Organizer Name/Organization
                </label>
                <input
                  type="text"
                  id="organizer"
                  name="organizer"
                  required
                  value={formData.organizer}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Your name or organization"
                />
              </div>
              
              {formData.eventType === 'gathering' && (
                <div>
                  <label htmlFor="maxAttendees" className="block text-sm font-medium text-gray-700">
                    Maximum Attendees (Optional)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="maxAttendees"
                      name="maxAttendees"
                      min="1"
                      value={formData.maxAttendees || ''}
                      onChange={handleChange}
                      className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Leave empty for unlimited"
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="h-5 w-5 mr-1" />
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
