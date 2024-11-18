import React from 'react';
import { AlertCircle, Clock, FileText } from 'lucide-react';

const AlertsWidget = () => {
  const alerts = [
    {
      icon: Clock,
      title: 'Appointment Overlap',
      description: 'Two appointments scheduled for 2:00 PM tomorrow',
      type: 'warning',
    },
    {
      icon: FileText,
      title: 'Lab Results Ready',
      description: 'New biopsy results available for Emma Thompson',
      type: 'info',
    },
    {
      icon: AlertCircle,
      title: 'Prescription Renewal',
      description: 'James Wilson\'s prescription expires in 3 days',
      type: 'warning',
    },
  ];

  const getAlertStyles = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 text-yellow-700 border-yellow-100';
      case 'info':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <div className="space-y-3">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`flex items-start gap-3 p-3 rounded-lg border ${getAlertStyles(
            alert.type
          )}`}
        >
          <alert.icon className="h-5 w-5 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium">{alert.title}</h3>
            <p className="text-sm opacity-80">{alert.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertsWidget;