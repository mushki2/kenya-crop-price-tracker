// src/components/market/PriceCard.tsx
import React from 'react';

interface PriceCardProps {
  crop: string;
  price: number;
  market: string;
  trend: 'up' | 'down' | 'stable';
}

const PriceCard: React.FC<PriceCardProps> = ({ crop, price, market, trend }) => {
  const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">{crop}</h3>
        <span className={`font-semibold ${trendColor}`}>
          {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '▬'}
        </span>
      </div>
      <p className="text-sm text-gray-500">{market}</p>
      <div className="mt-2 text-2xl font-extrabold text-green-700">
        KES {price.toLocaleString()}
      </div>
    </div>
  );
};

export default PriceCard;
