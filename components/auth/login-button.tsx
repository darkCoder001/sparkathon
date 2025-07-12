'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
}

export const LoginButton = ({
  children,
  mode = 'redirect',
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return <Button variant="link">{children}</Button>;
  }

  return <Button onClick={onClick}>{children}</Button>;
};
