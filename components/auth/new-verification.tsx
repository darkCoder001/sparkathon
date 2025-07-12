'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { newVerification } from '@/actions/new-verification';
import { CardWrapper } from './card-wrapper';
import { FormError } from './form-error';
import { FormSuccess } from './form-sucess';

const VerificationContent = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (!token) {
      setError('Missing token');
      return;
    }
    newVerification(token)
      .then((data) => {
        setError(data.error || null);
        setSuccess(data.success || null);
      })
      .catch(() => {
        setError('Something went wrong');
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex w-full items-center justify-center">
      {!(success || error) && <BeatLoader />}
      <FormSuccess message={success || undefined} />
      <FormError message={error || undefined} />
    </div>
  );
};

const VerificationFallback = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <BeatLoader />
    </div>
  );
};

export const NewVerificationForm = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      headerLabel="Verify your email"
    >
      <Suspense fallback={<VerificationFallback />}>
        <VerificationContent />
      </Suspense>
    </CardWrapper>
  );
};
