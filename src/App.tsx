import React from 'react';
import { Clock, Ticket, Briefcase, Car, Footprints, Cookie } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { SnowAnimation } from './components/SnowAnimation';
import { MessageSection } from './components/MessageSection';
import { Hero } from './components/Hero';
import { WebsiteRefreshShowcase } from './components/WebsiteRefreshShowcase';

function App() {
  const stats = [
    { title: 'Projects Completed', value: 502, icon: <Briefcase />, delay: 0.3 },
    { title: 'Tickets Served', value: 44173, icon: <Ticket />, delay: 0.5 },
    { title: 'Hours Worked', value: 135659, icon: <Clock />, delay: 0.7 },
    { title: 'Total Miles Driven', value: 358403, icon: <Car />, delay: 0.9 },
    { title: 'Charity Miles Walked', value: 23524, icon: <Footprints />, delay: 1.1 },
    { title: 'Cookies Baked by Stephanie', value: 4160, icon: <Cookie />, delay: 1.3, suffix: '+' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'var(--color-forest-dark)' }}>
      {/* Layered atmospheric background */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D2C] via-[#0F5C42] to-[#1A2F2A]" />

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 geometric-pattern opacity-40" />

        {/* Radial gradient spotlight effects */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#D4AF37] to-transparent opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#B87333] to-transparent opacity-10 rounded-full blur-3xl" />

        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }} />
      </div>

      <SnowAnimation />

      <div className="relative">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4">
          <Hero />
        </div>

        {/* Stats Grid */}
        <div className="px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Website Refresh Showcase */}
        <div className="px-4 mb-20">
          <WebsiteRefreshShowcase />
        </div>

        {/* Message Section */}
        <div className="px-4 pb-8">
          <MessageSection />
        </div>

        {/* Footer Image */}
        <div className="w-full max-w-[1400px] mx-auto px-4 pb-8">
          <img
            src="https://saltassets.b-cdn.net/santavan2rounded3.png"
            alt="Santa driving VIcom van"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default App;