import { NextRequest } from 'next/server';
import { getNotesForUser, createNote } from '@/lib/db/queries';

export async function GET() {
  const notes = await getNotesForUser();
  return Response.json(notes);
}

export async function POST(req: NextRequest) {
  const { title, content } = await req.json();
  const note = await createNote({ title, content });
  return Response.json(note, { status: 201 });
}
