
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Zap, Brain, Users, Trophy } from 'lucide-react'; 
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/ai-coach', label: 'AI Coach', icon: Brain },
  { href: '/run', label: 'Run', icon: Zap },
  { href: '/home', label: 'Home', icon: Home },
  { href: '/community', label: 'Community', icon: Users },
  { href: '/competition', label: 'Competition', icon: Trophy },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 flex h-16 w-full items-center justify-around border-t border-border bg-card md:max-w-md md:left-1/2 md:-translate-x-1/2 md:rounded-t-lg">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link href={item.href} key={item.label} legacyBehavior>
            <a
              className={cn(
                "flex flex-col items-center justify-center space-y-1 p-2 rounded-md transition-colors w-1/5", // Added w-1/5 for equal distribution
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon 
                className={cn(
                  "h-6 w-6", 
                  isActive ? "fill-primary stroke-primary" : "stroke-current" // Ensure non-active icons just take current text color
                )} 
                fill={isActive ? "currentColor" : "none"} // More explicit fill control
              />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          </Link>
        );
      })}
    </nav>
  );
}
