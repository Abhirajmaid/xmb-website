import { Metadata } from 'next';
import { getSolutionById, getAllSolutionIds } from '@/data/solutions';

type Props = {
  params: { solutionId: string };
};

export async function generateStaticParams() {
  return getAllSolutionIds().map((id) => ({
    solutionId: id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = getSolutionById(params.solutionId);

  if (!solution) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: solution.title,
    description: solution.description,
    keywords: [
      solution.title.toLowerCase(),
      'manufacturing solution',
      solution.category,
      ...solution.features.map((f) => f.title.toLowerCase()),
    ],
    openGraph: {
      title: `${solution.title} | Xtrawrkx Manufacturing Business`,
      description: solution.description,
      url: `https://xmb.xtrawrkx.com/solutions/${params.solutionId}`,
      images: [
        {
          url: solution.heroImage,
          width: 1200,
          height: 630,
          alt: solution.title,
        },
      ],
    },
    alternates: {
      canonical: `https://xmb.xtrawrkx.com/solutions/${params.solutionId}`,
    },
  };
}

export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

