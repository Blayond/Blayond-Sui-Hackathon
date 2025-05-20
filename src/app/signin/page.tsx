import Link from 'next/link';
import AuthFormWrapper from '@/components/auth/auth-form-wrapper';
import { Button } from '@/components/ui/button';

export default function SignInPage() {
  return (
    <AuthFormWrapper>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient-pink-orange mb-8">
          Sign In
        </h1>
        <p className="text-[hsl(var(--muted-foreground))] mb-6">
          This is the Sign In page. Content to be added.
        </p>
        <Button asChild className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground hover:opacity-90 transition-opacity text-lg font-bold py-3 rounded-lg">
          <Link href="/signup">
            Back to Sign Up
          </Link>
        </Button>
      </div>
    </AuthFormWrapper>
  );
}
