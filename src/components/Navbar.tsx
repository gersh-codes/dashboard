// src/components/Navbar.tsx
import React from "react";

// Define NavbarProps interface with the correct types for currentPage and setCurrentPage
interface NavbarProps {
  currentPage: "dashboard" | "patients" | "appointments" | "profile" | "reports" | "settings";
  setCurrentPage: React.Dispatch<React.SetStateAction<"dashboard" | "patients" | "appointments" | "profile" | "reports" | "settings">>;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <nav>
      {/* Example navbar rendering */}
      <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
      <button onClick={() => setCurrentPage("patients")}>Patients</button>
      <button onClick={() => setCurrentPage("appointments")}>Appointments</button>
      <button onClick={() => setCurrentPage("profile")}>Profile</button>
      <button onClick={() => setCurrentPage("reports")}>Reports</button>
      <button onClick={() => setCurrentPage("settings")}>Settings</button>
    </nav>
  );
};

export default Navbar;


