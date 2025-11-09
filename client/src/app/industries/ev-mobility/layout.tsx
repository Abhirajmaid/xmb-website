import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EV & E-Mobility Manufacturing Solutions',
  description: 'Electric vehicle and e-mobility manufacturing solutions. Specialized manufacturing for EV components, battery systems, charging infrastructure, and sustainable mobility solutions.',
  keywords: ['EV manufacturing', 'electric vehicle', 'e-mobility', 'battery manufacturing', 'EV components', 'sustainable mobility'],
  openGraph: {
    title: 'EV & E-Mobility Manufacturing Solutions | Xtrawrkx Manufacturing Business',
    description: 'Electric vehicle and e-mobility manufacturing solutions for EV components and battery systems.',
    url: 'https://xmb.xtrawrkx.com/industries/ev-mobility',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/industries/ev-mobility',
  },
};

export default function EVMobilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

