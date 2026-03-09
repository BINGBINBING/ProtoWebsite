import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: '1',
    name: '张建国',
    company: '远大制造集团',
    title: 'CEO',
    initials: '张',
    color: 'from-blue-500 to-primary-600',
    content:
      '智云咨询团队用三个月时间帮我们完成了整个集团的战略重组。他们不仅提供了清晰的战略框架，更真正参与到执行落地环节，这是让我们最为感动的地方。项目结束后一年，公司营收增长了 45%。',
    rating: 5,
    serviceUsed: '战略规划咨询',
  },
  {
    id: '2',
    name: '林思颖',
    company: '新零售科技有限公司',
    title: 'COO',
    initials: '林',
    color: 'from-violet-500 to-purple-600',
    content:
      '在数字化转型这件事上，我们曾经走了很多弯路。遇到智云团队后，他们帮助我们从战略层理清了转型方向，避免了重复投资，最终在 6 个月内完成了核心系统的升级迭代。',
    rating: 5,
    serviceUsed: '数字化转型',
  },
  {
    id: '3',
    name: '陈明华',
    company: '华盛医疗器械',
    title: '创始人',
    initials: '陈',
    color: 'from-emerald-500 to-teal-600',
    content:
      '智云在人才管理方面给予我们的帮助是全方位的。从人才盘点、薪酬体系优化到管理层领导力发展，整套方案非常系统。现在公司关键人才留存率提升了 30 个百分点。',
    rating: 5,
    serviceUsed: '人才发展咨询',
  },
  {
    id: '4',
    name: '王丽华',
    company: '永泰消费集团',
    title: '战略总监',
    initials: '王',
    color: 'from-orange-500 to-red-500',
    content:
      '我们进入东南亚市场之前，找到了智云咨询做市场进入战略。他们的调研非常扎实，对当地市场的洞察也很深入，帮我们规避了很多潜在风险，让我们的出海之旅顺利了许多。',
    rating: 5,
    serviceUsed: '战略规划咨询',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            客户评价
          </div>
          <h2 className="section-title">他们选择了智云</h2>
          <p className="section-subtitle">
            来自各行业企业领导者的真实评价，见证我们共创的价值
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="card p-7 relative">
              <Quote size={32} className="text-primary-100 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t.content}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.title} · {t.company}
                  </p>
                </div>
                <span className="ml-auto badge bg-primary-50 text-primary-700 text-xs">
                  {t.serviceUsed}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
