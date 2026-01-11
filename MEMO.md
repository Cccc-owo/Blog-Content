# 备忘

## 文章编写相关

文章组织方式：[Folder](https://docs.mizuki.mysqil.com/press/folder/)

文章 Frontmatter

```yaml
---
# ===== 必填字段 =====
title: "完整的 Frontmatter 示例文章"
published: 2026-01-11

# ===== 内容相关 =====
description: "这是一篇展示 Mizuki 项目中所有 frontmatter 字段的示例文章，包括基本信息、分类、作者、版权和特殊功能。"
image: "/images/example-cover.jpg"  # 可以是相对路径、/public 路径或完整 URL
updated: 2026-01-11  # 最后更新日期

# ===== 分类与标签 =====
tags: ["示例", "教程", "Markdown", "Mizuki"]
category: "技术文档"
lang: "zh_CN"  # 语言代码

# ===== 发布控制 =====
draft: false  # true 表示草稿，仅在开发环境显示
pinned: true  # 置顶文章
priority: 1   # 置顶文章的排序优先级（数字越小越靠前）

# ===== 作者与版权 =====
author: "张三"
sourceLink: "https://github.com/example/original-post"  # 原文链接
licenseName: "CC BY-NC-SA 4.0"
licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/"

# ===== 加密功能 =====
encrypted: false  # 设为 true 启用内容加密
password: ""      # encrypted 为 true 时必填

# ===== 自定义 URL =====
alias: "complete-frontmatter-example"  # 自定义短链接
permalink: "/special/custom-path/"     # 自定义完整路径（需全局启用）
---
```

最小可用 Frontmatter:

```yml
title: "我的第一篇文章"
published: 2026-01-11
description: "这是一篇简单的博客文章"
# updated: 2026-01-11
tags: ["博客", "日常"]
category: "生活"
```
