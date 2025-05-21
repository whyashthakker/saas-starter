import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PencilLine, Cloud, Tags } from 'lucide-react';
import { Hero } from '@/components/marketing/Hero';
import { Feature } from '@/components/marketing/Feature';

export default function HomePage() {
  return (
    <main>
      <Hero
        title={
          <>
            Capture your notes
            <span className="block text-blue-600">anywhere</span>
          </>
        }
        subtitle="NoteFlow keeps your thoughts organized and in sync across all your devices."
        cta={
          <Button asChild size="lg" className="rounded-full">
            <Link href="/sign-up">Get Started</Link>
          </Button>
        }
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <Feature
            icon={PencilLine}
            title="Rich Editor"
            description="Format notes with headings, lists and more." />
          <Feature
            icon={Cloud}
            title="Sync Everywhere"
            description="Access your notes from any device." />
          <Feature
            icon={Tags}
            title="Stay Organized"
            description="Tag notes to quickly find them later." />
        </div>
      </section>
    </main>
  );
}
