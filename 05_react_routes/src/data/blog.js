const blogs = [
  {
    id: 1,
    title: "React 工程化实践",
    content:
      "React 是一个用于构建用户界面的 JavaScript 库。本文将介绍如何在 React 项目中实现工程化，包括代码分割、状态管理和性能优化。",
    author: "Alice",
    image:
      "https://ts1.tc.mm.bing.net/th/id/R-C.73e2e62abca0d801bfc6bfd057da2566?rik=j8HY6AaQFU0Rwg&riu=http%3a%2f%2fpic3.bbzhi.com%2fxitongbizhi%2fjingpinzhencang1080pgao%2fcomputer_kuan_201632_18.jpg&ehk=27%2bPR80l8EQYSmmxnqKbq8rlIaEFsp7RtWLHI9QuYwA%3d&risl=1&pid=ImgRaw&r=0",
    views: 1200,
    likes: 150,
    favorites: 80,
    tags: ["React", "工程化", "JavaScript"],
  },
  {
    id: 2,
    title: "Vue 3 项目架构设计",
    content:
      "Vue 3 是一个渐进式 JavaScript 框架。本文将探讨如何在 Vue 3 项目中设计可扩展的架构，包括模块化、插件化和性能优化。",
    author: "Bob",
    image:
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.qojpoXIiSo9b-YsH61fIQgHaEK?rs=1&pid=ImgDetMain",
    views: 950,
    likes: 120,
    favorites: 65,
    tags: ["Vue", "工程化", "架构设计"],
  },
  {
    id: 3,
    title: "Angular 模块化开发",
    content:
      "Angular 是一个基于 TypeScript 的开源框架。本文将介绍如何在 Angular 项目中实现模块化开发，包括懒加载、依赖注入和组件通信。",
    author: "Charlie",
    image:
      "https://ts1.tc.mm.bing.net/th/id/R-C.e26fcb3b1789d70f3548679c4b57b695?rik=lzKafjzwNNtVsQ&riu=http%3a%2f%2fimg3.iqilu.com%2fdata%2fattachment%2fforum%2f201308%2f22%2f163938kvv4h8nh84rvrvjx.jpg&ehk=pjmfw1L1KqUWyzlZuCUUyGni1VwLlXJlSLfjlcikMa4%3d&risl=&pid=ImgRaw&r=0",
    views: 800,
    likes: 90,
    favorites: 50,
    tags: ["Angular", "模块化", "TypeScript"],
  },
  {
    id: 4,
    title: "Webpack 配置优化指南",
    content:
      "Webpack 是现代前端工程化的核心工具。本文将分享如何优化 Webpack 配置，包括代码分割、Tree Shaking 和缓存策略。",
    author: "David",
    image:
      "https://ts1.tc.mm.bing.net/th/id/R-C.e02889d6f9cc84ade57c1d9746d53703?rik=sddmqdCMSl%2bhfw&riu=http%3a%2f%2fwww.chaojizixun.com%2fzb_users%2fupload%2f2016%2f03%2f201603031456987116187915.jpg&ehk=Xo329soJamoEvJm%2br%2bqKOaqY6jtgxBA8mJOFLcD%2b0y4%3d&risl=&pid=ImgRaw&r=0",
    views: 1500,
    likes: 200,
    favorites: 100,
    tags: ["Webpack", "工程化", "性能优化"],
  },
  {
    id: 5,
    title: "Vite 快速入门",
    content:
      "Vite 是一个新一代前端构建工具。本文将介绍如何使用 Vite 快速搭建项目，并探讨其与 Webpack 的对比。",
    author: "Eva",
    image: "https://file.moyublog.com/free_wallpapers_files/o0so2suefnv.jpg",
    views: 1300,
    likes: 180,
    favorites: 95,
    tags: ["Vite", "构建工具", "工程化"],
  },
  {
    id: 6,
    title: "前端性能优化实战",
    content:
      "性能优化是前端工程化的重要部分。本文将分享一些实用的性能优化技巧，包括懒加载、代码分割和资源压缩。",
    author: "Frank",
    image:
      "https://img-blog.csdnimg.cn/img_convert/5f63ca563a7c98becca1688ba2017d77.png",
    views: 1100,
    likes: 160,
    favorites: 85,
    tags: ["性能优化", "工程化", "前端"],
  },
  {
    id: 7,
    title: "TypeScript 在前端工程中的应用",
    content:
      "TypeScript 是 JavaScript 的超集。本文将探讨如何在前端工程中应用 TypeScript，包括类型检查、接口和泛型。",
    author: "Grace",
    image:
      "https://img2020.cnblogs.com/blog/2253587/202012/2253587-20201216205007796-1083554876.png",
    views: 1000,
    likes: 140,
    favorites: 75,
    tags: ["TypeScript", "工程化", "JavaScript"],
  },
  {
    id: 8,
    title: "前端代码规范与 ESLint",
    content:
      "代码规范是团队协作的基础。本文将介绍如何使用 ESLint 统一代码风格，并分享一些常见的配置技巧。",
    author: "Henry",
    image:
      "https://img2020.cnblogs.com/blog/2253587/202012/2253587-20201216205007796-1083554876.png",
    views: 900,
    likes: 110,
    favorites: 60,
    tags: ["ESLint", "代码规范", "工程化"],
  },
  {
    id: 9,
    title: "前端自动化测试实践",
    content:
      "自动化测试是保证代码质量的重要手段。本文将介绍如何使用 Jest 和 Cypress 实现前端自动化测试。",
    author: "Ivy",
    image:
      "https://img2020.cnblogs.com/blog/2253587/202012/2253587-20201216205007796-1083554876.png",
    views: 850,
    likes: 100,
    favorites: 55,
    tags: ["自动化测试", "Jest", "Cypress"],
  },
  {
    id: 10,
    title: "前端 CI/CD 实践",
    content:
      "CI/CD 是现代前端工程化的关键。本文将分享如何使用 GitHub Actions 实现前端项目的持续集成和持续部署。",
    author: "Jack",
    image:
      "https://img2020.cnblogs.com/blog/2253587/202012/2253587-20201216205007796-1083554876.png",
    views: 950,
    likes: 130,
    favorites: 70,
    tags: ["CI/CD", "GitHub Actions", "工程化"],
  },
  {
    id: 11,
    title: "前端微服务架构",
    content:
      "微服务架构正在改变前端开发方式。本文将探讨如何在前端项目中实现微服务架构，包括模块联邦和独立部署。",
    author: "Kevin",
    image: "https://via.placeholder.com/600x400.png?text=Micro-Frontends",
    views: 1200,
    likes: 170,
    favorites: 90,
    tags: ["微服务", "架构设计", "工程化"],
  },
  {
    id: 12,
    title: "前端状态管理实战",
    content:
      "状态管理是复杂前端应用的核心。本文将对比 Redux、MobX 和 Zustand，并分享一些最佳实践。",
    author: "Lily",
    image: "https://via.placeholder.com/600x400.png?text=State+Management",
    views: 1000,
    likes: 150,
    favorites: 80,
    tags: ["状态管理", "Redux", "MobX"],
  },
  {
    id: 13,
    title: "前端国际化解决方案",
    content:
      "国际化是现代前端应用的常见需求。本文将介绍如何使用 i18next 实现前端国际化，并分享一些优化技巧。",
    author: "Mike",
    image: "https://via.placeholder.com/600x400.png?text=Internationalization",
    views: 800,
    likes: 90,
    favorites: 50,
    tags: ["国际化", "i18next", "工程化"],
  },
  {
    id: 14,
    title: "前端错误监控与日志",
    content:
      "错误监控是保证应用稳定性的关键。本文将介绍如何使用 Sentry 实现前端错误监控，并分享一些日志管理技巧。",
    author: "Nancy",
    image: "https://via.placeholder.com/600x400.png?text=Error+Monitoring",
    views: 750,
    likes: 80,
    favorites: 45,
    tags: ["错误监控", "Sentry", "日志管理"],
  },
  {
    id: 15,
    title: "前端安全最佳实践",
    content:
      "安全是前端开发中不可忽视的部分。本文将分享一些前端安全的最佳实践，包括 XSS 防护和 CSRF 防护。",
    author: "Oliver",
    image: "https://via.placeholder.com/600x400.png?text=Frontend+Security",
    views: 700,
    likes: 70,
    favorites: 40,
    tags: ["安全", "XSS", "CSRF"],
  },
  {
    id: 16,
    title: "前端 Docker 化部署",
    content:
      "Docker 是现代化部署的重要工具。本文将介绍如何将前端项目 Docker 化，并分享一些部署优化技巧。",
    author: "Peter",
    image: "https://via.placeholder.com/600x400.png?text=Docker+Deployment",
    views: 900,
    likes: 110,
    favorites: 60,
    tags: ["Docker", "部署", "工程化"],
  },
  {
    id: 17,
    title: "前端 GraphQL 实践",
    content:
      "GraphQL 是一种新型的 API 查询语言。本文将介绍如何在前端项目中使用 GraphQL，并分享一些性能优化技巧。",
    author: "Quincy",
    image: "https://via.placeholder.com/600x400.png?text=GraphQL+Practices",
    views: 850,
    likes: 100,
    favorites: 55,
    tags: ["GraphQL", "API", "工程化"],
  },
  {
    id: 18,
    title: "前端 PWA 实战",
    content:
      "PWA 是提升用户体验的重要技术。本文将介绍如何将前端项目改造为 PWA，并分享一些性能优化技巧。",
    author: "Rachel",
    image: "https://via.placeholder.com/600x400.png?text=PWA+Practices",
    views: 950,
    likes: 120,
    favorites: 65,
    tags: ["PWA", "用户体验", "工程化"],
  },
  {
    id: 19,
    title: "前端 SSR 与 CSR 对比",
    content:
      "SSR 和 CSR 是两种常见的渲染方式。本文将对比它们的优缺点，并分享一些实际应用场景。",
    author: "Steve",
    image: "https://via.placeholder.com/600x400.png?text=SSR+vs+CSR",
    views: 1000,
    likes: 140,
    favorites: 75,
    tags: ["SSR", "CSR", "渲染"],
  },
  {
    id: 20,
    title: "前端组件库设计指南",
    content:
      "组件库是前端工程化的重要组成部分。本文将分享如何设计一个可复用的前端组件库，并探讨一些最佳实践。",
    author: "Tina",
    image: "https://via.placeholder.com/600x400.png?text=Component+Library",
    views: 1100,
    likes: 160,
    favorites: 85,
    tags: ["组件库", "设计", "工程化"],
  },
];

export default blogs;
