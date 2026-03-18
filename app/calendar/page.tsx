import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { EventCard } from '@/components/ui/event-card';
import { MetricCard } from '@/components/ui/metric-card';

export const metadata: Metadata = {
  title: 'Calendar 2026 — ZV Holdings',
  description:
    'ZV Holdings 2026 event calendar: Electric Animals, Blockchain Jungle, Pura Tinta Fest, Magflow concerts, and more across Costa Rica and internationally.',
};

const costaRicaEvents = [
  {
    name: 'Elrow',
    date: 'February 13',
    location: 'National Convention Center',
    category: 'Electronic',
  },
  {
    name: 'Pura Tinta Fest',
    date: 'February 27 - March 1',
    location: 'National Convention Center',
    category: 'Convention',
  },
  {
    name: 'Electric Animals Fest',
    date: 'April 11',
    location: 'National Convention Center',
    category: 'Festival',
  },
  {
    name: 'Miguel Bos\u00e9',
    date: 'April 25',
    location: 'Parque Viva',
    category: 'Concert',
  },
  {
    name: 'Jon Batiste & the Costa Philharmonic Orchestra',
    date: 'September 3',
    location: 'Parque Viva',
    category: 'Concert',
    blurred: true,
  },
  {
    name: 'Electric Animals Halloween',
    date: 'October 31',
    location: 'National Convention Center',
    category: 'Festival',
  },
  {
    name: 'Blockchain Jungle',
    date: 'November 13-14',
    location: 'National Convention Center',
    category: 'Conference',
  },
  {
    name: 'Oneiro Festival',
    date: 'November 28-29',
    location: 'National Convention Center',
    category: 'Festival',
  },
  {
    name: 'Electric Animals NYE',
    date: 'December 31',
    location: 'National Convention Center',
    category: 'Festival',
  },
];

const europeTourEvents = [
  {
    name: 'Electric Animals Madrid',
    date: '2026',
    location: 'Madrid, Spain',
    category: 'Festival',
  },
  {
    name: 'Electric Animals Luxembourg',
    date: '2026',
    location: 'Luxembourg',
    category: 'Festival',
  },
  {
    name: 'Electric Animals ADE',
    date: 'October 2026',
    location: 'Amsterdam, Netherlands',
    category: 'Festival',
  },
];

const latamTourEvents = [
  {
    name: 'Electric Animals El Salvador',
    date: '2026',
    location: 'San Salvador, El Salvador',
    category: 'Festival',
  },
  {
    name: 'Electric Animals Cali',
    date: '2026',
    location: 'Cali, Colombia',
    category: 'Festival',
  },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16">
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">Calendar</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              2026 Events
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg md:text-xl">
              A packed calendar of events across Costa Rica and international markets — showcasing
              the scale and momentum of the ZV Holdings ecosystem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Summary Metrics */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <AnimatedSection>
              <MetricCard value="15+" label="Confirmed Events" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <MetricCard value="5+" label="Countries" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <MetricCard value="~75,000" label="Total Expected Attendees" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Costa Rica Events */}
      <section className="border-border bg-muted/30 border-t px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading
              label="Costa Rica"
              title="Home Market Events"
              description="9 confirmed events in Costa Rica for 2026, spanning festivals, concerts, conventions, and conferences."
            />
          </AnimatedSection>
          <div className="mt-12 space-y-3">
            {costaRicaEvents.map((event, i) => (
              <AnimatedSection key={event.name} delay={i * 0.05}>
                <EventCard
                  name={event.name}
                  date={event.date}
                  location={event.location}
                  category={event.category}
                  blurred={event.blurred}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Europe Tour */}
      <section className="border-border border-t px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading
              label="Electric Animals Europe Tour"
              title="European Expansion"
              description="Three confirmed stops across Europe — proving the festival format works across continents."
            />
          </AnimatedSection>
          <div className="mt-12 space-y-3">
            {europeTourEvents.map((event, i) => (
              <AnimatedSection key={event.name} delay={i * 0.05}>
                <EventCard
                  name={event.name}
                  date={event.date}
                  location={event.location}
                  category={event.category}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Latin America Tour */}
      <section className="border-border bg-muted/30 border-t px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading
              label="Electric Animals Latin America"
              title="Regional Expansion"
              description="Expanding across Latin America with confirmed dates in El Salvador and Colombia."
            />
          </AnimatedSection>
          <div className="mt-12 space-y-3">
            {latamTourEvents.map((event, i) => (
              <AnimatedSection key={event.name} delay={i * 0.05}>
                <EventCard
                  name={event.name}
                  date={event.date}
                  location={event.location}
                  category={event.category}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
