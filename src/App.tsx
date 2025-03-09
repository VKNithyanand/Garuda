import React from 'react';
import { Brain, TrendingUp, LineChart, Wallet } from 'lucide-react';

function App() {
  const features = [
    {
      title: "Business Intelligence Dashboard",
      icon: <LineChart className="w-16 h-16 mb-6 text-blue-600" />,
      url: "https://garuda-dashboards.netlify.app/",
      description: "Comprehensive business analytics and reporting dashboard"
    },
    {
      title: "Predictive Analytics for Growth",
      icon: <TrendingUp className="w-16 h-16 mb-6 text-green-600" />,
      url: "https://garuda-analytics.netlify.app/",
      description: "Data-driven insights for future business growth"
    },
    {
      title: "AI-Driven Decision Support",
      icon: <Brain className="w-16 h-16 mb-6 text-purple-600" />,
      url: "https://garuda-management.netlify.app/",
      description: "Intelligent decision-making assistance powered by AI"
    },
    {
      title: "AI-Powered Financial Management",
      icon: <Wallet className="w-16 h-16 mb-6 text-red-600" />,
      url: "https://garuda-finance.netlify.app/",
      description: "Smart financial planning and management solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-display text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-8 tracking-tight">
              AI Business Insights Hub
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              Transforming business intelligence with cutting-edge AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <a
                key={feature.title}
                href={feature.url}
                target="_self"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/95 group no-underline"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;