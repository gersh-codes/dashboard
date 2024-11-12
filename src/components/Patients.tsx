// src/components/Patient.tsx
import React from 'react';

interface PatientProps {
  name: string;
  age: number;
  condition: string;
  status: 'Active' | 'Inactive' | 'Under Treatment';
  image: string;
}

const statusStyles = {
  Active: 'bg-green-50 text-green-700',
  Inactive: 'bg-gray-50 text-gray-700',
  'Under Treatment': 'bg-yellow-50 text-yellow-700',
};

const Patient: React.FC<PatientProps> = ({ name, age, condition, status, image }) => {
  return (
    <div className="flex items-center p-4 bg-white border rounded-lg shadow-sm">
      {/* Patient Image */}
      <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
      
      <div className="ml-4 flex-1">
        <h3 className="font-medium text-gray-900">{name}, {age} years old</h3>
        <p className="text-sm text-gray-600">{condition}</p>
        
        {/* Patient Status */}
        <span className={`inline-block px-3 py-1 mt-2 rounded-full text-sm font-medium ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default Patient;
