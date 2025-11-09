import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Manufacturing solutions for EV/E-Mobility, BESS/Energy Storage, Drones, E-Agritech, and Aerospace industries. Specialized manufacturing expertise for cutting-edge sectors.',
  keywords: ['EV manufacturing', 'electric vehicle', 'energy storage', 'BESS', 'drone manufacturing', 'aerospace manufacturing', 'agritech', 'industry solutions'],
  openGraph: {
    title: 'Industries | Xtrawrkx Manufacturing Business',
    description: 'Manufacturing solutions for EV/E-Mobility, BESS/Energy Storage, Drones, E-Agritech, and Aerospace industries.',
    url: 'https://xmb.xtrawrkx.com/industries',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/industries',
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

