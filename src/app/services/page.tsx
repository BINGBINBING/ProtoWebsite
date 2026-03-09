import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Settings, Zap, TrendingUp, Users, Shield, CheckCircle, ArrowRight, Clock, DollarSign, type LucideProps } from 'lucide-react'
import { services } from '@/data/services'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

export const metadata: Metadata = {
  title: '咨询服务',
  description: '智云咨询提供战略规划、管理效能、数字化转型、财务顾问、人才发展、合规风控等全方位企业管理咨询服务。',
}

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>

const iconMap: Record<string, LucideIcon> = {
  Target,
  Settings,
  Zap,
  TrendingUp,
  Users,
  Shield,
}

const processSteps = [
  {
    step: '01',
    title: '需求诊断',
    description: '通过深度访谈和文件审阅，全面了解企业现状与核心诉求，明确项目目标与范围。',
  },
  {
    step: '02',
    title: '方案设计',
    description: '基于诊断结论，针对性地设计解决方案框架，制定清晰的项目交付物和时间计划。',
  },
  {
    step: '03',
    title: '落地执行',
    description: '与客户团队紧密协作，推动方案落地实施，提供全程辅导和问题解答。',
  },
  {
    step: '04',
    title: '成果验收',
    description: '对照项目目标进行成果评估，确保交付价值可量化，并提供后续支持计划。',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 mb-6">
            咨询服务
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            全周期企业管理咨询
          </h1>
          <p className="text-blue-100/80 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            无论您面临战略迷茫、管理低效、数字化转型还是融资困局，智云咨询都有专属解决方案，助您突破瓶颈。
          </p>
          <Link href="/booking" className="btn-primary text-base inline-flex items-center gap-2">
            预约免费咨询
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">我们的咨询服务</h2>
            <p className="section-subtitle">
              六大核心服务领域，覆盖企业发展各阶段的关键管理需求
            </p>
          </div>

          <div className="space-y-10">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Target
              const isEven = idx % 2 === 0
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-10 items-center scroll-mt-24 ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                        <Icon size={22} className="text-primary-600" />
                      </div>
                      {service.popular && (
                        <span className="badge bg-gold-400/10 text-gold-600 border border-gold-400/20">
                          热门
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <DollarSign size={15} className="text-primary-500" />
                        <span>参考价格：<strong className="text-gray-800">{service.price}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock size={15} className="text-primary-500" />
                        <span>周期：<strong className="text-gray-800">{service.duration}</strong></span>
                      </div>
                    </div>

                    <Link href="/booking" className="btn-primary inline-flex items-center gap-2 text-sm">
                      预约该服务
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Visual Card */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100 rounded-3xl p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                          <Icon size={20} className="text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900">{service.title}</h4>
                      </div>
                      <div className="space-y-3">
                        {service.features.map((feat, fi) => (
                          <div key={feat} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                            <span className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0">
                              {fi + 1}
                            </span>
                            <span className="text-sm text-gray-700">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              服务流程
            </div>
            <h2 className="section-title">我们如何合作</h2>
            <p className="section-subtitle">
              清晰透明的四步合作流程，确保每个项目高质量交付
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative">
                <div className="card p-6 text-center h-full">
                  <div className="text-4xl font-bold text-primary-100 mb-4">{step.step}</div>
                  <h3 className="font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-200 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">不确定需要哪种服务？</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            我们的资深顾问将免费为您提供 60 分钟的业务诊断咨询，帮助您找到最合适的切入点。
          </p>
          <Link href="/booking" className="btn-primary text-base inline-flex items-center gap-2">
            预约免费诊断
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
