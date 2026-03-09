import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, MessageCircle, Youtube } from 'lucide-react'

const footerLinks = {
  services: [
    { label: '战略规划咨询', href: '/services#strategy-consulting' },
    { label: '管理效能提升', href: '/services#management-consulting' },
    { label: '数字化转型', href: '/services#digital-transformation' },
    { label: '财务顾问服务', href: '/services#financial-advisory' },
    { label: '人才发展咨询', href: '/services#hr-consulting' },
    { label: '合规风控咨询', href: '/services#legal-compliance' },
  ],
  company: [
    { label: '关于我们', href: '/about' },
    { label: '团队介绍', href: '/about#team' },
    { label: '公司文化', href: '/about#culture' },
    { label: '加入我们', href: '/about#careers' },
    { label: '客户案例', href: '/about#cases' },
  ],
  resources: [
    { label: '博客洞察', href: '/blog' },
    { label: '知识商城', href: '/shop' },
    { label: '行业报告', href: '/shop?category=行业白皮书' },
    { label: '培训课程', href: '/shop?category=培训课程' },
    { label: '预约咨询', href: '/booking' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">智</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-tight block">智云咨询</span>
                <span className="text-gray-500 text-xs">ZhiYun Consulting</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              智云咨询成立于 2010 年，致力于为中国企业提供专业、务实、可落地的管理咨询服务。我们相信，每一家优秀的企业背后，都有专业顾问的鼎力相助。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={15} className="text-primary-400 flex-shrink-0" />
                <span>400-888-0001</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={15} className="text-primary-400 flex-shrink-0" />
                <span>contact@zhiyun.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span>北京市朝阳区建国路 88 号 SOHO 现代城 B 座 1801 室</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">咨询服务</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">资源</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-3">订阅行业洞察</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="您的邮箱"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500"
                />
                <button className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors font-medium whitespace-nowrap">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 智云咨询有限公司. 保留所有权利. |{' '}
            <Link href="/privacy" className="hover:text-gray-300">隐私政策</Link>
            {' '}|{' '}
            <Link href="/terms" className="hover:text-gray-300">服务条款</Link>
            {' '}| 京ICP备XXXXXXXX号
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-primary-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="微信" className="text-gray-500 hover:text-primary-400 transition-colors">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.898-6.348-7.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.11.24-.245 0-.06-.024-.12-.04-.177l-.327-1.233a.49.49 0 0 1 .177-.554C23.257 18.38 24 16.82 24 15.021c0-3.554-2.986-6.163-7.062-6.163zm-2.84 3.362c.535 0 .969.44.969.983a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.983.97-.983zm5.6 0c.535 0 .969.44.969.983a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.983.97-.983z"/>
              </svg>
            </a>
            <a href="#" aria-label="微博" className="text-gray-500 hover:text-primary-400 transition-colors">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M9.827 18.965c-3.163.315-5.9-1.288-6.12-3.583-.22-2.295 2.165-4.413 5.327-4.73 3.163-.314 5.9 1.287 6.12 3.582.22 2.296-2.165 4.413-5.327 4.73zm0 0M21.73 8.82a3.03 3.03 0 0 0-2.596-1.004 6.84 6.84 0 0 0-.486.04c-.095-.46-.29-.898-.578-1.276-1.025-1.35-3.027-1.762-4.474-.925a1 1 0 1 0 1.033 1.711c.629-.38 1.628-.192 2.128.437.248.326.32.713.195 1.078a1 1 0 0 0 .756 1.29c.21.044.42.059.628.044 1.016-.073 1.902.694 1.977 1.71.076 1.015-.693 1.901-1.709 1.977-.27.02-.54-.02-.794-.116a1 1 0 0 0-1.23 1.423c.66.958.633 2.252-.09 3.19-1.205 1.567-3.505 1.86-5.135.65-.847-.626-1.321-1.534-1.329-2.508V16.52a1 1 0 1 0-2 0v.037c.014 1.678.825 3.203 2.194 4.199 2.465 1.821 6.019 1.341 7.939-1.064.862-1.122 1.185-2.49.905-3.797.39-.317.728-.693.998-1.116a3.968 3.968 0 0 0 .614-3.087A3.99 3.99 0 0 0 21.73 8.82z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
