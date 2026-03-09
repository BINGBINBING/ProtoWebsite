const stats = [
  { value: '15+', label: '年行业经验', description: '深耕企业管理咨询领域超过 15 年' },
  { value: '500+', label: '服务企业', description: '累计服务覆盖各行业领军企业' },
  { value: '98%', label: '客户满意度', description: '持续高水准服务赢得客户信任' },
  { value: '50+', label: '顶尖顾问', description: '汇聚各领域具有丰富实战经验的专家' },
  { value: '120+', label: '成功案例', description: '可量化价值驱动的项目交付记录' },
  { value: '30+', label: '覆盖城市', description: '全国主要城市均有服务团队' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">数字印证实力</h2>
          <p className="text-blue-200">每一个数字背后，都是我们与客户共创价值的见证</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-blue-300 font-semibold text-sm mb-2">{stat.label}</div>
              <div className="text-blue-100/50 text-xs leading-relaxed hidden lg:block">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
