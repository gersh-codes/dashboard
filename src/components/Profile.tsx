// src/components/Profile.tsx
import React, { useState } from 'react';

// Define the type for the user profile data
interface UserProfile {
  name: string;
  email: string;
  profileImage: string;
}

const Profile: React.FC = () => {
  // Sample user profile data
  const [user] = useState<UserProfile>({
    name: 'Dr. Smith',
    email: 'dr.smith@dermclinic.com',
    profileImage: 'https://via.placeholder.com/150', // Placeholder image
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center space-x-6">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-rose-500"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-lg text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Additional Profile Details */}
      <div className="mt-8 space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">About</h3>
          <p className="text-gray-600 mt-2">
            Dr. Smith is a licensed dermatologist with over 10 years of experience in treating skin conditions. Specializing in acne, eczema, and general dermatology, he provides compassionate care to his patients.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
          <p className="text-gray-600 mt-2">You can reach Dr. Smith at: <a href="mailto:dr.smith@dermclinic.com" className="text-rose-500">dr.smith@dermclinic.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
