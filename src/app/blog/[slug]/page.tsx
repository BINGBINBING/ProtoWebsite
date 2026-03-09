import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, BookOpen } from 'lucide-react'
import { blogPosts, getPostBySlug } from '@/data/blogPosts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: '文章未找到' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  // Parse simple markdown-like content to render sections
  const contentSections = post.content
    .trim()
    .split('\n')
    .filter((line) => line.trim() !== '')

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft size={14} />
              返回博客
            </Link>
            <span className="block badge bg-primary-600 text-white mb-3">{post.category}</span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Article Content */}
          <article className="lg:col-span-2">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <div>
                  <span className="font-medium text-gray-700">{post.author.name}</span>
                  <span className="text-gray-400 text-xs block">{post.author.title}</span>
                </div>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.publishedAt).toLocaleDateString('zh-CN')}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime} 分钟阅读
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} />
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>
              <div className="space-y-4">
                {contentSections.map((line, i) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={i} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{line.slice(2)}</h1>
                  }
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-100">{line.slice(3)}</h2>
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{line.slice(4)}</h3>
                  }
                  if (line.startsWith('- **')) {
                    const match = line.match(/- \*\*(.+?)\*\*(.*)/)
                    if (match) {
                      return (
                        <li key={i} className="text-gray-600 leading-relaxed ml-4">
                          <strong className="text-gray-800">{match[1]}</strong>{match[2]}
                        </li>
                      )
                    }
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i} className="text-gray-600 leading-relaxed ml-4">{line.slice(2)}</li>
                  }
                  if (/^\d+\./.test(line)) {
                    return <li key={i} className="text-gray-600 leading-relaxed ml-4 list-decimal">{line.replace(/^\d+\.\s*/, '')}</li>
                  }
                  return <p key={i} className="text-gray-600 leading-relaxed">{line}</p>
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-2">
                <Tag size={15} className="text-gray-400" />
                {post.tags.map((tag) => (
                  <span key={tag} className="badge bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Card */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{post.author.name}</h4>
                  <p className="text-primary-600 text-sm font-medium mb-2">{post.author.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* CTA */}
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">想深入了解这个话题？</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                我们的资深顾问可为您提供一对一的深度咨询，帮助解答您的具体业务问题。
              </p>
              <Link href="/booking" className="btn-primary w-full justify-center text-sm">
                预约免费咨询
              </Link>
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <div>
                <h3 className="font-bold text-gray-900 mb-4">相关文章</h3>
                <div className="space-y-4">
                  {related.map((p) => (
                    <Link key={p.id} href={`/blog/${p.slug}`} className="flex gap-3 group">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={p.coverImage} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
                          {p.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{p.readTime} 分钟阅读</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">分享文章</h3>
              <div className="flex gap-3">
                <button className="flex-1 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm text-gray-600 font-medium transition-colors flex items-center justify-center gap-2">
                  <Share2 size={14} />
                  微信
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm text-gray-600 font-medium transition-colors flex items-center justify-center gap-2">
                  <Share2 size={14} />
                  微博
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm text-gray-600 font-medium transition-colors flex items-center justify-center gap-2">
                  <Share2 size={14} />
                  链接
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
