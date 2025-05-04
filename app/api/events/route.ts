import { NextResponse } from 'next/server';

// Sample event data
const events = [
  {
    id: '1',
    title: 'Memorial Service for John Doe',
    date: '2025-05-15T14:00:00Z',
    location: 'Riverside Cemetery',
    description: 'A celebration of life for our beloved friend and family member.',
    organizer: 'Smith Family',
  },
  {
    id: '2',
    title: 'Anniversary Remembrance',
    date: '2025-06-03T18:30:00Z',
    location: 'Oak Park Memorial Garden',
    description: 'Annual gathering to honor the memory of Jane Smith.',
    organizer: 'Smith Family Foundation',
  },
  {
    id: '3',
    title: 'Charity Walk in Memory of Veterans',
    date: '2025-05-30T09:00:00Z',
    location: 'Central Park',
    description: 'Join us for a 5k walk to raise funds for veterans memorial.',
    organizer: 'Veterans Memorial Association',
  }
];

export async function GET() {
  return NextResponse.json({ events });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would typically validate the input and save to a database
    const newEvent = {
      id: `${events.length + 1}`,
      ...body,
    };
    
    // For demo purposes we're just returning the new event
    // In a real app, you would save this to a database
    
    return NextResponse.json({ event: newEvent }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating event' }, { status: 400 });
  }
}
