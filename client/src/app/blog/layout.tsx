import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Manufacturing insights, industry trends, and expert articles on precision manufacturing, Industry 4.0, quality control, supply chain optimization, and manufacturing innovation.',
  keywords: ['manufacturing blog', 'industry insights', 'manufacturing trends', 'Industry 4.0', 'manufacturing articles', 'precision manufacturing'],
  openGraph: {
    title: 'Blog | Xtrawrkx Manufacturing Business',
    description: 'Manufacturing insights, industry trends, and expert articles on precision manufacturing and Industry 4.0.',
    url: 'https://xmb.xtrawrkx.com/blog',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

