"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getRecentPosts, BlogPost } from "@/data/blogs";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    const foundPost = getPostBySlug(params.slug);
    if (!foundPost) {
      notFound();
    }
    setPost(foundPost);
    setRecentPosts(getRecentPosts(3).filter((p) => p.id !== foundPost.id));
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = (platform: string) => {
    setNotificationMessage(`Sharing on ${platform}...`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/60"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-blue-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white">{post.title}</span>
            </div>
          </nav>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            {post.category.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-blue-600/80 backdrop-blur-sm text-white text-sm rounded-full font-medium border border-blue-400/30"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>

          {/* Author and Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full mr-4 border-2 border-white/20"
              />
              <div>
                <p className="font-semibold text-white text-lg">
                  {post.author.name}
                </p>
                <p className="text-blue-200">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-blue-200">
              <span>{formatDate(post.publishedAt)}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Article Content */}
          <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 md:p-12 shadow-xl mb-16">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-100 text-blue-600 text-sm rounded-full font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Share this article
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleShare("LinkedIn")}
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </button>

              <button
                onClick={() => handleShare("Twitter")}
                className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Twitter
              </button>

              <button
                onClick={() => handleShare("Email")}
                className="flex items-center px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </button>
            </div>
          </div>

          {/* Related Articles */}
          {recentPosts.length > 0 && (
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Related Articles
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <article className="group">
                      <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden mb-4">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {relatedPost.category.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h4>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {relatedPost.excerpt}
                      </p>

                      <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                        <img
                          src={relatedPost.author.avatar}
                          alt={relatedPost.author.name}
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span className="text-xs text-gray-600">
                          {relatedPost.author.name}
                        </span>
                        <span className="text-xs text-gray-400 ml-2">
                          • {relatedPost.readTime} min read
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with XMB to unlock manufacturing excellence. Our expert team
            is ready to discuss your project requirements and deliver customized
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors shadow-lg"
            >
              GET QUOTE NOW
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white hover:text-blue-900 transition-colors"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
