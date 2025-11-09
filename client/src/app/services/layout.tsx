import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive manufacturing services including sourcing & procurement, design & prototyping, manufacturing solutions, and operational consulting. End-to-end services from concept to delivery.",
  keywords: [
    "manufacturing services",
    "sourcing",
    "procurement",
    "design",
    "prototyping",
    "CNC machining",
    "assembly",
    "operational consulting",
  ],
  openGraph: {
    title: "Services | Xtrawrkx Manufacturing Business",
    description:
      "Comprehensive manufacturing services including sourcing & procurement, design & prototyping, manufacturing solutions, and operational consulting.",
    url: "https://xmb.xtrawrkx.com/services",
  },
  alternates: {
    canonical: "https://xmb.xtrawrkx.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
