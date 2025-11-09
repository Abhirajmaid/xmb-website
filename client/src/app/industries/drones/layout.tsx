import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Manufacturing Solutions',
  description: 'Drone and UAV manufacturing solutions. Specialized manufacturing for commercial drones, industrial UAVs, drone components, and autonomous flight systems.',
  keywords: ['drone manufacturing', 'UAV manufacturing', 'commercial drones', 'industrial drones', 'drone components', 'autonomous systems'],
  openGraph: {
    title: 'Drone Manufacturing Solutions | Xtrawrkx Manufacturing Business',
    description: 'Drone and UAV manufacturing solutions for commercial and industrial applications.',
    url: 'https://xmb.xtrawrkx.com/industries/drones',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/industries/drones',
  },
};

export default function DronesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

