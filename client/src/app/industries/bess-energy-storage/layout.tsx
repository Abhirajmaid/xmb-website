import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BESS & Energy Storage Manufacturing Solutions',
  description: 'Battery Energy Storage System (BESS) and energy storage manufacturing solutions. Specialized manufacturing for battery packs, energy storage systems, and grid-scale storage solutions.',
  keywords: ['BESS manufacturing', 'energy storage', 'battery storage', 'grid storage', 'renewable energy', 'battery packs'],
  openGraph: {
    title: 'BESS & Energy Storage Manufacturing Solutions | Xtrawrkx Manufacturing Business',
    description: 'Battery Energy Storage System and energy storage manufacturing solutions for grid-scale storage.',
    url: 'https://xmb.xtrawrkx.com/industries/bess-energy-storage',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/industries/bess-energy-storage',
  },
};

export default function BESSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

