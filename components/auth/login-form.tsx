'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import { login } from '@/actions/login';
import { LoginSchema } from '@/schemas';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { CardWrapper } from './card-wrapper';
import { FormError } from './form-error';
import { FormSuccess } from './form-sucess';

// Create a separate component that uses useSearchParams
const LoginFormWithSearchParams = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider'
      : '';

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Dont have an account? Sign up"
      headerLabel="Welcome back!"
      showSocials
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      className="w-full"
                      placeholder="om.works01@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full"
                      disabled={isPending}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button className="w-full" disabled={isPending} type="submit">
            LogIn
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

const LoginFormFallback = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Dont have an account? Sign up"
      headerLabel="Welcome back!"
      showSocials
    >
      <div className="space-y-6">
        <div className="space-y-4">
          {/* Placeholder for form fields */}
          <div className="space-y-2">
            <div className="font-medium text-sm">Email</div>
            <div className="h-10 w-full animate-pulse rounded-md bg-gray-100" />
          </div>
          <div className="space-y-2">
            <div className="font-medium text-sm">Password</div>
            <div className="h-10 w-full animate-pulse rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="h-10 w-full animate-pulse rounded-md bg-gray-100" />
      </div>
    </CardWrapper>
  );
};

export const LoginForm = () => {
  return (
    <Suspense fallback={<LoginFormFallback />}>
      <LoginFormWithSearchParams />
    </Suspense>
  );
};
