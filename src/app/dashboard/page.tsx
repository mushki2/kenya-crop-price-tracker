import { supabase } from '../../lib/supabase';
import PriceCard from '../../components/market/PriceCard';

export const metadata = {
  title: 'Daily Crop Prices in Kenya | Kenya Crop Tracker',
  description: 'Get real-time market prices for crops in Kenya. Track trends, compare markets, and make informed farming decisions.',
};

async function getPrices() {
  const { data, error } = await supabase
    .from('arbitrage_opportunities')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) {
    console.error('Error fetching prices:', error);
    return [];
  }
  return data;
}

export default async function DashboardPage() {
  const prices = await getPrices();

  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-green-800 mb-6">Market Prices Today</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {prices.map((item: any) => (
          <PriceCard
            key={item.id}
            crop={item.sport_title}
            price={item.odds1}
            market={item.home_team}
            trend="stable"
          />
        ))}
      </div>
    </main>
  );
}

export const dynamic = 'force-dynamic';
