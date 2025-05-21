import Link from 'next/link';
import { getNoteById } from '@/lib/db/queries';

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await getNoteById(Number(id));
  if (!note) {
    return <div className="p-4">Note not found.</div>;
  }
  return (
    <section className="flex-1 p-4 lg:p-8">
      <Link href="/notes" className="mb-4 inline-block text-sm text-blue-500">
        &larr; Back to notes
      </Link>
      <div className="sticky-note rotate-0">
        <h1 className="text-xl font-medium mb-2">{note.title}</h1>
        <p className="whitespace-pre-wrap break-words">{note.content}</p>
      </div>
    </section>
  );
}
