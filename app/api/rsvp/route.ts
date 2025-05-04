import { NextResponse } from 'next/server';

// Sample RSVP data store - in a real app this would be a database
const rsvps: Record<string, any[]> = {
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

// Get all RSVPs for a specific event
export async function GET(request: Request) {
  const url = new URL(request.url);
  const eventId = url.searchParams.get('eventId');
  
  if (!eventId) {
    return NextResponse.json({ error: 'Event ID is required' }, { status: 400 });
  }
  
  const eventRsvps = rsvps[eventId] || [];
  return NextResponse.json({ rsvps: eventRsvps });
}

// Add a new RSVP for an event
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventId, name, email, attending, message } = body;
    
    if (!eventId || !name || !email || attending === undefined) {
      return NextResponse.json({ 
        error: 'Missing required fields (eventId, name, email, attending)' 
      }, { status: 400 });
    }
    
    // Create a new RSVP
    const newRsvp = {
      id: `${Date.now()}`, // Generate a simple ID
      name,
      email,
      attending,
      message: message || ''
    };
    
    // Initialize the event's RSVP array if it doesn't exist
    if (!rsvps[eventId]) {
      rsvps[eventId] = [];
    }
    
    // Add the RSVP to the array
    rsvps[eventId].push(newRsvp);
    
    return NextResponse.json({ rsvp: newRsvp }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating RSVP' }, { status: 400 });
  }
}
