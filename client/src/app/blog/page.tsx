"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  blogPosts,
  getPostsByCategory,
  getFeaturedPosts,
  getAllCategories,
} from "@/data/blogs";
import PageHero from "@/components/PageHero";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  // Get blog data
  const featuredPosts = getFeaturedPosts();
  const allCategories = getAllCategories();
  const filteredPosts = getPostsByCategory(activeFilter);

  // Functions for button interactions
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setNotificationMessage(`Filtered to show ${filter} articles`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleReadMore = (slug: string, title: string) => {
    setNotificationMessage(`Opening article: ${title}`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-brand-success text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      {/* Hero Section */}
      <PageHero
        title="Manufacturing Insights"
        subtitle="Explore the latest trends, technologies, and best practices in modern manufacturing"
        backgroundImage="/images/hero4.jpg"
        backgroundAlt="Manufacturing Insights Background"
        variant="full"
      />

      {/* Blog Content Section */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <p className="text-brand-primary uppercase tracking-wide text-sm font-bold mb-6 bg-brand-light/40 px-8 py-3 rounded-full border border-brand-light/50">
                ✨ LATEST ARTICLES
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleFilterClick("ALL")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === "ALL"
                    ? "bg-brand-primary text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-600 hover:shadow-md"
                }`}
              >
                ALL
              </button>
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterClick(category.toUpperCase())}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.toUpperCase()
                      ? "bg-brand-primary text-white shadow-lg"
                      : "bg-white border border-gray-200 text-gray-600 hover:shadow-md"
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          {featuredPosts.length > 0 && (
            <div className="mb-20">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <div
                  key={post.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                    index > 0 ? "mt-16" : ""
                  }`}
                >
                  {/* Article Image */}
                  <div className="relative group">
                    <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="flex flex-col justify-center">
                    {/* Category Tags and Date */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {post.category.map((cat) => (
                        <span
                          key={cat}
                          className="px-4 py-2 bg-brand-light/40 text-brand-primary text-sm rounded-full font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                      <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight hover:text-brand-primary transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Article Excerpt */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Author and Read Time */}
                    <div className="flex items-center mb-8">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {post.author.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {post.author.role} • {post.readTime} min read
                        </p>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div>
                      <Link
                        href={`/blog/${post.slug}`}
                        onClick={() => handleReadMore(post.slug, post.title)}
                        className="inline-flex items-center bg-brand-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Read Full Article
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* All Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Category Tags and Date */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 bg-brand-light/40 text-brand-primary text-xs rounded-full font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author and Read Time */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {formatDate(post.publishedAt)}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {post.readTime} min read
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
