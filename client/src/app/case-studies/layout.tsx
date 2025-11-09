import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore our manufacturing case studies and success stories. Learn how Xtrawrkx Manufacturing has helped clients achieve manufacturing excellence across various industries.',
  keywords: ['manufacturing case studies', 'success stories', 'manufacturing projects', 'client testimonials'],
  openGraph: {
    title: 'Case Studies | Xtrawrkx Manufacturing Business',
    description: 'Explore our manufacturing case studies and success stories.',
    url: 'https://xmb.xtrawrkx.com/case-studies',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

