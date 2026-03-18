import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { TeamCard } from '@/components/ui/team-card';

export const metadata: Metadata = {
  title: 'Team — ZV Holdings',
  description:
    "Meet the leadership team behind ZV Holdings — the people building Latin America's leading entertainment ecosystem.",
};

const teamMembers = [
  { name: 'Sam Zahedi', role: 'CEO, Founder', photo: '/images/sam.webp' },
  { name: 'Pablo Vargas', role: 'COO, Partner', photo: '/images/pablo.webp' },
  { name: 'Roberto Amarat', role: 'Stage Manager', photo: '/images/rob.webp' },
  { name: 'Jeimy Sibaja', role: 'Artistic Direction Lead', photo: '/images/jeimy.webp' },
  {
    name: 'Juan Jos\u00e9 L\u00f3pez',
    role: 'Logistic Manager',
    photo: '/images/juan-jose.webp',
  },
  {
    name: 'Viviana Barrantes',
    role: 'International Business Development Manager',
    photo: null,
  },
  {
    name: 'Anna Pearson',
    role: 'Hospitality, Sponsorships & Process Optimization',
    photo: null,
  },
  {
    name: 'Ronald Mora',
    role: 'Affiliate Program Manager & Social Media Coordinator',
    photo: '/images/ronald.webp',
  },
  {
    name: 'Lorenzo Wynberg',
    role: 'Senior Web Developer',
    photo: '/images/lore.webp',
  },
  { name: 'Daniel Hidalgo', role: 'Audiovisual Director', photo: null },
  {
    name: 'Fernando L\u00f3pez',
    role: 'Vendor Coordinator',
    photo: '/images/fernando.webp',
  },
  {
    name: 'Sof\u00eda Rodr\u00edguez',
    role: 'Art and Design Coordinator',
    photo: '/images/sofia.webp',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16 sm:px-10 lg:px-16">
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">Team</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our People
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg md:text-xl">
              The team behind ZV Holdings combines deep expertise in event production, technology,
              creative direction, and business development.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading label="Leadership" title="Founders & Partners" align="center" />
          </AnimatedSection>
          <div className="mt-12 flex flex-wrap justify-center gap-12">
            {teamMembers.slice(0, 2).map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  className="w-48"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="border-border bg-muted/30 border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading label="Team" title="Key Team Members" align="center" />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {teamMembers.slice(2).map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <TeamCard name={member.name} role={member.role} photo={member.photo} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
