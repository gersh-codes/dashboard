// src/components/Reports.tsx
import React from 'react';

// Define a type for the report data
interface Report {
  title: string;
  date: string;
  status: 'Completed' | 'Pending' | 'In Progress';
}

const reportStatusStyles = {
  Completed: 'bg-green-50 text-green-700',
  Pending: 'bg-yellow-50 text-yellow-700',
  'In Progress': 'bg-blue-50 text-blue-700',
};

const Reports: React.FC = () => {
  // Sample report data
  const reports: Report[] = [
    { title: 'Acne Treatment Report', date: '2024-11-12', status: 'Completed' },
    { title: 'Eczema Report', date: '2024-11-10', status: 'Pending' },
    { title: 'Psoriasis Treatment Report', date: '2024-11-08', status: 'In Progress' },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Patient Reports</h1>
      <div className="space-y-4">
        {reports.map((report, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{report.title}</h3>
              <p className="text-sm text-gray-600">{report.date}</p>
            </div>
            <span className={`inline-block px-3 py-1 mt-2 rounded-full text-sm font-medium ${reportStatusStyles[report.status]}`}>
              {report.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
