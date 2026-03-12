import { useState, useEffect } from 'react';
import { Sun, Cloud, Waves, Calendar } from 'lucide-react';

const statusMessages = [
  { icon: Sun, text: 'Sunny, 82°F - Perfect beach weather!' },
  { icon: Waves, text: 'Calm seas - Great for snorkeling' },
  { icon: Calendar, text: 'Festival of Lights - This Saturday' },
  { icon: Cloud, text: 'Light breeze - Ideal for hiking' },
];

export function IslandStatus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statusMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = statusMessages[currentIndex];
  const Icon = current.icon;

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-white/95 backdrop-blur-sm border border-border rounded-lg shadow-lg px-4 py-2 flex items-center gap-2 text-sm transition-all duration-300 hover:shadow-xl">
      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
      <span className="text-foreground font-medium">{current.text}</span>
    </div>
  );
}
