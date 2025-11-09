import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the expert team at Xtrawrkx Manufacturing Business. Our skilled professionals bring years of experience in manufacturing, engineering, and operational excellence.',
  keywords: ['manufacturing team', 'expert engineers', 'manufacturing professionals', 'our team'],
  openGraph: {
    title: 'Our Team | Xtrawrkx Manufacturing Business',
    description: 'Meet the expert team at Xtrawrkx Manufacturing Business.',
    url: 'https://xmb.xtrawrkx.com/team',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/team',
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

