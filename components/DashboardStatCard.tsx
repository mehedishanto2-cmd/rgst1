
import React from 'react';

interface DashboardStatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-brand-light-dark p-6 rounded-lg shadow-lg flex items-center space-x-4">
      <div className="bg-brand-red/20 p-3 rounded-full">
        <div className="text-brand-red h-8 w-8">
          {icon}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400 font-medium uppercase">{title}</p>
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
};

export default DashboardStatCard;
