import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  PencilLine,
  Cloud,
  Tags,
  Users,
  Search,
  Moon
} from 'lucide-react';
import { Hero } from '@/components/marketing/Hero';
import { FeaturesSection } from '@/components/marketing/FeaturesSection';
import { Faq } from '@/components/marketing/Faq';
import { Footer } from '@/components/marketing/Footer';

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
      <FeaturesSection
        items={[
          {
            icon: PencilLine,
            title: 'Rich Editor',
            description: 'Format notes with headings, lists and more.'
          },
          {
            icon: Cloud,
            title: 'Sync Everywhere',
            description: 'Access your notes from any device.'
          },
          {
            icon: Tags,
            title: 'Stay Organized',
            description: 'Tag notes to quickly find them later.'
          },
          {
            icon: Users,
            title: 'Collaborate',
            description: 'Share notes and work together in real time.'
          },
          {
            icon: Search,
            title: 'Powerful Search',
            description: 'Find any note instantly with keywords.'
          },
          {
            icon: Moon,
            title: 'Dark Mode',
            description: 'Reduce eye strain with a beautiful dark theme.'
          }
        ]}
      />

      <Faq
        items={[
          {
            question: 'Is NoteFlow free to use?',
            answer: 'Yes! You can start taking notes for free with our base plan.'
          },
          {
            question: 'Can I import my existing notes?',
            answer: 'Absolutely. Import from markdown or text files in seconds.'
          },
          {
            question: 'Do you offer a mobile app?',
            answer: 'A dedicated mobile app is coming soon for iOS and Android.'
          }
        ]}
      />

      <Footer />
    </main>
  );
}
