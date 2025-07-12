'use cleint';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { DEFAULT_AUTH_REDIRECT } from '@/routes';
import { Button } from '../ui/button';
export const Social = () => {
  const onClick = (provider: 'github' | 'google') => {
    signIn(provider, { callbackUrl: DEFAULT_AUTH_REDIRECT });
  };
  return (
    <div className="flex w-full items-center gap-x-5">
      <Button
        className="w-full"
        onClick={() => onClick('google')}
        size="lg"
        variant="outline"
      >
        <FcGoogle className="size-5" /> Continue With Google
      </Button>
    </div>
  );
};
