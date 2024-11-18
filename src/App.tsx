import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar"; 
import Sidebar from './components/Sidebar';
import Footer from "./components/Footer";
import Patients from "./components/Patients";
import DermatologistDashboard from './components/DermatologistDashboard';
import Appointments from "./components/Appointments";
import Profile from "./components/Profile";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

// Define the type for the pages
type Page = "dashboard" | "patients" | "appointments" | "profile" | "reports" | "settings";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard"); // State to track current page

  // Function to render the corresponding page based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case "patients":
        return <Patients name={""} age={0} condition={""} status={"Active"} image={""} />;
      case "appointments":
        return <Appointments />;
      case "profile":
        return <Profile />;
      case "reports":
        return <Reports />;
      case "settings":
        return <Settings />;
      default:
        return <DermatologistDashboard userName={""} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      {/* Pass the currentPage and setCurrentPage as props to Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex pt-16">
        <Sidebar setCurrentPage={setCurrentPage} />
        <div className="flex-1 p-6">{renderPage()}</div>
      </main>
      <Footer />
    </div>
  );
};

export default App;




