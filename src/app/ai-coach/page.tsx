
"use client";

import type { FormEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mic, Send } from 'lucide-react';
import SiteLogo from '@/components/common/SiteLogo';
import BottomNavigation from '@/components/layout/bottom-navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const initialMessagesData: Message[] = [
  { id: 1, text: "Good morning.", sender: 'user' },
  { id: 2, text: "Morning: Ready to start your day with a run?", sender: 'ai' },
  { id: 3, text: "Yes, what should I do today?", sender: 'user' },
  { id: 4, text: "Let's start with a light 5km jog. Do you want assistance on stretching first?", sender: 'ai' },
];

export default function AiCoachPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>(initialMessagesData);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const chatContainerRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Scroll to bottom on initial load and when messages change
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e?: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault(); // Prevent form submission if used in a form
    if (inputValue.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now(), // Use timestamp for unique ID
      text: inputValue,
      sender: 'user',
    };

    // Simulate AI response after a short delay
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setInputValue('');

    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: `Okay, let's plan your "${inputValue.substring(0,20)}..." activity. How about a 30-minute recovery run?`,
        sender: 'ai',
      };
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    }, 1000);
  };
  

  return (
    <div className="flex flex-col h-screen bg-background text-foreground md:max-w-md md:mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-background z-20 h-16 w-full">
        <Button variant="ghost" size="icon" onClick={() => router.back()} aria-label="Go back">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <SiteLogo className="h-8" />
        <div className="w-10"></div> {/* Spacer for balance */}
      </header>

      {/* Chat Messages Area */}
      <main 
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto p-4 space-y-4 w-full"
        style={{ paddingBottom: 'calc(4rem + 4rem)' }} // Space for input bar and bottom nav
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex w-full",
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={cn(
                "max-w-[75%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow text-sm md:text-base", // Increased roundedness
                msg.sender === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-md' // Sharper corner
                  : 'bg-card text-card-foreground rounded-bl-md' // Sharper corner
              )}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area - Fixed at the bottom, above BottomNavigation */}
      <footer className="fixed bottom-16 left-0 right-0 bg-background border-t border-border p-2 z-20 md:max-w-md md:mx-auto md:w-full">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" type="button" className="text-muted-foreground hover:text-foreground p-2">
            <Mic className="h-5 w-5" />
          </Button>
          <Input
            type="text"
            placeholder="Message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow rounded-full h-10 px-4 py-2 text-sm focus:ring-primary border-border"
            aria-label="Chat message input"
          />
          <Button type="submit" size="icon" className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full w-10 h-10 hover:opacity-90 shrink-0">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </footer>

      <BottomNavigation />
    </div>
  );
}
