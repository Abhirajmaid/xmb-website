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
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center"
            alt="Manufacturing Insights Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Manufacturing Insights
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore the latest trends, technologies, and best practices in
              modern manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Filter Section */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                LATEST ARTICLES
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleFilterClick("ALL")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === "ALL"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white/80 text-gray-600 hover:bg-white hover:shadow-md"
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
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/80 text-gray-600 hover:bg-white hover:shadow-md"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="flex flex-col justify-center">
                    {/* Category Tags and Date */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {post.category.map((cat) => (
                        <span
                          key={cat}
                          className="px-4 py-2 bg-blue-100 text-blue-600 text-sm rounded-full font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                      <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight hover:text-blue-600 transition-colors duration-300">
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
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
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
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
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

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
