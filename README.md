# Business School Vue

一个现代化的商学院展示网站，基于 Vue 3 + Vite + TypeScript + Tailwind CSS 构建。

## 🚀 技术栈

- **框架**: Vue 3.4.21
- **构建工具**: Vite 5.4.0
- **语言**: TypeScript 5.6.3
- **样式**: Tailwind CSS 4.1.14
- **包管理器**: pnpm

## 📦 项目结构

```
├── client/                 # 前端源代码
│   ├── public/            # 静态资源
│   │   ├── images/        # 图片资源
│   │   └── logo.svg       # Logo 文件
│   └── src/               # 源代码
│       ├── components/    # Vue 组件
│       ├── composables/   # 组合式函数
│       ├── App.vue        # 根组件
│       ├── main.ts        # 入口文件
│       └── index.css      # 全局样式
├── package.json           # 项目配置
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
└── README.md              # 项目文档
```

## 🛠️ 开发指南

### 环境要求

- Node.js >= 18.x
- pnpm >= 10.x

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:5173` 预览应用。

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

### 代码检查

```bash
# TypeScript 类型检查
pnpm check

# 代码格式化
pnpm format
```

## 🎨 功能模块

- **导航栏** (NavbarSection) - 顶部导航菜单
- **英雄区域** (HeroSection) - 首页横幅展示
- **关于我们** (AboutSection) - 学院介绍
- **教师团队** (TeachersSection) - 师资展示（支持点击查看详细信息）
- **团队风采** (TeamSection) - 团队展示
- **活动预告** (EventsSection) - 活动信息
- **相册画廊** (GallerySection) - 图片展示
- **规章制度** (ConstitutionSection) - 学院章程
- **加入我们** (JoinSection) - 招生/招聘信息
- **页脚** (SiteFooter) - 底部信息

## 📝 代码规范

项目使用 Prettier 进行代码格式化，配置位于 `.prettierrc`。

提交代码前请运行：

```bash
pnpm format
pnpm check
```

## 📄 许可证

MIT License
