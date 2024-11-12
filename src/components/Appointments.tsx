// src/components/Appointments.tsx
import React, { useState, useEffect } from "react";
import AppointmentCard from "./AppointmentCard"; // Import the AppointmentCard component

interface Appointment {
  id: number;
  patientName: string;
  time: string;
  status: string;
}

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Simulating fetching appointments (you could use an API in a real app)
  useEffect(() => {
    const fetchedAppointments: Appointment[] = [
      { id: 1, patientName: "John Doe", time: "10:00 AM", status: "Scheduled" },
      { id: 2, patientName: "Jane Smith", time: "11:30 AM", status: "Completed" },
      { id: 3, patientName: "Emily Johnson", time: "1:00 PM", status: "Scheduled" },
    ];

    setAppointments(fetchedAppointments);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Appointments</h1>

      {/* Render the list of AppointmentCard components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} /> 
        ))}
      </div>
    </div>
  );
};

export default Appointments;

