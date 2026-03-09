// ============== Service Types ==============
export interface Service {
  id: string
  title: string
  shortDesc: string
  description: string
  icon: string
  features: string[]
  price: string
  duration: string
  category: ServiceCategory
  popular?: boolean
}

export type ServiceCategory = 'strategy' | 'management' | 'digital' | 'finance' | 'hr' | 'legal'

// ============== Blog Types ==============
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  author: Author
  publishedAt: string
  category: BlogCategory
  tags: string[]
  readTime: number
  featured?: boolean
}

export type BlogCategory = '战略洞察' | '管理咨询' | '数字化转型' | '行业动态' | '案例分析' | '人才发展'

export interface Author {
  id: string
  name: string
  avatar: string
  title: string
  bio: string
}

// ============== Product Types ==============
export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: ProductCategory
  tags: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  featured?: boolean
}

export type ProductCategory = '咨询报告' | '培训课程' | '管理工具' | '行业白皮书' | '在线课程'

export interface CartItem {
  product: Product
  quantity: number
}

// ============== Team Types ==============
export interface TeamMember {
  id: string
  name: string
  title: string
  department: string
  avatar: string
  bio: string
  expertise: string[]
  linkedin?: string
  email: string
}

// ============== Booking Types ==============
export interface BookingForm {
  name: string
  company: string
  email: string
  phone: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  description: string
  budget: string
}

export interface TimeSlot {
  time: string
  available: boolean
}

// ============== Stats ==============
export interface Stat {
  label: string
  value: string
  suffix?: string
  description: string
}

// ============== Testimonial ==============
export interface Testimonial {
  id: string
  name: string
  company: string
  title: string
  avatar: string
  content: string
  rating: number
  serviceUsed: string
}
