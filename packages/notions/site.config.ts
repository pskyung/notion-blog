const CONFIG = {
  user: {
    name: "",
    age: "",
    profile: "",
  },
  metadata: {
    title: "뚜 포스팅 | ddu",
    description:
      "뚜 블로그는 다양한 개발 로그와 백엔드 관련 정보를 공유하는 공간입니다. JAVA, C#, DB 등 최신 웹 기술과 관련된 심도 있는 분석을 합니다. 백엔드 개발자로서의 여정과 경험을 담아내며, 유용한 팁과 트릭을 통해 개발자들의 성장을 도모합니다. 많은 관심 부탁드립니다.",
  },
  blog: {
    title: "뚜 블로그",
    todayWords: ["hello world", "ddu", "V-log"],
    scheme: "dark", // 'light' | 'dark' | 'system'
  },
  utterances: {
    enable: true,
    config: {
      repo: "pskyung/Notion-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },
  isToolToggleVisible: true,
  sns: {
    github: "https://github.com/pskyung",
    linkedin:
      "https://www.linkedin.com/in/https://www.linkedin.com/in/%EC%88%98%EA%B2%BD-%EB%B0%95-3064282b2/",
  },
  headerButton: {
    mainProject: {
      name: "우당탕탕 도서관 가기",
      url: "https://blog.uddangtangtang.com/",
    },
    myInfo: {
      name: "내가 누구게",
      url: "/page/profile",
    },
  },
};

export default CONFIG;
