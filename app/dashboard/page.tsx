"use client";

import React from 'react';
import Link from 'next/link';
import { Heart, Calendar, Users, FileText, ArrowRight, Clock, PlusCircle } from 'lucide-react';

// Sample data for the dashboard
const statsData = [
  { label: 'Active Memorials', value: 3, icon: Heart, color: 'bg-[#d3bfaa30] text-[#72513a]' },
  { label: 'Upcoming Events', value: 2, icon: Calendar, color: 'bg-[#ede7e3] text-[#72513a]' },
  { label: 'Recent Tributes', value: 12, icon: FileText, color: 'bg-[#9f775630] text-[#9f7756]' },
  { label: 'Total RSVPs', value: 28, icon: Users, color: 'bg-[#22543c10] text-[#223d3c]' },
];

const upcomingEvents = [
  {
    id: '1',
    title: 'Memorial Service for John Doe',
    date: '2025-05-15T14:00:00Z',
    location: 'Riverside Cemetery',
    attendees: 12,
  },
  {
    id: '2',
    title: 'Anniversary Remembrance',
    date: '2025-06-03T18:30:00Z',
    location: 'Oak Park Memorial Garden',
    attendees: 16,
  },
];

const recentTributes = [
  {
    id: '1',
    title: 'Fond Memories',
    author: 'Jane Smith',
    date: '2025-05-01T09:15:00Z',
    memorialName: 'In Memory of John Doe',
  },
  {
    id: '2',
    title: 'You Will Be Remembered',
    author: 'Michael Johnson',
    date: '2025-04-28T16:30:00Z',
    memorialName: 'In Memory of John Doe',
  },
  {
    id: '3',
    title: 'Forever In Our Hearts',
    author: 'Sarah Williams',
    date: '2025-04-25T14:45:00Z',
    memorialName: 'Remembering Jane Smith',
  },
];

export default function DashboardPage() {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  // Custom formatted date component with earthy color palette
  const FormattedDate = ({ dateString }: { dateString: string }) => {
    return (
      <span className="text-[#72513a]">
        {formatDate(dateString)}
      </span>
    );
  };

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#422717]">Dashboard</h1>
        <div className="flex space-x-3">
          <Link
            href="/create-event"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#fcfcfb] bg-[#72513a] border border-transparent rounded-md shadow-sm hover:bg-[#422717] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9f7756]"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Create Event
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="relative overflow-hidden bg-[#ede7e330] rounded-lg shadow px-4 py-5 sm:p-6"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-md ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-[#72513a]">{stat.label}</p>
                  <p className="text-3xl font-semibold text-[#422717]">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Upcoming Events */}
        <div className="bg-[#fcfcfb] overflow-hidden shadow rounded-lg border border-[#d3bfaa]">
          <div className="p-5 border-b border-[#d3bfaa]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-[#422717]">Upcoming Events</h2>
              <Link
                href="/dashboard/events"
                className="text-sm font-medium text-[#9f7756] hover:text-[#72513a] inline-flex items-center"
              >
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-[#ede7e3] px-5 py-3 border-b border-[#d3bfaa] text-sm">
            <div className="grid grid-cols-3 text-[#72513a]">
              <div>Event</div>
              <div>Date & Time</div>
              <div>RSVPs</div>
            </div>
          </div>
          <div className="divide-y divide-[#ede7e3] bg-[#fcfcfb]">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <div key={event.id} className="px-5 py-4">
                  <div className="grid grid-cols-3">
                    <div className="pr-2">
                      <Link href={`/events/${event.id}`} className="font-medium text-[#9f7756] hover:text-[#72513a]">
                        {event.title}
                      </Link>
                      <p className="text-[#72513a] text-sm mt-1">{event.location}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-[#9f7756]" />
                      <span className="text-[#72513a]">
                        <FormattedDate dateString={event.date} /> at {formatTime(event.date)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-[#9f7756]" />
                      <span className="text-[#72513a]">{event.attendees} confirmed</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-5 text-center text-[#72513a]">No upcoming events</div>
            )}
          </div>
          <div className="bg-[#ede7e3] px-5 py-3 text-sm text-center">
            <Link
              href="/create-event"
              className="font-medium text-[#9f7756] hover:text-[#72513a] inline-flex items-center justify-center"
            >
              <PlusCircle className="mr-1 h-4 w-4" />
              Create new event
            </Link>
          </div>
        </div>

        {/* Recent Tributes */}
        <div className="bg-[#fcfcfb] overflow-hidden shadow rounded-lg border border-[#d3bfaa]">
          <div className="p-5 border-b border-[#d3bfaa]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-[#422717]">Recent Tributes</h2>
              <Link
                href="/dashboard/tributes"
                className="text-sm font-medium text-[#9f7756] hover:text-[#72513a] inline-flex items-center"
              >
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="divide-y divide-[#ede7e3] bg-[#fcfcfb]">
            {recentTributes.length > 0 ? (
              recentTributes.map((tribute) => (
                <div key={tribute.id} className="px-5 py-4">
                  <div className="mb-2">
                    <Link
                      href={`/tributes/${tribute.id}`}
                      className="font-medium text-[#9f7756] hover:text-[#72513a]"
                    >
                      {tribute.title}
                    </Link>
                  </div>
                  <div className="text-sm text-[#72513a]">
                    <p>Posted by {tribute.author} on <FormattedDate dateString={tribute.date} /></p>
                    <p className="mt-1">{tribute.memorialName}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-5 text-center text-[#72513a]">No recent tributes</div>
            )}
          </div>
          <div className="bg-[#ede7e3] px-5 py-3 text-sm text-center">
            <Link
              href="/tributes/new"
              className="font-medium text-[#9f7756] hover:text-[#72513a] inline-flex items-center justify-center"
            >
              <PlusCircle className="mr-1 h-4 w-4" />
              Add new tribute
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
