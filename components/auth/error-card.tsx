import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { BackButton } from './back-button';
import { Header } from './header';

export const ErrorCard = () => {
  return (
    <Card className="flex h-screen items-center justify-center">
      <CardHeader>
        <Header label="Oops! Something went wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton href="/auth/login" label="Back to login" />
      </CardFooter>
    </Card>
  );
};
