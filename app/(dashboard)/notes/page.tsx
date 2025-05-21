'use client';

import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NotesPage() {
  const { data: notes, mutate } = useSWR('/api/notes', fetcher);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function addNote() {
    await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    setTitle('');
    setContent('');
    mutate();
  }

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium mb-6">Notes</h1>

      <div className="grid gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        {notes?.map((note: any, idx: number) => (
          <Link
            key={note.id}
            href={`/notes/${note.id}`}
            className={`sticky-note block ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
          >
            <h2 className="font-medium mb-2">{note.title}</h2>
            <p className="text-sm whitespace-pre-wrap break-words">
              {note.content.length > 100 ? note.content.slice(0, 100) + '...' : note.content}
            </p>
          </Link>
        ))}
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await addNote();
        }}
        className="max-w-md space-y-4"
      >
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="min-h-[120px]"
        />
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
          Add Note
        </Button>
      </form>
    </section>
  );
}
