'use client'

import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'

const serviceOptions = [
  '战略规划咨询',
  '管理效能提升',
  '数字化转型',
  '财务顾问服务',
  '人才发展咨询',
  '合规风控咨询',
  '其他（请在描述中说明）',
]

const timeSlots = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
]

const budgetOptions = [
  '20 万以内',
  '20-50 万',
  '50-100 万',
  '100-300 万',
  '300 万以上',
  '暂未确定',
]

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    budget: '',
    description: '',
    agreePrivacy: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">预约成功！</h3>
        <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
          感谢您的预约申请。我们的顾问将在 1 个工作日内与您联系，确认咨询时间安排。期间如有疑问，欢迎致电{' '}
          <a href="tel:400-888-0001" className="text-primary-600 font-semibold">
            400-888-0001
          </a>
          。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Info */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-primary-600 text-white rounded-full text-xs font-bold flex items-center justify-center">
            1
          </span>
          基本信息
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              姓名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="您的姓名"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              公司名称 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              placeholder="您的公司"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              邮箱地址 <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@company.com"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              手机号码 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="138 0000 0000"
              pattern="[0-9]{11}"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-primary-600 text-white rounded-full text-xs font-bold flex items-center justify-center">
            2
          </span>
          咨询需求
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              咨询服务类型 <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">请选择服务类型</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              预算范围
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">请选择预算范围</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            业务描述 <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={4}
            placeholder="请简要描述您的业务背景、面临的挑战或具体咨询需求，帮助我们更好地为您安排合适的顾问..."
            className="input-field resize-none"
          />
        </div>
      </div>

      {/* Scheduling */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-primary-600 text-white rounded-full text-xs font-bold flex items-center justify-center">
            3
          </span>
          预约时间
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              期望日期
            </label>
            <input
              type="date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              期望时间段
            </label>
            <select
              name="preferredTime"
              value={form.preferredTime}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">请选择时间段</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          * 时间仅供参考，顾问将根据实际排期与您确认最终时间
        </p>
      </div>

      {/* Privacy */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="agreePrivacy"
          name="agreePrivacy"
          checked={form.agreePrivacy}
          onChange={handleChange}
          required
          className="mt-1 w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
        />
        <label htmlFor="agreePrivacy" className="text-sm text-gray-500 leading-relaxed">
          我已阅读并同意{' '}
          <a href="/privacy" className="text-primary-600 hover:underline">
            隐私政策
          </a>
          ，授权智云咨询将我提交的信息用于咨询服务联系。
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !form.agreePrivacy}
        className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 size={18} className="animate-spin" />
            正在提交...
          </span>
        ) : (
          '提交预约申请'
        )}
      </button>
    </form>
  )
}
