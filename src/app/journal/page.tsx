
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // Removed CardHeader and CardTitle as they are not directly used for list items here
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BottomNavigation from "@/components/layout/bottom-navigation";
import { Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image"; // Using next/image for avatar

const journalEntries = [
  {
    distance: "5.2 km",
    duration: "31m",
    details: "32 min • 152 bpm • 6:13 /km • Morning",
  },
  {
    distance: "19 km",
    duration: "19m", 
    details: "19 min • 145 bpm • 6:29 /km • Afternoon",
  },
  {
    distance: "41 km",
    duration: "41m",
    details: "41 min • 158 bpm • 6:18 /km • Evening",
  },
];

const rewardEntries = [
  {
    amount: "+1,250 points",
    source: "From running",
    date: "Apr 15",
  },
  {
    amount: "$10 GHO",
    source: "From selling data",
    date: "Apr 15",
  },
  {
    amount: "$100 GHO",
    source: "From competition prize",
    date: "Apr 8",
  },
];

export default function JournalPage() {
  const { toast } = useToast();

  const handleConnectWallet = () => {
    toast({
      title: "Coming Soon!",
      description: "Connect wallet functionality is not yet implemented.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-background text-foreground pb-20">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-10 flex h-16 w-full items-center justify-end bg-transparent px-4 py-2 md:max-w-md md:left-1/2 md:-translate-x-1/2">
        <Button
          onClick={handleConnectWallet}
          className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground hover:opacity-90 transition-opacity text-xs font-semibold py-2 px-3 rounded-md h-auto"
        >
          <Wallet className="mr-1 h-4 w-4" />
          CONNECT WALLET
        </Button>
      </div>

      {/* Profile Section */}
      <main className="flex flex-col items-center w-full max-w-md mx-auto px-4 space-y-6 pt-20">
        <div className="flex flex-col items-center space-y-3 text-center">
          <Avatar className="h-32 w-32 border-4 border-card">
            <Image 
              src="https://placehold.co/200x200.png" 
              alt="User Avatar" 
              width={200} 
              height={200} 
              className="rounded-full"
              data-ai-hint="tiger illustration profile" 
            />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold text-foreground">Abigail S.</h1>
          <p className="text-sm text-muted-foreground">30 • Female</p>
          <p className="text-sm text-muted-foreground">135 lb • 5'6"</p>
          <div className="pt-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Distance Run
            </p>
            <p className="text-4xl font-bold text-gradient-pink-orange">342 km</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="journal" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-transparent p-0">
            <TabsTrigger
              value="journal"
              className="pb-2 text-lg data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              JOURNAL
            </TabsTrigger>
            <TabsTrigger
              value="rewards"
              className="pb-2 text-lg data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              REWARDS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="journal" className="mt-4 space-y-4">
            {journalEntries.map((entry, index) => (
              <Card key={index} className="w-full bg-card shadow-lg">
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      {entry.distance}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {entry.details}
                    </p>
                  </div>
                  <p className="text-xl font-semibold text-foreground">
                    {entry.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="rewards" className="mt-4 space-y-4">
            {rewardEntries.map((reward, index) => (
              <Card key={index} className="w-full bg-card shadow-lg">
                <CardContent className="p-4 flex justify-between items-start"> {/* items-start to align date correctly */}
                  <div>
                    <p className="text-xl font-bold text-primary">
                      {reward.amount}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {reward.source}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    {reward.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <BottomNavigation />
    </div>
  );
}
