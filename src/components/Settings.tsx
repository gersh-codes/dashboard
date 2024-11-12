// src/components/Settings.tsx
import React, { useState } from 'react';

// Define the types for the form inputs
interface UserSettings {
  email: string;
  password: string;
  profileImage: string;
}

const Settings: React.FC = () => {
  // Initialize state for user settings
  const [userSettings, setUserSettings] = useState<UserSettings>({
    email: 'dr.smith@dermclinic.com',
    password: '',
    profileImage: 'https://via.placeholder.com/150', // Placeholder image
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserSettings({
      ...userSettings,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle settings update (e.g., send the data to the API)
    console.log('Settings updated:', userSettings);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Account Settings</h2>

      {/* Settings Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Image */}
        <div className="flex items-center gap-4">
          <img
            src={userSettings.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-rose-500"
          />
          <div>
            <button type="button" className="text-sm text-rose-500 hover:underline">
              Change Profile Picture
            </button>
          </div>
        </div>

        {/* Email Input */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userSettings.email}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userSettings.password}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="Enter a new password"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
