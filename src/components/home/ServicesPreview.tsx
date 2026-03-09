import Link from 'next/link'
import { Target, Settings, Zap, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Target,
  Settings,
  Zap,
  TrendingUp,
  Users,
  Shield,
}

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            咨询服务
          </div>
          <h2 className="section-title">全周期企业管理咨询</h2>
          <p className="section-subtitle">
            从战略规划到执行落地，智云咨询提供覆盖企业发展全阶段的专业咨询服务
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Target
            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group card p-6 hover:-translate-y-1 transition-all duration-300 relative"
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 badge bg-gold-400/10 text-gold-600 border border-gold-400/20">
                    热门
                  </span>
                )}
                <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={22} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <span>{service.price}</span>
                  <span>{service.duration}</span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            查看全部服务
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
