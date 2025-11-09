import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aerospace Manufacturing Solutions',
  description: 'Mission-critical aerospace and defense manufacturing solutions with AS9100 certification, precision engineering, and rigorous quality standards. Ultra-precision manufacturing for aerospace applications.',
  keywords: ['aerospace manufacturing', 'AS9100', 'defense manufacturing', 'aircraft components', 'aerospace precision', 'aviation manufacturing'],
  openGraph: {
    title: 'Aerospace Manufacturing Solutions | Xtrawrkx Manufacturing Business',
    description: 'Mission-critical aerospace and defense manufacturing solutions with AS9100 certification and precision engineering.',
    url: 'https://xmb.xtrawrkx.com/industries/aerospace',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/industries/aerospace',
  },
};

export default function AerospaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

