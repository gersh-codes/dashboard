// src/components/AppointmentCard.tsx
import React from "react";

// Define the props for the AppointmentCard
interface AppointmentCardProps {
  appointment: {
    id: number;
    patientName: string;
    time: string;
    status: string;
  };
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold">{appointment.patientName}</h3>
      <p className="text-sm text-gray-500">Time: {appointment.time}</p>
      <p
        className={`text-sm mt-2 ${
          appointment.status === "Completed" ? "text-green-600" : "text-yellow-600"
        }`}
      >
        Status: {appointment.status}
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">View Details</button>
    </div>
  );
};

export default AppointmentCard;

