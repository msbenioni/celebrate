"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Heart, Calendar, Users } from 'lucide-react';

const eventTypes = [
  {
    id: 'memorial',
    title: 'Memorial Service',
    description: 'Create a memorial service event to honor and remember a loved one.',
    icon: <Heart className="h-8 w-8 text-[#9f7756]" />,
    color: 'bg-[#ede7e330] border-[#d3bfaa] hover:bg-[#ede7e380]',
  },
  {
    id: 'anniversary',
    title: 'Anniversary Remembrance',
    description: 'Commemorate a special date with an anniversary remembrance event.',
    icon: <Calendar className="h-8 w-8 text-[#72513a]" />,
    color: 'bg-[#d3bfaa30] border-[#d3bfaa] hover:bg-[#d3bfaa50]',
  },
  {
    id: 'gathering',
    title: 'Memorial Gathering',
    description: 'Organize a gathering or meetup to bring together those who wish to remember.',
    icon: <Users className="h-8 w-8 text-[#223d3c]" />,
    color: 'bg-[#22543c10] border-[#223d3c30] hover:bg-[#22543c20]',
  },
];

export default function CreateEventPage() {
  const router = useRouter();

  const handleSelectEventType = (typeId: string) => {
    router.push(`/create-new/${typeId}`);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#422717] mb-4">Create a Memorial Event</h1>
        <p className="text-lg text-[#72513a] max-w-3xl mx-auto">
          Choose the type of memorial event you would like to create below. Each option offers different
          features tailored to the purpose of your event.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {eventTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelectEventType(type.id)}
            className={`flex flex-col items-start p-6 rounded-xl border ${type.color} transition duration-150 text-left`}
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-[#fcfcfb] shadow-sm mb-4">
              {type.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#422717] mb-2">{type.title}</h3>
            <p className="text-[#72513a]">{type.description}</p>
          </button>
        ))}
      </div>

      <div className="mt-12 bg-[#ede7e350] border border-[#d3bfaa] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[#422717] mb-3">Need Help Choosing?</h2>
        <ul className="space-y-2 text-[#72513a]">
          <li className="flex items-start">
            <span className="font-medium text-[#9f7756] mr-2">• Memorial Service:</span> Best for formal remembrance ceremonies, often held shortly after a passing.
          </li>
          <li className="flex items-start">
            <span className="font-medium text-[#9f7756] mr-2">• Anniversary Remembrance:</span> Ideal for yearly memorial gatherings on significant dates.
          </li>
          <li className="flex items-start">
            <span className="font-medium text-[#9f7756] mr-2">• Memorial Gathering:</span> Perfect for informal meetups, celebration of life events, or charity functions.
          </li>
        </ul>
      </div>
    </div>
  );
}
