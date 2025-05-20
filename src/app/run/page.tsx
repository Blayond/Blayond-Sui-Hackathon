
"use client";

import { useState, useEffect } from 'react';
import SiteLogo from '@/components/common/SiteLogo';
import BottomNavigation from '@/components/layout/bottom-navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Flame, Footprints } from 'lucide-react';

export default function RunPage() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-background text-foreground relative pb-20">
      {/* Top Content: Logo and Title */}
      <div className="flex flex-col items-center space-y-1 pt-6 pb-3">
        <SiteLogo className="h-16 w-auto md:h-20" />
        <h1 className="text-3xl md:text-4xl font-bold text-gradient-pink-orange">BLAYOND</h1>
      </div>

      {/* Main Metrics Card */}
      <Card className="w-full max-w-md bg-card shadow-xl rounded-lg mx-4">
        <CardContent className="p-4 md:p-6">
          <div className="grid grid-cols-2 gap-4 text-center mb-4 md:mb-6">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Duration</p>
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                {formatTime(elapsedSeconds)}
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Distance</p>
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                0,00<span className="text-xl md:text-2xl opacity-80">km</span>
              </p>
            </div>
          </div>

          {/* Map/Track Placeholder */}
          <div className="my-4 h-40 md:h-48 w-full bg-muted/10 rounded-md flex items-center justify-center relative overflow-hidden border border-border">
            <svg
              viewBox="0 0 300 100"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="runTrackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
                </linearGradient>
              </defs>
              {/* Updated Winding Path */}
              <path
                d="M20 60 L60 30 L100 70 L140 40 L180 80 L220 50 C230 45, 240 45, 250 50 C260 55, 270 65, 280 60"
                stroke="url(#runTrackGradient)"
                strokeWidth="6" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Current position indicator on the path's end */}
              <circle
                cx="20" 
                cy="60"
                r="7" 
                fill="hsl(var(--background))"
                stroke="hsl(var(--primary))" // Start color of gradient
                strokeWidth="3"
              />
            </svg>
          </div>

          {/* Secondary Metrics */}
          <div className="grid grid-cols-3 gap-x-2 text-center">
            <div className="flex flex-col items-center">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1" />
              <p className="text-xl md:text-2xl font-bold text-foreground">0 <span className="text-sm md:text-base opacity-80">bpm</span></p>
              <p className="text-xs text-muted-foreground mt-0.5">Heart Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <Flame className="h-5 w-5 md:h-6 md:w-6 text-accent mb-1" />
              <p className="text-xl md:text-2xl font-bold text-foreground">0</p>
              <p className="text-xs text-muted-foreground mt-0.5">Calories</p>
            </div>
            <div className="flex flex-col items-center">
              <Footprints className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1" />
              <p className="text-xl md:text-2xl font-bold text-foreground">0 <span className="text-sm md:text-base opacity-80">spm</span></p>
              <p className="text-xs text-muted-foreground mt-0.5">Pace</p> 
            </div>
          </div>
        </CardContent>
      </Card>

      <BottomNavigation />
    </div>
  );
}
