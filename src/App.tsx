import React from 'react';
import { Clock, Ticket, Briefcase, Car, Footprints, Cookie } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { SnowAnimation } from './components/SnowAnimation';
import { MessageSection } from './components/MessageSection';
import { Hero } from './components/Hero';
import { RichmondShowcase } from './components/RichmondShowcase';

function App() {
  const stats = [
    { title: 'Projects Completed', value: 644, icon: <Briefcase />, delay: 0.2 },
    { title: 'Tickets Serviced', value: 30130, icon: <Ticket />, delay: 0.4 },
    { title: 'Hours Worked', value: 161915, icon: <Clock />, delay: 0.6 },
    { title: 'Total Miles Driven', value: 358403, icon: <Car />, delay: 0.8 },
    { title: 'Charity Miles Walked', value: 23524, icon: <Footprints />, delay: 1.0 },
    { title: 'Cookies Baked by Stephanie', value: 4160, icon: <Cookie />, delay: 1.2, suffix: '+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a365d] via-[#2d3748] to-[#1a365d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607262807149-dfd4c39320a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center" />
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

        {/* Richmond Showcase */}
        <div className="px-4 mb-20">
          <RichmondShowcase />
        </div>

        {/* Message Section */}
        <div className="px-4 pb-8">
          <MessageSection />
        </div>

        {/* Footer Image */}
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <img
            src="https://www.vicom-corp.com/wp-content/uploads/2024/12/santavan2rounded3.png"
            alt="Santa driving VIcom van"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default App;