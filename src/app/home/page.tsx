
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/signup'); // Or '/signin'
      }
      setIsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/signup'); // Or '/signin'
    } catch (error) {
      console.error('Error signing out: ', error);
      // Handle error, maybe show a toast
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <p className="text-lg text-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    // This case should ideally be handled by the redirect in onAuthStateChanged,
    // but it's a good fallback.
    return null; 
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 space-y-6">
      <h1 className="text-4xl font-bold text-gradient-pink-orange">Welcome to BLAYOND!</h1>
      <p className="text-xl text-foreground">
        You are signed in as: {user.email || user.displayName || 'User'}
      </p>
      <p className="text-lg text-muted-foreground">
        This is your home page. More content will be added soon!
      </p>
      <Button 
        onClick={handleSignOut}
        className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground hover:opacity-90 transition-opacity text-lg font-bold py-3 rounded-lg"
      >
        Sign Out
      </Button>
    </div>
  );
}
