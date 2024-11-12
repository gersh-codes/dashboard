// src/components/Sidebar.tsx
import React from "react";

// Define the type for the pages
type Page = "dashboard" | "patients" | "appointments" | "profile" | "reports" | "settings";

// Define SidebarProps interface with the correct type for setCurrentPage
interface SidebarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage }) => {
  return (
    <div>
      <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
      <button onClick={() => setCurrentPage("patients")}>Patients</button>
      <button onClick={() => setCurrentPage("appointments")}>Appointments</button>
      <button onClick={() => setCurrentPage("profile")}>Profile</button>
      <button onClick={() => setCurrentPage("reports")}>Reports</button>
      <button onClick={() => setCurrentPage("settings")}>Settings</button>
    </div>
  );
};

export default Sidebar;




