import Link from 'next/link'
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            顾问正在线 · 立即预约
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            开启您的企业
            <br />
            <span className="text-blue-300">增长加速之旅</span>
          </h2>
          <p className="text-blue-100/80 text-lg mb-10 leading-relaxed">
            首次咨询免费。我们的资深顾问将为您提供 60 分钟的深度业务诊断，
            帮助您识别核心痛点，制定初步行动方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary text-base group">
              <Calendar size={18} className="mr-2" />
              预约免费咨询
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="btn-ghost text-base">
              <MessageSquare size={18} className="mr-2" />
              了解服务详情
            </Link>
          </div>
          <p className="text-blue-200/60 text-sm mt-6">
            无需信用卡 · 无任何费用 · 资深顾问一对一服务
          </p>
        </div>
      </div>
    </section>
  )
}
