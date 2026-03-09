import type { Metadata } from 'next'
import { ShoppingBag, Package, Filter } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'
import type { ProductCategory } from '@/types'

export const metadata: Metadata = {
  title: '知识商城',
  description: '购买高品质咨询报告、培训课程、管理工具和行业白皮书，提升企业管理能力。',
}

const categories: ProductCategory[] = [
  '咨询报告',
  '培训课程',
  '管理工具',
  '行业白皮书',
  '在线课程',
]

export default function ShopPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 mb-4">
                <ShoppingBag size={14} />
                知识商城
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                专业知识的最短路径
              </h1>
              <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
                精选咨询报告、实操工具包、培训课程，将顶尖顾问的实战经验转化为可直接使用的管理资产。
              </p>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              {[
                { icon: Package, value: '50+', label: '精品产品' },
                { icon: ShoppingBag, value: '2000+', label: '已购买客户' },
                { icon: Filter, value: '5', label: '细分类别' },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-white/10 backdrop-blur rounded-2xl px-6 py-5">
                  <stat.icon size={24} className="text-blue-300 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-blue-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary-600 text-white">
              全部产品
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>排序：</span>
            <select className="input-field py-2 text-sm w-auto">
              <option>综合排序</option>
              <option>价格从低到高</option>
              <option>价格从高到低</option>
              <option>最新上架</option>
              <option>好评优先</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Notice */}
        <div className="mt-16 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <h3 className="font-bold text-gray-900 mb-2">企业采购优惠</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            购买 5 件及以上享受 9 折优惠，购买 10 件及以上享受 8 折优惠。如需企业批量采购或定制内容，请
            <a href="mailto:shop@zhiyun.com" className="text-primary-600 font-medium hover:underline ml-1">
              联系我们
            </a>
            。
          </p>
        </div>
      </div>
    </div>
  )
}
