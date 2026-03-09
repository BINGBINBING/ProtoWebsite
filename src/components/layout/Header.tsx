'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart, ChevronDown, Phone } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import clsx from 'clsx'

const navLinks = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  {
    label: '咨询服务',
    href: '/services',
    children: [
      { label: '战略规划咨询', href: '/services#strategy-consulting' },
      { label: '管理效能提升', href: '/services#management-consulting' },
      { label: '数字化转型', href: '/services#digital-transformation' },
      { label: '财务顾问服务', href: '/services#financial-advisory' },
      { label: '人才发展咨询', href: '/services#hr-consulting' },
      { label: '合规风控咨询', href: '/services#legal-compliance' },
    ],
  },
  { label: '博客', href: '/blog' },
  { label: '商城', href: '/shop' },
  { label: '预约咨询', href: '/booking' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { totalItems, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">智</span>
            </div>
            <div>
              <span
                className={clsx(
                  'font-bold text-lg leading-tight block transition-colors',
                  scrolled ? 'text-gray-900' : 'text-white'
                )}
              >
                智云咨询
              </span>
              <span
                className={clsx(
                  'text-xs leading-none transition-colors',
                  scrolled ? 'text-gray-400' : 'text-blue-200'
                )}
              >
                ZhiYun Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={clsx(
                    'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? scrolled
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-white bg-white/20'
                      : scrolled
                      ? 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Phone */}
            <a
              href="tel:400-888-0001"
              className={clsx(
                'hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors',
                scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'
              )}
            >
              <Phone size={15} />
              <span>400-888-0001</span>
            </a>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className={clsx(
                'relative p-2 rounded-lg transition-all',
                scrolled
                  ? 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              )}
              aria-label="购物车"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            {/* CTA */}
            <Link
              href="/booking"
              className={clsx(
                'hidden lg:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all',
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                  : 'bg-white text-primary-700 hover:bg-blue-50'
              )}
            >
              免费咨询
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={clsx(
                'lg:hidden p-2 rounded-lg transition-colors',
                scrolled ? 'text-gray-700' : 'text-white'
              )}
              aria-label="菜单"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-slide-up">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-primary-600 hover:bg-gray-50 rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex gap-3">
              <a
                href="tel:400-888-0001"
                className="flex-1 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg"
              >
                400-888-0001
              </a>
              <Link
                href="/booking"
                className="flex-1 py-3 text-center text-sm font-semibold text-white bg-primary-600 rounded-lg"
              >
                免费咨询
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
