import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, User } from 'lucide-react'
import { getFeaturedPosts } from '@/data/blogPosts'

export default function BlogPreview() {
  const posts = getFeaturedPosts()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              博客洞察
            </div>
            <h2 className="section-title mb-2">最新行业洞察</h2>
            <p className="text-gray-500">深度解析商业趋势，赋能企业前瞻决策</p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            查看全部文章
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge bg-white text-primary-700 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <User size={12} />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{post.readTime} 分钟阅读</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
