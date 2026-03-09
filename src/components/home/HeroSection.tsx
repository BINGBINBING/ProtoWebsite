"use client"

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, CheckCircle, MessageSquare, X } from 'lucide-react'

const highlights = [
  '15 年行业深耕',
  '500+ 服务客户',
  '专业顾问团队',
  '全程落地陪伴',
]

export default function HeroSection() {
  const [showTestimonial, setShowTestimonial] = useState(true)

  return (
    <section className="relative min-h-screen bg-mesh flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom relative z-10 py-24 pt-32 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-200">2026 年度最佳咨询机构</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              助力企业
              <span className="block text-gradient bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                战略破局
              </span>
              实现可持续增长
            </h1>

            <p className="text-lg text-blue-100/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              智云咨询汇聚顶尖行业专家，以深度洞察与务实方法论，帮助企业应对复杂挑战，打造核心竞争优势，驱动长期价值创造。
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-blue-200">
                  <CheckCircle size={15} className="text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/booking" className="btn-primary text-base group">
                预约免费咨询
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="btn-ghost text-base">
                了解服务详情
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:flex justify-center animate-fade-in">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-96">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: '15+', label: '年行业经验' },
                    { value: '500+', label: '服务企业数' },
                    { value: '98%', label: '客户满意度' },
                    { value: '50+', label: '顶尖顾问' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-blue-200 text-sm text-center mb-4">我们服务的行业</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['制造业', '科技', '金融', '零售', '医疗', '教育'].map((ind) => (
                      <span key={ind} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white border border-white/20">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating testimonial */}
              {showTestimonial ? (
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl max-w-56 transition-all duration-300">
                  <button
                    type="button"
                    aria-label="关闭客户评价"
                    onClick={() => setShowTestimonial(false)}
                    className="absolute top-2 right-2 h-6 w-6 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <X size={14} />
                  </button>
                  <div className="flex items-start gap-3 pr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-blue-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      王
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">王总</p>
                      <p className="text-xs text-gray-500 mb-1.5">某科技公司 CEO</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        &ldquo;智云团队的战略建议让公司营收提升了 40%&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowTestimonial(true)}
                  className="absolute -bottom-4 -right-2 bg-white/95 border border-gray-200 rounded-full px-3 py-2 shadow-lg hover:shadow-xl transition-all text-xs text-gray-700 flex items-center gap-1.5"
                >
                  <MessageSquare size={14} className="text-primary-600" />
                  客户评价
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs">向下滚动</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
