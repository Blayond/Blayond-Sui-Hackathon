
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import HexagonLogo from '@/components/auth/hexagon-logo';
import BottomNavigation from '@/components/layout/bottom-navigation';
import { Settings, Flame, Play, BookOpen, Wallet } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function HomePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/signin');
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast({ title: "Signed Out", description: "You have been signed out successfully." });
      router.push('/signin');
    } catch (error) {
      console.error('Error signing out: ', error);
      toast({ title: "Error", description: "Failed to sign out.", variant: "destructive" });
    }
  };

  const handleConnectWallet = () => {
    toast({
      title: "Coming Soon!",
      description: "Connect wallet functionality is not yet implemented.",
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <p className="text-lg text-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Redirect is handled in useEffect
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-background text-foreground relative">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-10 flex h-16 w-full items-center justify-between bg-background/80 px-4 py-2 backdrop-blur-sm md:max-w-md md:left-1/2 md:-translate-x-1/2">
        <Button
          onClick={handleConnectWallet}
          className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground hover:opacity-90 transition-opacity text-xs font-semibold py-2 px-3 rounded-md h-auto"
        >
          <Wallet className="mr-1 h-4 w-4" />
          CONNECT WALLET
        </Button>
        <Button variant="ghost" size="icon" onClick={handleSignOut} aria-label="Settings and Sign Out">
          <Settings className="h-6 w-6 text-foreground" />
        </Button>
      </div>

      {/* Main Content Area */}
      <main className="flex flex-col items-center w-full max-w-md mx-auto px-4 space-y-6 flex-grow pt-20 pb-24">
        <div className="flex flex-col items-center space-y-2">
          <HexagonLogo />
          <h1 className="text-4xl font-bold text-gradient-pink-orange">BLAYOND</h1>
        </div>

        {/* Today Stats Card */}
        <Card className="w-full bg-card shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Today</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground">Distance</p>
              <p className="text-2xl font-bold text-foreground">3,4 <span className="text-sm">km</span></p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Calories</p>
              <p className="text-2xl font-bold text-foreground">428</p>
            </div>
            <div className="flex flex-col items-center">
              <Flame className="h-6 w-6 text-accent" />
              <p className="text-xs text-muted-foreground mt-1">5-Day Streak</p>
            </div>
          </CardContent>
        </Card>

        {/* AI Coach Tip Card */}
        <Card className="w-full bg-card shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gradient-pink-orange">AI COACH TIP</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground">
              Take it easy today. Recovery pace recommended.
            </p>
          </CardContent>
        </Card>

        {/* Today's Tasks Card */}
        <Card className="w-full bg-card shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-accent">TODAY'S TASKS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="task1" defaultChecked className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
              <label htmlFor="task1" className="text-sm text-foreground">Log a journal</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="task2" defaultChecked className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
              <label htmlFor="task2" className="text-sm text-foreground">Share your run</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="task3" defaultChecked className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
              <label htmlFor="task3" className="text-sm text-foreground">Complete a 3 km</label>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 w-full pt-4">
          <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground hover:opacity-90 transition-opacity text-base font-bold py-4 rounded-lg h-auto">
            <Play className="mr-2 h-5 w-5" />
            START RUN
          </Button>
          <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground hover:opacity-90 transition-opacity text-base font-bold py-4 rounded-lg h-auto">
            <BookOpen className="mr-2 h-5 w-5" />
            JOURNAL
          </Button>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
