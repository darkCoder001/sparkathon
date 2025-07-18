'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export function DropdownThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <DropdownMenuItem
      className="flex cursor-pointer items-center justify-between"
      onClick={handleToggleTheme}
    >
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
      {isDark ? (
        <SunIcon className="h-4 w-4 hover:text-primary" />
      ) : (
        <MoonIcon className="h-4 w-4 hover:text-primary" />
      )}
    </DropdownMenuItem>
  );
}
