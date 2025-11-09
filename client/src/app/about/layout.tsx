import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Xtrawrkx Manufacturing Business - our purpose, values, and commitment to manufacturing excellence. We are redefining manufacturing as a service-driven, resource-rich & technology-enabled ecosystem.',
  keywords: ['about Xtrawrkx', 'manufacturing company', 'our story', 'company values', 'manufacturing excellence'],
  openGraph: {
    title: 'About Us | Xtrawrkx Manufacturing Business',
    description: 'Learn about Xtrawrkx Manufacturing Business - our purpose, values, and commitment to manufacturing excellence.',
    url: 'https://xmb.xtrawrkx.com/about',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

