
"use client";

import SiteLogo from '@/components/common/SiteLogo';
import BottomNavigation from '@/components/layout/bottom-navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Flame, Footprints } from 'lucide-react';

export default function RunPage() {
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
                00:20<span className="text-2xl md:text-3xl opacity-80">10</span>
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Distance</p>
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                4,23<span className="text-xl md:text-2xl opacity-80">km</span>
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
              <path
                d="M 20 65 C 40 35, 70 35, 90 65 S 130 95, 150 65 C 170 35, 200 35, 220 65 S 260 95, 280 65"
                stroke="url(#runTrackGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="280" cy="65" r="5" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            </svg>
            {/* Placeholder for a map background texture if needed */}
            {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}
          </div>

          {/* Secondary Metrics */}
          <div className="grid grid-cols-3 gap-x-2 text-center">
            <div className="flex flex-col items-center">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1" />
              <p className="text-xl md:text-2xl font-bold text-foreground">158 <span className="text-sm md:text-base opacity-80">bpm</span></p>
              <p className="text-xs text-muted-foreground mt-0.5">Heart Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <Flame className="h-5 w-5 md:h-6 md:w-6 text-accent mb-1" />
              <p className="text-xl md:text-2xl font-bold text-foreground">326</p>
              <p className="text-xs text-muted-foreground mt-0.5">Calories</p>
            </div>
            <div className="flex flex-col items-center">
              <Footprints className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1" />
              <p className="text-xl md:text-2xl font-bold text-foreground">572 <span className="text-sm md:text-base opacity-80">spm</span></p>
              <p className="text-base md:text-lg font-bold text-foreground -mt-1">58 <span className="text-xs md:text-sm opacity-80">m</span></p>
            </div>
          </div>
        </CardContent>
      </Card>

      <BottomNavigation />
    </div>
  );
}

// Helper for potential grid pattern (optional)
// You would add this to your globals.css or a style tag if you use it.
/*
.bg-grid-pattern {
  background-image: linear-gradient(to right, hsl(var(--border)/0.2) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)/0.2) 1px, transparent 1px);
  background-size: 20px 20px;
}
*/

