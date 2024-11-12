// src/components/DermatologistDashboard.tsx
import React from 'react';
import Reports from './Reports';  // Import Reports component
import { Users, Calendar, FileText, BarChart2 } from 'lucide-react'; // Add necessary icons

// Type for the dashboard props (if any specific props are passed to the component)
interface DashboardProps {
  userName: string;
}

const DermatologistDashboard: React.FC<DashboardProps> = ({ userName }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Welcome to the Dermatologist Dashboard, Dr. {userName}
      </h1>
      
      {/* Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {/* Patient Overview */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Patients</h3>
              <p className="text-sm text-gray-500">Manage and view your patients</p>
            </div>
          </div>
        </div>
        
        {/* Appointments Overview */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <Calendar className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Appointments</h3>
              <p className="text-sm text-gray-500">View and manage upcoming appointments</p>
            </div>
          </div>
        </div>
        
        {/* Medical Records Overview */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <FileText className="h-8 w-8 text-yellow-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Medical Records</h3>
              <p className="text-sm text-gray-500">Access and manage patient medical records</p>
            </div>
          </div>
        </div>
        
        {/* Analytics Overview */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <BarChart2 className="h-8 w-8 text-purple-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Analytics</h3>
              <p className="text-sm text-gray-500">View overall stats and analytics</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reports Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Patient Reports</h3>
        <Reports /> {/* Render the Reports component */}
      </div>
    </div>
  );
};

export default DermatologistDashboard;
