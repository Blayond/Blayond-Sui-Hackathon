
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthFormWrapper from '@/components/auth/auth-form-wrapper';
import SiteLogo from '@/components/common/SiteLogo'; // Updated import
import { GoogleIcon } from '@/components/icons/google-icon';
import { Wallet } from 'lucide-react';
import { auth } from '@/lib/firebase/config';
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  UserCredential,
  FirebaseError
} from 'firebase/auth';
import { useToast } from "@/hooks/use-toast";

export default function SignUpPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isWalletLoading, setIsWalletLoading] = useState(false);


  const handleCreateAccount = async () => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }
    setIsEmailLoading(true);
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Account created:', userCredential.user);
      toast({
        title: "Success!",
        description: "Account created successfully.",
      });
      router.push('/home');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error('Error creating account:', firebaseError);
      let errorMessage = "Failed to create account. Please try again.";
      if (firebaseError.code === 'auth/email-already-in-use') {
        errorMessage = 'This email address is already in use.';
      } else if (firebaseError.code === 'auth/weak-password') {
        errorMessage = 'The password is too weak. Please choose a stronger password.';
      } else if (firebaseError.code === 'auth/invalid-email') {
        errorMessage = 'The email address is not valid.';
      }
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsEmailLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const userCredential: UserCredential = await signInWithPopup(auth, provider);
      console.log('Signed in with Google:', userCredential.user);
      toast({
        title: "Success!",
        description: "Signed in with Google successfully.",
      });
      router.push('/home');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error('Error with Google sign-in:', firebaseError);
      toast({
        title: "Error",
        description: "Failed to sign in with Google. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleWalletSignUp = () => {
    setIsWalletLoading(true);
    console.log('Wallet sign-up clicked.');
    toast({
        title: "Coming Soon!",
        description: "Wallet sign-up functionality is not yet implemented.",
      });
    // Simulate async operation
    setTimeout(() => setIsWalletLoading(false), 1000);
  };

  const isLoading = isEmailLoading || isGoogleLoading || isWalletLoading;

  return (
    <AuthFormWrapper>
      <div className="flex flex-col items-center space-y-4">
        <SiteLogo /> {/* Updated component */}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:ring-2 focus:ring-[hsl(var(--ring))]"
          aria-label="Email"
          disabled={isLoading}
        />
        <Input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:ring-2 focus:ring-[hsl(var(--ring))]"
          aria-label="Create a password"
          disabled={isLoading}
        />
      </div>

      <Button
        onClick={handleCreateAccount}
        className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground hover:opacity-90 transition-opacity text-lg font-bold py-6 rounded-lg"
        disabled={isLoading}
      >
        {isEmailLoading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
      </Button>

      <div className="my-6 flex items-center">
        <hr className="flex-grow border-t border-[hsl(var(--border))]" />
        <span className="mx-4 text-sm text-[hsl(var(--muted-foreground))]">OR</span>
        <hr className="flex-grow border-t border-[hsl(var(--border))]" />
      </div>

      <div className="space-y-4">
        <div className="p-[2px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg">
          <Button
            variant="outline" // To achieve gradient border with dark background
            onClick={handleGoogleLogin}
            className="w-full bg-[hsl(var(--background))] border-none hover:bg-[hsl(var(--input))] text-[hsl(var(--foreground))] py-3 rounded-[calc(var(--radius)-2px)]"
            disabled={isLoading}
          >
            <GoogleIcon className="mr-2 h-5 w-5" />
            {isGoogleLoading ? 'Signing in...' : 'Continue with Google'}
          </Button>
        </div>
        
        <div className="p-[2px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg">
          <Button
            variant="outline"
            onClick={handleWalletSignUp}
            className="w-full bg-[hsl(var(--background))] border-none hover:bg-[hsl(var(--input))] text-[hsl(var(--foreground))] py-3 rounded-[calc(var(--radius)-2px)]" 
            disabled={isLoading}
          >
            <Wallet className="mr-2 h-5 w-5" />
             {isWalletLoading ? 'Processing...' : 'Sign up with Wallet'}
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
