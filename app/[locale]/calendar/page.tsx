import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { EventCard } from '@/components/ui/event-card';
import { MetricCard } from '@/components/ui/metric-card';
import { getDictionary } from '@/lib/get-dictionary';
import { isValidLocale, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

const costaRicaEvents = [
  { name: 'Elrow', date: '', location: '', category: 'Electronic' },
  { name: 'Pura Tinta Fest', date: '', location: '', category: 'Convention' },
  { name: 'Electric Animals Fest', date: '', location: '', category: 'Festival' },
  { name: 'Miguel Bosé', date: '', location: '', category: 'Concert' },
  {
    name: 'Jon Batiste & the Costa Philharmonic Orchestra',
    date: '',
    location: '',
    category: 'Concert',
    blurred: true,
  },
  { name: 'Electric Animals Halloween', date: '', location: '', category: 'Festival' },
  { name: 'Blockchain Jungle', date: '', location: '', category: 'Conference' },
  { name: 'Oneiro Festival', date: '', location: '', category: 'Festival' },
  { name: 'Electric Animals NYE', date: '', location: '', category: 'Festival' },
];

const costaRicaEventsEN = [
  { date: 'February 13', location: 'National Convention Center' },
  { date: 'February 27 - March 1', location: 'National Convention Center' },
  { date: 'April 11', location: 'National Convention Center' },
  { date: 'April 25', location: 'Parque Viva' },
  { date: 'September 3', location: 'Parque Viva' },
  { date: 'October 31', location: 'National Convention Center' },
  { date: 'November 13-14', location: 'National Convention Center' },
  { date: 'November 28-29', location: 'National Convention Center' },
  { date: 'December 31', location: 'National Convention Center' },
];

const costaRicaEventsES = [
  { date: '13 de febrero', location: 'Centro Nacional de Convenciones' },
  { date: '27 de febrero - 1 de marzo', location: 'Centro Nacional de Convenciones' },
  { date: '11 de abril', location: 'Centro Nacional de Convenciones' },
  { date: '25 de abril', location: 'Parque Viva' },
  { date: '3 de septiembre', location: 'Parque Viva' },
  { date: '31 de octubre', location: 'Centro Nacional de Convenciones' },
  { date: '13-14 de noviembre', location: 'Centro Nacional de Convenciones' },
  { date: '28-29 de noviembre', location: 'Centro Nacional de Convenciones' },
  { date: '31 de diciembre', location: 'Centro Nacional de Convenciones' },
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
    name: 'Electric Animals Amsterdam',
    date: '',
    location: '',
    category: 'Festival',
  },
];

const europeTourEN = [
  { date: '2026', location: 'Madrid, Spain' },
  { date: '2026', location: 'Luxembourg' },
  { date: 'October 2026', location: 'Amsterdam, Netherlands' },
];

const europeTourES = [
  { date: '2026', location: 'Madrid, España' },
  { date: '2026', location: 'Luxemburgo' },
  { date: 'Octubre 2026', location: 'Ámsterdam, Países Bajos' },
];

const latamTourEvents = [
  { name: 'Electric Animals El Salvador', date: '2026', location: '', category: 'Festival' },
  { name: 'Electric Animals Cali', date: '2026', location: '', category: 'Festival' },
];

const latamTourEN = [
  { date: '2026', location: 'San Salvador, El Salvador' },
  { date: '2026', location: 'Cali, Colombia' },
];

const latamTourES = [
  { date: '2026', location: 'San Salvador, El Salvador' },
  { date: '2026', location: 'Cali, Colombia' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.calendarPage.meta.title, description: dict.calendarPage.meta.description };
}

export default async function CalendarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const t = dict.calendarPage;

  const crEvents = locale === 'es' ? costaRicaEventsES : costaRicaEventsEN;
  const euEvents = locale === 'es' ? europeTourES : europeTourEN;
  const laEvents = locale === 'es' ? latamTourES : latamTourEN;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16 sm:px-10 lg:px-16">
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">
              {t.hero.label}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg md:text-xl">
              {t.hero.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Summary Metrics */}
      <section className="border-border border-t px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {t.summaryMetrics.map((metric, i) => (
              <AnimatedSection key={metric.label} delay={i * 0.1}>
                <MetricCard value={metric.value} label={metric.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Costa Rica Events */}
      <section className="border-border bg-muted/30 border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading
              label={t.costaRica.label}
              title={t.costaRica.title}
              description={t.costaRica.description}
            />
          </AnimatedSection>
          <div className="mt-12 space-y-3">
            {costaRicaEvents.map((event, i) => (
              <AnimatedSection key={event.name} delay={i * 0.05}>
                <EventCard
                  name={event.name}
                  date={crEvents[i].date}
                  location={crEvents[i].location}
                  category={event.category}
                  blurred={event.blurred}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Europe Tour */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading
              label={t.europe.label}
              title={t.europe.title}
              description={t.europe.description}
            />
          </AnimatedSection>
          <div className="mt-12 space-y-3">
            {europeTourEvents.map((event, i) => (
              <AnimatedSection key={event.name} delay={i * 0.05}>
                <EventCard
                  name={event.name}
                  date={euEvents[i].date}
                  location={euEvents[i].location}
                  category={event.category}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Latin America Tour */}
      <section className="border-border bg-muted/30 border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading
              label={t.latam.label}
              title={t.latam.title}
              description={t.latam.description}
            />
          </AnimatedSection>
          <div className="mt-12 space-y-3">
            {latamTourEvents.map((event, i) => (
              <AnimatedSection key={event.name} delay={i * 0.05}>
                <EventCard
                  name={event.name}
                  date={laEvents[i].date}
                  location={laEvents[i].location}
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
