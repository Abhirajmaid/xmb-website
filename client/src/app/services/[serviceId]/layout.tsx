import { Metadata } from "next";
import { getServiceById, getAllServiceIds } from "@/data/services";

type Props = {
  params: { serviceId: string };
};

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({
    serviceId: id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceById(params.serviceId);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      "manufacturing service",
      ...service.subServices.map((s) => s.title.toLowerCase()),
    ],
    openGraph: {
      title: `${service.title} | Xtrawrkx Manufacturing Business`,
      description: service.description,
      url: `https://xmb.xtrawrkx.com/services/${params.serviceId}`,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    alternates: {
      canonical: `https://xmb.xtrawrkx.com/services/${params.serviceId}`,
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
