import React from 'react';

const TreatmentChart = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {['Acne', 'Eczema', 'Psoriasis'].map((condition) => (
          <div key={condition} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600">{condition}</h3>
            <div className="mt-2 flex items-end gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: `${Math.floor(Math.random() * 100)}%`,
                  }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {Math.floor(Math.random() * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="h-64 flex items-end gap-2">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full bg-blue-100 rounded-t"
              style={{
                height: `${Math.floor(Math.random() * 100)}%`,
              }}
            />
            <span className="text-xs text-gray-500">
              {new Date(2024, i).toLocaleDateString('en-US', { month: 'short' })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentChart;