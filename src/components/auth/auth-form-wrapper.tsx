import type { ReactNode } from 'react';

interface AuthFormWrapperProps {
  children: ReactNode;
}

export default function AuthFormWrapper({ children }: AuthFormWrapperProps) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-sm space-y-6">
        {children}
      </div>
    </main>
  );
}
