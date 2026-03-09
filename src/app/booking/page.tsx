import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, CheckCircle, Star } from 'lucide-react'
import BookingForm from '@/components/booking/BookingForm'

export const metadata: Metadata = {
  title: '预约咨询',
  description: '预约智云咨询资深顾问，获取免费的 60 分钟业务诊断咨询服务。',
}

const benefits = [
  '资深顾问一对一服务，精准匹配您的行业背景',
  '60 分钟深度业务诊断，识别核心痛点与机会',
  '提供初步解决方案框架和行动建议',
  '无任何费用，无任何隐性义务',
]

const contacts = [
  {
    icon: Phone,
    label: '电话咨询',
    value: '400-888-0001',
    sub: '周一至周五 9:00-18:00',
  },
  {
    icon: Mail,
    label: '邮件咨询',
    value: 'contact@zhiyun.com',
    sub: '1 个工作日内回复',
  },
  {
    icon: MapPin,
    label: '北京总部',
    value: '朝阳区建国路 88 号',
    sub: 'SOHO 现代城 B 座 1801',
  },
  {
    icon: Clock,
    label: '服务时间',
    value: '周一至周五',
    sub: '09:00 - 18:00',
  },
]

const faqs = [
  {
    q: '首次咨询真的完全免费吗？',
    a: '是的，首次 60 分钟诊断咨询完全免费，无需信用卡，也不会有任何隐性费用。',
  },
  {
    q: '咨询以什么形式进行？',
    a: '可以选择线上视频会议、电话或北京/上海/广州线下面谈，我们灵活配合您的需求。',
  },
  {
    q: '咨询后是否必须签合同？',
    a: '完全没有义务。首次咨询纯粹是帮助您了解问题和可能的解决方向，是否推进合作由您决定。',
  },
  {
    q: '如何选择合适的服务类型？',
    a: '如果不确定选哪类服务，可以在表单中选择"其他"并描述您的情况，我们会帮助您判断最适合的方向。',
  },
]

export default function BookingPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            顾问在线 · 立即预约
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            开启免费咨询之旅
          </h1>
          <p className="text-blue-100/80 text-lg max-w-xl mx-auto">
            填写下方表单，1 个工作日内资深顾问将与您确认咨询时间。首次咨询完全免费。
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">填写预约信息</h2>
              <p className="text-gray-500 text-sm mb-8">
                请完整填写以下内容，帮助我们为您安排最合适的顾问。所有信息严格保密。
              </p>
              <BookingForm />
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4">免费咨询包含什么</h3>
              <div className="space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Review snippet */}
            <div className="card p-6 bg-primary-50 border-primary-100">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed mb-3">
                "仅仅一次免费咨询，就帮我们厘清了困扰多年的战略方向问题。团队非常专业，完全超出预期。"
              </p>
              <p className="text-xs font-semibold text-gray-700">— 李总，某科技公司 CEO</p>
            </div>

            {/* Contact Info */}
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4">其他联系方式</h3>
              <div className="space-y-4">
                {contacts.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <c.icon size={15} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{c.label}</p>
                      <p className="text-sm font-semibold text-gray-800">{c.value}</p>
                      <p className="text-xs text-gray-400">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">常见问题</h2>
            <p className="text-gray-500">关于预约咨询您可能想了解的</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
