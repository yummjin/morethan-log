const CONFIG = {
  // profile setting (required)
  profile: {
    name: "cho4u4o",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend developer",
    bio: "주변에 행복을 전파하는 사람이 되고자 합니다.",
    email: "cho4u4o@gmail.com",
    linkedin: "",
    github: "cho4u4o",
    instagram: "",
  },
  projects: [
    {
      name: `Saphy`,
      href: "https://github.com/2024-Saphy",
    },
    {
      name: `Let's eat Kiryong`,
      href: "https://www.kiryong.site/",
    },
    {
      name: `Team-Pu`,
      href: "https://www.team-pu.site/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "cho4u4o.log",
    description: "welcome to cho4u4ooo",
    scheme: "dark",
  },

  // CONFIG configration (required)
  link: "https://cho4u4o.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR",
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
