import { getNoteById } from '@/lib/db/queries';

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const note = await getNoteById(Number(params.id));
  if (!note) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }
  return Response.json(note);
}
