import { BsCheckCircle } from 'react-icons/bs';

interface FormSuccessProps {
  message: string | undefined;
}
export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-emerald-500 text-sm">
      <BsCheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
