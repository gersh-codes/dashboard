import { ChevronRight } from 'lucide-react';
import React from 'react';

const PatientList = () => {
  const patients = [
    {
      name: 'Sarah Johnson',
      condition: 'Eczema',
      lastVisit: '2 days ago',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    },
    {
      name: 'Michael Chen',
      condition: 'Acne',
      lastVisit: '1 week ago',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    },
    {
      name: 'Emily Davis',
      condition: 'Psoriasis',
      lastVisit: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    },
  ];

  return (
    <div className="space-y-4">
      {patients.map((patient) => (
        <div
          key={patient.name}
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <img
            src={patient.image}
            alt={patient.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {patient.name}
            </h3>
            <p className="text-sm text-gray-500">{patient.condition}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{patient.lastVisit}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      ))}
    </div>
  );
};

export default PatientList;