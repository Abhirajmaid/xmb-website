import { Metadata } from "next";
import { getPostBySlug, blogPosts } from "@/data/blogs";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      ...post.category,
      "manufacturing",
      "industry insights",
    ],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: `${post.title} | Xtrawrkx Manufacturing Business`,
      description: post.excerpt,
      url: `https://xmb.xtrawrkx.com/blog/${params.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://xmb.xtrawrkx.com/blog/${params.slug}`,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
