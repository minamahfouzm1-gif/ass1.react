import data from "../../Data/data.json"
import { useState } from "react";
export function About() {
  console.log(data);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const handlSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };
  const handleCategory = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };
  const postsPerPage = 6;
  const posts = data.posts.filter((post) => {
    const matchesSearch = post.title.includes(search);
    const matchesCategory = category === "" || post.category === category;

    return matchesSearch && matchesCategory;
  });
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);
  
  return (
    <>
      <main className="flex-grow pt-20">
        <div className="min-h-screen bg-[#0a0a0a]">
          <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="section-label inline-flex items-center gap-2 mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                مدونتنا
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                استكشف <span className="gradient-text">مقالاتنا</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </div>
          <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative w-full md:w-80">
                  <input
                    value={search}
                    onChange={(e) => handlSearch(e.target.value)}
                    placeholder="ابحث فى المقالات"
                    className="input-dark w-full px-5 py-3 pr-12 text-white placeholder:text-neutral-500 border border-[#333333] focus:border-orange-500
                    focus:outline-none focus:ring-1 focus:ring-orange-500"
                    type="text"
                    fdprocessedid="nsg4f9"
                  />
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => handleCategory("")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      category === ""
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                    }`}
                  >
                    جميع المقالات
                  </button>

                  <button
                    onClick={() => handleCategory("إضاءة")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      category === "إضاءة"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                    }`}
                  >
                    إضاءة
                  </button>

                  <button
                    onClick={() => handleCategory("بورتريه")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      category === "بورتريه"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                    }`}
                  >
                    بورتريه
                  </button>

                  <button
                    onClick={() => handleCategory("مناظر طبيعية")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      category === "مناظر طبيعية"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                    }`}
                  >
                    مناظر طبيعية
                  </button>

                  <button
                    onClick={() => handleCategory("تقنيات")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      category === "تقنيات"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                    }`}
                  >
                    تقنيات
                  </button>

                  <button
                    onClick={() => handleCategory("معدات")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      category === "معدات"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                    }`}
                  >
                    معدات
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-neutral-400">
                عرض <span className="font-bold text-white">{posts.length}</span>{" "}
                مقالات
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-orange-500 text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-orange-500 text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="group card overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      className="block"
                      href={`/descrip/${post.id}`}
                      data-discover="true"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          src={post.image}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {post.readTime}
                          </span>

                          <span className="w-1 h-1 bg-neutral-600 rounded-full" />

                          <span>{post.date}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                          <div className="flex items-center gap-3">
                            <img
                              alt={post.author.name}
                              className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                              src={post.author.avatar}
                            />

                            <div>
                              <p className="text-sm font-medium text-white">
                                {post.author.name}
                              </p>

                              <p className="text-xs text-neutral-500">
                                {post.author.role}
                              </p>
                            </div>
                          </div>

                          <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                            <svg
                              className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
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
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {currentPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="group bg-[#161616] rounded-2xl border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      className="flex flex-col md:flex-row"
                      href={`/descrip/${post.id}`}
                      data-discover="true"
                    >
                      <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                        <img
                          alt={post.title}
                          src={post.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />

                        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />
                      </div>

                      <div className="flex-1 p-6 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                            {post.category}
                          </span>

                          <span className="flex items-center gap-1 text-sm text-neutral-500">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {post.readTime}
                          </span>

                          <span className="flex items-center gap-1 text-sm text-neutral-500">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {post.date}
                          </span>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-3">
                            <img
                              alt={post.author.name}
                              src={post.author.avatar}
                              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                            />

                            <div>
                              <p className="text-sm font-medium text-white">
                                {post.author.name}
                              </p>

                              <p className="text-xs text-neutral-500">
                                {post.author.role}
                              </p>
                            </div>
                          </div>

                          <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                            اقرأ المقال
                            <svg
                              className="w-4 h-4 rotate-180"
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
                          </span>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            )}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
              {/* <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                  }`}
                >
                  1
                </button>
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === 2
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                  }`}
                >
                  2
                </button>
                <button
                  onClick={() => setCurrentPage(3)}
                  className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === 3
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                  }`}
                >
                  3
                </button>
                <button
                  onClick={() => setCurrentPage(4)}
                  className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === 4
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                  }`}
                >
                  4
                </button>
                <button
                  onClick={() => setCurrentPage(5)}
                  className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === 5
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                  }`}
                >
                  5
                </button>
              </div> */}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                fdprocessedid="ncltjr"
              >
                <svg
                  className="w-5 h-5 rotate-180"
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
              </button>
            </div>
            <p className="text-center text-neutral-500 mt-4 text-sm">
              صفحة 1 من 5
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
