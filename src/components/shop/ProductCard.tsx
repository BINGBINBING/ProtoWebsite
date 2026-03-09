'use client'

import Image from 'next/image'
import { ShoppingCart, Star, Tag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/types'
import clsx from 'clsx'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addItem, toggleCart } = useCart()

  const handleAddToCart = () => {
    addItem(product)
    toggleCart()
  }

  return (
    <div className="card group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 badge bg-red-500 text-white">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="badge bg-gray-500 text-white">暂时缺货</span>
          </div>
        )}
        {product.featured && (
          <span className="absolute top-3 right-3 badge bg-gold-500 text-white">
            热销
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 mb-2 mt-2 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-3 flex-1">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                className={clsx(
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-200 fill-gray-200'
                )}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">
            {product.rating} ({product.reviewCount} 评价)
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="flex items-center gap-0.5 text-xs text-gray-400">
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div>
            <span className="text-xl font-bold text-primary-600">
              ¥{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                ¥{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all',
              product.inStock
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md active:scale-95'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            )}
          >
            <ShoppingCart size={15} />
            {product.inStock ? '加入购物车' : '暂时缺货'}
          </button>
        </div>
      </div>
    </div>
  )
}
