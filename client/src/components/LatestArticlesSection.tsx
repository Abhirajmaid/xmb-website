"use client";

import { useState } from "react";
import {
  getArticlesByCategory,
  getFeaturedArticle,
  getSidebarArticles,
  getBottomGridArticles,
  getCategoryColor,
  type Article,
} from "@/data/articles";
import Button from "./Button";

export default function LatestArticlesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Case Study",
    "Blog",
    "Press",
    "XMBVidz",
    "gaZETTe",
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Get filtered articles based on active category
  const filteredArticles = getArticlesByCategory(activeCategory);

  let featuredArticle: Article | undefined;
  let sidebarArticles: Article[];
  let bottomGridArticles: Article[];

  if (activeCategory === "All") {
    featuredArticle = getFeaturedArticle();
    sidebarArticles = getSidebarArticles();
    bottomGridArticles = getBottomGridArticles();
  } else {
    // For filtered categories, use first article as featured and distribute the rest
    const availableArticles = filteredArticles;
    featuredArticle = availableArticles[0];

    if (availableArticles.length > 1) {
      const remainingArticles = availableArticles.slice(1);
      sidebarArticles = remainingArticles.slice(0, 3);
      bottomGridArticles = remainingArticles.slice(3, 7);
    } else {
      sidebarArticles = [];
      bottomGridArticles = [];
    }
  }

  return (
    <section className="bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 py-20 px-6 relative overflow-hidden">
      {/* Glass background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-40 w-96 h-96 bg-green-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-wide text-sm font-medium mb-6 backdrop-blur-sm bg-blue-50/50 px-6 py-2 rounded-full w-fit mx-auto border border-blue-200/50">
            LATEST INSIGHTS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Latest from XMB
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay updated with our latest insights, case studies, and innovations
            in manufacturing excellence. Discover how we're shaping the future
            of industry.
          </p>
          <Button variant="primary" size="lg" showArrow={true} href="/articles">
            View All Articles
          </Button>
        </div>

        {/* Category Filters */}
        <div className="backdrop-blur-xl bg-white/30 border border-white/30 rounded-2xl p-6 shadow-2xl shadow-black/10 mb-12 relative">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl"></div>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={activeCategory === category ? "primary" : "secondary"}
                size="md"
                className={`transition-all duration-300 hover:scale-105 ${
                  activeCategory === category ? "shadow-lg" : "hover:shadow-md"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content Grid - Zetwerk Style */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article - Large Left Side */}
          {featuredArticle && (
            <div className="lg:col-span-1">
              <article className="relative group cursor-pointer backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl overflow-hidden shadow-2xl shadow-black/10 hover:bg-white/30 transition-all duration-300">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-3xl"></div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category badges */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${getCategoryColor(
                        featuredArticle.category
                      )} text-white px-3 py-1 rounded text-sm font-medium`}
                    >
                      {featuredArticle.category}
                    </span>
                  </div>
                  {featuredArticle.subcategory && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
                        {featuredArticle.subcategory}
                      </span>
                    </div>
                  )}

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 leading-tight">
                      {featuredArticle.title}
                    </h3>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Right Side Articles - Stacked */}
          <div className="space-y-6">
            {sidebarArticles && sidebarArticles.length > 0 ? (
              sidebarArticles.map((article) => (
                <article key={article.id} className="group cursor-pointer">
                  <div className="flex gap-4">
                    {/* Article Image */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-1 left-1">
                        <span
                          className={`${getCategoryColor(
                            article.category
                          )} text-white px-2 py-0.5 rounded text-xs font-medium`}
                        >
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight text-lg">
                        {article.title}
                      </h4>
                      <p
                        className="text-gray-600 text-sm mb-2 leading-relaxed overflow-hidden text-ellipsis"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {article.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-medium mr-2">
                          XMB
                        </span>
                        <span>By {article.author}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="flex items-center justify-center h-48 text-gray-500">
                <p>No articles available in this category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Articles Row - Zetwerk Style */}
        {bottomGridArticles && bottomGridArticles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomGridArticles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Category badges */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`${getCategoryColor(
                        article.category
                      )} text-white px-2 py-1 rounded text-xs font-medium`}
                    >
                      {article.category}
                    </span>
                  </div>
                  {article.subcategory && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                        {article.subcategory}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight text-lg">
                    {article.title}
                  </h4>
                  <p
                    className="text-gray-600 text-sm leading-relaxed overflow-hidden text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {article.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 pt-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-medium mr-2">
                      XMB
                    </span>
                    <span>By {article.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
