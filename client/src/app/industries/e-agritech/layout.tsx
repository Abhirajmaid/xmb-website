import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Agritech Manufacturing Solutions',
  description: 'E-Agritech and agricultural technology manufacturing solutions. Specialized manufacturing for smart farming equipment, agricultural sensors, IoT devices, and precision agriculture systems.',
  keywords: ['agritech manufacturing', 'smart farming', 'agricultural technology', 'precision agriculture', 'IoT agriculture', 'farming equipment'],
  openGraph: {
    title: 'E-Agritech Manufacturing Solutions | Xtrawrkx Manufacturing Business',
    description: 'E-Agritech and agricultural technology manufacturing solutions for smart farming and precision agriculture.',
    url: 'https://xmb.xtrawrkx.com/industries/e-agritech',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/industries/e-agritech',
  },
};

export default function EAgritechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

