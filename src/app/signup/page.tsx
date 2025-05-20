
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthFormWrapper from '@/components/auth/auth-form-wrapper';
import HexagonLogo from '@/components/auth/hexagon-logo';
import { GoogleIcon } from '@/components/icons/google-icon';
import { Wallet } from 'lucide-react'; 

export default function SignUpPage() {
  const router = useRouter();

  const handleCreateAccount = () => {
    console.log('Create Account clicked.');
    // Placeholder: Add actual account creation logic here
  };

  const handleGoogleLogin = () => {
    console.log('Continue with Google clicked.');
    // Placeholder: Add Google login logic here
  };

  const handleWalletSignUp = () => {
    console.log('Wallet sign-up clicked.');
    // Placeholder: Add wallet sign-up logic (e.g., open modal)
  };

  return (
    <AuthFormWrapper>
      <div className="flex flex-col items-center space-y-4">
        <HexagonLogo />
        <h1 className="text-4xl font-bold text-gradient-pink-orange">
          BLAYOND
        </h1>
        <div className="text-center uppercase text-gradient-pink-orange">
          <p className="font-medium">Run Loud.</p>
          <p className="font-medium">Stand Proud.</p>
        </div>
      </div>

      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          className="rounded-lg border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:ring-2 focus:ring-[hsl(var(--ring))]"
          aria-label="Email"
        />
        <Input
          type="password"
          placeholder="Create a password"
          className="rounded-lg border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:ring-2 focus:ring-[hsl(var(--ring))]"
          aria-label="Create a password"
        />
      </div>

      <Button
        onClick={handleCreateAccount}
        className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground hover:opacity-90 transition-opacity text-lg font-bold py-6 rounded-lg"
      >
        CREATE ACCOUNT
      </Button>

      <div className="my-6 flex items-center">
        <hr className="flex-grow border-t border-[hsl(var(--border))]" />
        <span className="mx-4 text-sm text-[hsl(var(--muted-foreground))]">OR</span>
        <hr className="flex-grow border-t border-[hsl(var(--border))]" />
      </div>

      <div className="space-y-4">
        <div className="p-[2px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg">
          <Button
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full bg-[hsl(var(--background))] border-none hover:bg-[hsl(var(--input))] text-[hsl(var(--foreground))] py-3 rounded-[calc(var(--radius)-2px)]"
          >
            <GoogleIcon className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>
        </div>
        
        <div className="p-[2px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg">
          <Button
            variant="outline"
            onClick={handleWalletSignUp}
            className="w-full bg-[hsl(var(--background))] border-none hover:bg-[hsl(var(--input))] text-[hsl(var(--foreground))] py-3 rounded-[calc(var(--radius)-2px)]" 
          >
            <Wallet className="mr-2 h-5 w-5" />
            Sign up with Wallet
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-[hsl(var(--muted-foreground))]">
        Already have an account?{' '}
        <Link href="/signin" className="font-medium text-destructive hover:underline">
          Sign in here
        </Link>
      </p>
    </AuthFormWrapper>
  );
}
