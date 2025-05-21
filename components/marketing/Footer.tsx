import Link from 'next/link';
import { CircleIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center gap-4">
        <Link href="/" className="flex items-center text-gray-900">
          <CircleIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 font-semibold">NoteFlow</span>
        </Link>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} NoteFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
