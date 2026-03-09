import type { BlogPost, Author } from '@/types'

export const authors: Author[] = [
  {
    id: 'zhang-wei',
    name: '张伟',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    title: '首席战略官',
    bio: '拥有 15 年企业战略咨询经验，曾服务于多家世界 500 强企业，专注于新兴市场战略布局与数字化转型。',
  },
  {
    id: 'li-ming',
    name: '李明',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    title: '数字化转型总监',
    bio: '前科技巨头产品总监，深耕企业数字化转型领域，帮助超过 50 家企业完成数字化升级。',
  },
  {
    id: 'wang-fang',
    name: '王芳',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    title: '管理咨询高级合伙人',
    bio: 'MBA 毕业于北京大学光华管理学院，专注于组织变革与人力资源管理，著有《高效能组织》一书。',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'enterprise-digital-transformation-2026',
    title: '2026 年中国企业数字化转型趋势报告',
    excerpt: '深度解析当前数字化转型的核心驱动力、主要障碍与破局路径，助力企业在新一轮技术浪潮中抢占先机。',
    content: `
# 2026 年中国企业数字化转型趋势报告

在人工智能技术快速迭代的背景下，企业数字化转型已从"可选项"演变为"必选项"。本报告通过对 500 家中国企业的深度调研，揭示了当前数字化转型的核心趋势。

## 一、AI 驱动的智能化升级

2026 年，生成式 AI 正在重塑企业内部运营的方方面面。从智能客服到代码辅助，从数据分析到内容生产，AI 应用的落地速度超出预期。

### 关键发现：
- **78%** 的受访企业已部署至少一个 AI 应用场景
- AI 赋能下，前台业务效率平均提升 **35%**
- 中台数据能力成为 AI 落地的关键瓶颈

## 二、云原生架构成为基础设施标配

混合云、多云架构广泛普及，企业 IT 基础设施正在向弹性、敏捷的方向快速演进。

## 三、数据要素价值加速释放

《数据要素 ×》三年行动计划推动下，企业数据资产化进程明显加速，数据驱动决策的文化正在形成。

## 结语

数字化转型不是一次性项目，而是持续演进的组织能力建设过程。建议企业优先聚焦核心业务场景，以小范围试点验证价值，再系统性规模化推广。
    `,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop',
    author: authors[1],
    publishedAt: '2026-02-28',
    category: '数字化转型',
    tags: ['AI', '数字化', '趋势报告', '云计算'],
    readTime: 8,
    featured: true,
  },
  {
    id: '2',
    slug: 'okr-implementation-guide',
    title: 'OKR 落地的七个关键：避开企业实施中的常见陷阱',
    excerpt: '许多企业引入 OKR 后效果不佳，问题往往出在实施细节上。本文分享了七个能显著提升 OKR 落地成效的实操建议。',
    content: `
# OKR 落地的七个关键

OKR（目标与关键结果）管理法在国内企业中的普及度越来越高，但真正用好的并不多。本文总结了我们服务数十家企业的 OKR 落地经验。

## 关键一：目标设定要有野心但可实现

好的 OKR 中，O（目标）应该是鼓舞人心的，让团队感到有挑战；KR（关键结果）应该是可量化、可验证的。

## 关键二：上下对齐而非单向分解

真正有效的 OKR 是双向对话的结果，而不是从上往下的任务分解。

## 关键三：季度节奏配合年度战略

季度 OKR 是执行层工具，年度战略是导航仪，两者需要有机结合。

## 总结

OKR 的成功落地需要组织文化的配套改变，需要管理层的持续投入，也需要专业工具的支撑。
    `,
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop',
    author: authors[2],
    publishedAt: '2026-02-15',
    category: '管理咨询',
    tags: ['OKR', '目标管理', '组织效能', '实操指南'],
    readTime: 6,
    featured: true,
  },
  {
    id: '3',
    slug: 'market-entry-strategy-sea',
    title: '出海东南亚：本土化战略是成功的核心密码',
    excerpt: '越来越多的中国企业将东南亚作为出海首选地。如何避免"水土不服"，构建真正有竞争力的本土化战略？',
    content: `
# 出海东南亚：本土化战略是核心

随着国内竞争日趋激烈，越来越多的中国企业将目光投向东南亚市场。越南、印尼、泰国等国家展现出强劲的经济增长动力。

## 东南亚市场的机遇与挑战

东南亚是一个多语言、多文化、多监管体系的复合型市场，切勿以"一招鲜"的打法应对差异显著的各国市场。

## 本土化的四个维度

1. **产品本土化**：适应当地用户偏好
2. **运营本土化**：建立在地化团队
3. **合规本土化**：理解并遵守当地法规
4. **文化本土化**：尊重并融入当地文化

## 成功案例参考

某电商平台通过深度本土化策略，在进入印尼市场 18 个月后实现盈亏平衡，成为行业标杆。
    `,
    coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop',
    author: authors[0],
    publishedAt: '2026-01-30',
    category: '战略洞察',
    tags: ['出海战略', '东南亚', '本土化', '国际化'],
    readTime: 7,
  },
  {
    id: '4',
    slug: 'talent-retention-strategy',
    title: '留住核心人才：超越薪酬的五维激励体系',
    excerpt: '高薪留人已越来越难奏效。研究表明，在薪酬之外，职业发展、文化认同等非物质因素对高潜人才的留存更具决定性影响。',
    content: `
# 留住核心人才：超越薪酬的五维激励体系

在人才竞争白热化的今天，单纯依靠薪酬已难以留住优秀人才。我们的研究显示，离职决策中有超过 60% 的因素与薪酬无关。

## 五维激励体系框架

### 1. 成长维度：清晰的职业发展路径
### 2. 意义维度：工作与个人价值观的契合
### 3. 自主维度：充分的自主权和决策空间
### 4. 归属维度：团队凝聚力与文化认同
### 5. 贡献维度：个人成就感与价值认可

## 实施建议

建议企业每年进行人才满意度深度调研，建立个性化的职业发展计划，并给予优秀人才足够的认可与展示平台。
    `,
    coverImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=450&fit=crop',
    author: authors[2],
    publishedAt: '2026-01-20',
    category: '人才发展',
    tags: ['人才管理', '激励体系', '员工留存', 'HR策略'],
    readTime: 5,
  },
  {
    id: '5',
    slug: 'ai-enterprise-application',
    title: '企业级 AI 应用的十大场景与实施路径',
    excerpt: '从智能客服到供应链预测，从代码辅助到财务分析，本文梳理了当前最具价值的企业 AI 落地场景及关键成功因素。',
    content: `
# 企业级 AI 应用的十大场景

生成式 AI 的快速发展为企业带来了前所未有的技术红利。本文从实战角度梳理了最具落地价值的十大 AI 应用场景。

## 场景一：智能客户服务

AI 客服可处理 80% 以上的标准化咨询，人工客服专注于复杂问题，整体服务效率和客户满意度均显著提升。

## 场景二：营销内容生成

AI 辅助的内容生产效率是传统方式的 5-10 倍，同时支持个性化、多语言内容规模化生产。

## 场景三：财务智能分析

AI 可实现实时财务异常监测、预算偏差预警和多维度经营分析，大幅提升财务管控质量。

## 实施建议

建议企业从单一高价值场景切入，快速验证 ROI，逐步构建 AI 应用能力体系，避免全面铺开带来的资源浪费。
    `,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    author: authors[1],
    publishedAt: '2026-01-10',
    category: '数字化转型',
    tags: ['AI应用', '人工智能', '企业数字化', '落地实践'],
    readTime: 9,
  },
  {
    id: '6',
    slug: 'supply-chain-resilience',
    title: '供应链韧性建设：后疫情时代的战略重构',
    excerpt: '全球供应链反复受冲击的背景下，韧性建设已成为企业核心竞争力之一。如何在效率与安全之间找到最优平衡？',
    content: `
# 供应链韧性建设

经历了数年的全球供应链波动，越来越多的企业意识到供应链韧性的战略价值，开始从"成本导向"转向"韧性优先"的供应链重构之旅。

## 韧性供应链的五个特征

1. 多元化供应商体系
2. 库存与产能缓冲机制
3. 端到端可视化能力
4. 快速响应能力
5. 持续风险监测体系

## 实施路径建议

建议从供应链风险全面评估入手，分级分类制定应对策略，逐步构建全链路数字化监控能力。
    `,
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop',
    author: authors[0],
    publishedAt: '2025-12-28',
    category: '战略洞察',
    tags: ['供应链', '风险管理', '韧性建设', '全球化'],
    readTime: 6,
  },
]

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug)

export const getFeaturedPosts = (): BlogPost[] =>
  blogPosts.filter((p) => p.featured).slice(0, 3)

export const getRecentPosts = (limit: number = 4): BlogPost[] =>
  blogPosts.slice(0, limit)
