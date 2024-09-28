import { LineChart, Line, ResponsiveContainer } from 'recharts';

// Helper function to generate mock data for the past hour
const generateHourlyData = () => {
  const data = [];
  for (let i = 0; i < 60; i++) {
    data.push({
      time: i,
      value: Math.random() * 10 + 90 // Random value between 90 and 100
    });
  }
  return data;
};

const cryptoData = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 66137.56,
    change: 1.85,
    hourlyData: generateHourlyData(),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
        <path fill="#f7931a" d="M15.76 19.475c.33-.237.636-.507.912-.807a9.457 9.457 0 0 1-1.302-4.721h-3.92v2.68h2.436c-.116 1.014-.425 2.02-.912 2.849a7.57 7.57 0 0 1-.636-.434l-1.888 1.888c2.2 1.888 5.237 2.68 7.509 2.023v-3.92a5.848 5.848 0 0 1-2.2.443z"/>
      </svg>
    ),
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2701.30,
    change: 3.07,
    hourlyData: generateHourlyData(),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
        <path fill="#627eea" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"/>
      </svg>
    ),
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    price: 608.10,
    change: 1.59,
    hourlyData: generateHourlyData(),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
        <path fill="#f3ba2f" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884z"/>
      </svg>
    ),
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    price: 0.5927,
    change: 1.44,
    hourlyData: generateHourlyData(),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
        <path fill="#23292f" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.07-24l-4.574 4.523a3.556 3.556 0 0 1-4.996 0L8.93 8H6.035l6.02 5.957a5.621 5.621 0 0 0 7.89 0L25.961 8h-2.89zM8.895 24.563L13.504 20a3.556 3.556 0 0 1 4.996 0l4.605 4.563H26l-6.055-5.993a5.621 5.621 0 0 0-7.89 0L6 24.562h2.895z"/>
      </svg>
    ),
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: 159.32,
    change: 3.27,
    hourlyData: generateHourlyData(),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
        <path fill="#00ffa3" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.053 11.508l-2.4 2.4a.57.57 0 01-.805 0l-6.93-6.93a.57.57 0 00-.805 0l-2.4 2.4a.57.57 0 000 .805l6.93 6.93a.57.57 0 010 .805l-2.4 2.4a.57.57 0 01-.805 0l-6.93-6.93a.57.57 0 00-.805 0l-2.4 2.4a.57.57 0 000 .805l6.93 6.93a.57.57 0 010 .805l-2.4 2.4a.57.57 0 01-.805 0l-6.93-6.93a.57.57 0 00-.805 0l-2.4 2.4a.57.57 0 000 .805l10.667 10.667a.57.57 0 00.805 0l21.333-21.333a.57.57 0 000-.805L23.72 10.703a.57.57 0 00-.805 0l-6.93 6.93a.57.57 0 01-.805 0l-2.4-2.4a.57.57 0 010-.805l6.93-6.93a.57.57 0 000-.805l-2.4-2.4a.57.57 0 00-.805 0l-10.667 10.667a.57.57 0 000 .805l2.4 2.4a.57.57 0 00.805 0l6.93-6.93a.57.57 0 01.805 0l2.4 2.4a.57.57 0 010 .805l-6.93 6.93a.57.57 0 000 .805l2.4 2.4a.57.57 0 00.805 0l10.667-10.667a.57.57 0 000-.805z"/>
      </svg>
    ),
  },
];

const LiveMarket = () => {
  return (
    <div className="bg-neutral-900 p-4 w-11/12 mx-auto">
      {cryptoData.map((crypto) => (
        <div key={crypto.symbol} className="mb-4 p-4 bg-gray-800 rounded-lg flex items-center justify-between">
          <div className="flex items-center w-1/4">
            {crypto.icon}
            <div className="ml-3">
              <div className="text-white font-semibold">{crypto.symbol}</div>
              <div className="text-gray-400 text-sm">{crypto.name}</div>
            </div>
          </div>
          <div className="w-3/5 h-16">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={crypto.hourlyData}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-right w-1/4">
            <div className="text-white font-semibold">${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div className={`text-sm ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveMarket;