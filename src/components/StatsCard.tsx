import { LucideIcon } from 'lucide-react';
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number; // Allow for number or string value
  icon: LucideIcon; // LucideIcon type for icons
  trend: string; // Trend value which can be a positive or negative string
  color: 'rosegold'; // Supports only 'rosegold'
}

const colorMap = {
  rosegold: 'bg-rose-50 text-rose-600', // Rose gold color mapping
};

const trendColors = {
  positive: 'text-green-600',  // Positive trend color
  negative: 'text-red-600',    // Negative trend color
};

const StatsCard = ({ title, value, icon: Icon, trend, color }: StatsCardProps) => {
  // Ensure trend starts with '+' or '-'
  const isPositive = trend && trend.startsWith('+');
  const trendColor = isPositive ? trendColors.positive : trendColors.negative;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg ${colorMap[color]}`}>
          {/* Icon component */}
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <span
          className={`text-sm font-medium ${trendColor}`}
          aria-label={`Trend: ${trend}`}
        >
          {trend}
        </span>
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800 mt-1" aria-live="polite">
        {value}
      </p>
    </div>
  );
};

export default StatsCard;

