import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Heart, Lightbulb, Target, Linkedin, Mail } from 'lucide-react'
import { teamMembers } from '@/data/team'

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解智云咨询的发展历程、团队成员、公司文化与核心价值观。',
}

const values = [
  {
    icon: Target,
    title: '结果导向',
    description: '我们不做空洞的报告，每一个项目都以可量化的业务成果为交付目标。',
  },
  {
    icon: Heart,
    title: '客户至上',
    description: '客户的成功才是我们的成功。我们视每一位客户为长期合作伙伴，而非单纯的业务关系。',
  },
  {
    icon: Lightbulb,
    title: '创新思维',
    description: '面对复杂挑战，我们坚持以跨行业视角和创新方法论，提供超预期的解决方案。',
  },
  {
    icon: Award,
    title: '专业诚信',
    description: '以专业能力赢得信任，以诚信态度维护关系。这是我们 15 年屹立不倒的根基。',
  },
]

const milestones = [
  { year: '2010', event: '智云咨询在北京正式成立，聚焦战略规划咨询业务' },
  { year: '2013', event: '拓展至上海、广州，完成团队扩充至 20 人' },
  { year: '2016', event: '推出数字化转型咨询服务，率先布局企业数字化赛道' },
  { year: '2019', event: '服务客户突破 200 家，荣获年度最佳咨询机构奖项' },
  { year: '2022', event: '拓展东南亚业务，在新加坡设立海外服务中心' },
  { year: '2026', event: '累计服务 500+ 企业，成为中国领先的综合管理咨询机构' },
]

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-mesh overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 mb-6">
            关于我们
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            我们相信，每一家优秀企业
            <br />
            <span className="text-blue-300">背后都有专业顾问的力量</span>
          </h1>
          <p className="text-blue-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            智云咨询成立于 2010 年，是一家专注于中国企业发展的综合管理咨询机构，致力于为企业提供专业、务实、可落地的战略与管理咨询服务。
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                公司故事
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                15 年专注，只为帮助企业走得更稳更远
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  智云咨询由一群对中国商业充满热情的资深顾问共同创立。我们深知中国企业在快速变革中所面临的挑战——战略模糊、管理低效、数字化滞后……这些问题困扰着大量有志于长远发展的企业家。
                </p>
                <p>
                  我们的初心很简单：通过专业的咨询服务，帮助优秀的中国企业走得更稳、更快、更远。15 年来，我们服务了超过 500 家企业，从行业独角兽到区域领军者，每一个成功案例都让我们更加坚信这条路的意义。
                </p>
                <p>
                  今天的智云咨询，已经成长为一支拥有 50+ 名顶尖顾问的专业团队。我们不仅在北京、上海、广州设有服务中心，更在新加坡建立了海外据点，支持中国企业的全球化布局。
                </p>
              </div>
              <div className="mt-8">
                <Link href="/booking" className="btn-primary">
                  预约与我们交流
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            {/* Timeline */}
            <div id="milestones" className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 h-10 bg-primary-100 my-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-bold text-primary-600 block mb-1">{m.year}</span>
                    <p className="text-sm text-gray-600 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              核心价值观
            </div>
            <h2 className="section-title">是什么驱动着我们前行</h2>
            <p className="section-subtitle">
              价值观不只是墙上的口号，而是我们每天工作的行为准则
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center group hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <v.icon size={24} className="text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              核心团队
            </div>
            <h2 className="section-title">与顶尖专家合作</h2>
            <p className="section-subtitle">
              我们的顾问团队汇聚了来自一流咨询公司、科技巨头和学术机构的精英
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="card p-6 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-primary-600 font-medium">{member.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{member.department}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.expertise.slice(0, 3).map((exp) => (
                    <span key={exp} className="badge bg-gray-100 text-gray-600 text-xs">
                      {exp}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                    aria-label="邮件"
                  >
                    <Mail size={16} />
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="careers" className="py-20 bg-primary-900">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">加入智云，共创未来</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            我们正在寻找对商业充满热情、拥有专业能力的同路人。如果你相信咨询的力量，欢迎加入我们。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              预约咨询
            </Link>
            <a href="mailto:hr@zhiyun.com" className="btn-ghost">
              查看职位空缺
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
