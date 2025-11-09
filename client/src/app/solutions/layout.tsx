import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Comprehensive manufacturing solutions including end-to-end project management, supply chain optimization, innovation lab services, and operational excellence programs.',
  keywords: ['manufacturing solutions', 'end-to-end solutions', 'supply chain optimization', 'innovation lab', 'operational excellence', 'project management'],
  openGraph: {
    title: 'Solutions | Xtrawrkx Manufacturing Business',
    description: 'Comprehensive manufacturing solutions including end-to-end project management, supply chain optimization, and operational excellence.',
    url: 'https://xmb.xtrawrkx.com/solutions',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/solutions',
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

