import { getNoteById } from '@/lib/db/queries';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const note = await getNoteById(Number(id));
  if (!note) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }
  return Response.json(note);
}
