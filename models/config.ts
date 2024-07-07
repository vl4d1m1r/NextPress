// import getConfig from "next/config"; deprecated in app router
export const postsPerPage = 5;
export const tagsPerPage = 100;
export const currentYear = new Date().getFullYear();
export const numberOfPopularTagsToShow = 10;

export const API = {
  wordpressApiPath: `https://${process.env.WORDPRESS_DOMAIN}/doctypeadventures/wp-json/wp/v2/`,
  wordpressMediaPath: `https://${process.env.WORDPRESS_DOMAIN}/doctypeadventures/wp-content/uploads/`,
  postsPath: `posts?_embed&per_page=${postsPerPage}&page=`,
  localPostsPath: "/posts/page/",
  postPath: "posts/?_embed&slug=",
  localPostPath: "post/",
  categoriesPath: "posts/page/1/category/",
  categoriesSwrKey: "categories",
  tagsPath: "posts/page/1/tag/",
  tagsSwrKey: `tags?per_page=${tagsPerPage}`,
  searchPath: "posts/page/1/search/",
  indexImage: "image.jpg",
};

export const appData = {
  name: "<!DOCTYPE Adventures>",
  author: "Vladimir Jankovic",
  githubRepo: "https://github.com/vl4d1m1r",
  logoImageUrl: API.wordpressMediaPath + "2024/07/logo.jpg",
  showLogo: true,
  logoTextImageUrl: API.wordpressMediaPath + "2024/07/logo-text-image.png",
  showLogoTextImage: true,
  showLogoText: true, // logoText = name, will not show if showLogoTextImage is set to true
};

export const texts = {
  tagline: "Technology, security and stuff according to some guy.",
  copyrightNotice: `Ⓒ ${appData.author}, 2016-${currentYear}`,
  license: "Website engine released under the MIT license.",
  rant: "All the articles on this site represent my opinions, and I could be wrong. So take everything that I said here with a grain of salt. Also, I am not into monetization with my texts, so no tracking cookies, ads, or anything of that sort here. And, please, please, please don't f*ck something up after reading articles from this site! ",
  rantDisclaimer: "Therefore, here it is - the disclaimer - read it, and you're good to go.",
  disclaimer: `The information provided by this website ${appData.name} (“we,” “us” or “our”) on ${process.env.DOMAIN} (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk. The Site may contain (or you may be sent through the Site links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.`,
};

export const reports = {
  loading: { type: "loading", messages: ["LOADING MUTHA... LOADING!"], animation: "ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ" },
  error: {
    type: "error",
    messages: ["SOMETHIN' SNAPPED MUTHA!", "SOMETHIN' SNAPPED I'M TELLING YA!"],
    animation: "(ノಠ益ಠ)ノ彡┻━┻",
  },
  notFound: {
    type: "notFound",
    messages: ["WHAT YOU SEARCHIN' FOR...", "IS NOT FOUND, MUTHA!"],
    animation: `¯${String.fromCharCode(92)}_(ツ)_/¯`,
  },
  empty: {
    type: "empty",
    messages: ["PAGE IS BLANK! IT'S NOTHING THERE!!", "I'M SCARED MUTHA!!"],
    animation: `(╯°□°)╯`,
  },
};

export const defaultSeo = {
  title: appData.name,
  description: texts.tagline,
  image: process.env.DOMAIN! + API.indexImage,
  url: process.env.DOMAIN!,
};
