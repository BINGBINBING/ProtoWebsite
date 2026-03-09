import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, User, ArrowRight, Search } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'
import type { BlogCategory } from '@/types'

export const metadata: Metadata = {
  title: '博客洞察',
  description: '深度解析商业趋势、管理创新与行业动态，赋能企业前瞻决策。',
}

const categories: BlogCategory[] = [
  '战略洞察',
  '管理咨询',
  '数字化转型',
  '行业动态',
  '案例分析',
  '人才发展',
]

export default function BlogPage() {
  const featured = blogPosts[0]
  const restPosts = blogPosts.slice(1)

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container-custom">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              博客洞察
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              深度洞察 · 前瞻思考
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              由智云咨询资深顾问撰写，聚焦战略规划、管理效能、数字化转型等热点议题，助您洞察趋势，先行一步。
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜索文章..."
              className="input-field pl-10 text-sm"
              readOnly
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary-600 text-white">
              全部
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group mb-12 block">
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <span className="absolute top-4 left-4 badge bg-primary-600 text-white">
                  {featured.category}
                </span>
                <span className="absolute top-4 right-4 badge bg-gold-500 text-white">
                  精选
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="badge bg-gray-100 text-gray-600">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <User size={13} />
                      <span>{featured.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} />
                      <span>{featured.readTime} 分钟阅读</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    阅读全文 <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 badge bg-white shadow-sm text-primary-700">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-gray-400">#{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <User size={11} /> {post.author.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {post.readTime} 分钟
                    </span>
                  </div>
                  <span>{new Date(post.publishedAt).toLocaleDateString('zh-CN')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="btn-secondary">加载更多文章</button>
        </div>
      </div>
    </div>
  )
}
