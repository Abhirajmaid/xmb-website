import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Xtrawrkx Manufacturing Business for manufacturing solutions. Get a quote, discuss your project, or learn more about our services. Located in Bengaluru, India. Email: contact@xtrawrkx.com, Phone: +91 77950 81665',
  keywords: ['contact Xtrawrkx', 'manufacturing quote', 'get quote', 'contact manufacturing company', 'Bengaluru manufacturing'],
  openGraph: {
    title: 'Contact Us | Xtrawrkx Manufacturing Business',
    description: 'Contact Xtrawrkx Manufacturing Business for manufacturing solutions. Get a quote or discuss your project.',
    url: 'https://xmb.xtrawrkx.com/contact',
  },
  alternates: {
    canonical: 'https://xmb.xtrawrkx.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

