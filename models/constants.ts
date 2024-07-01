// import getConfig from "next/config"; deprecated in app router

const postsPerPage = 7;
const tagsPerPage = 100;
const currentYear = new Date().getFullYear();

export const API = {
  basePath: "https://vl4di11ir.pw/doctypeadventures/wp-json/wp/v2/",
  postsPath: `posts?_embed&per_page=${postsPerPage}&page=`,
  localPostsPath: "/posts/page/",
  postPath: "posts/?_embed&slug=",
  localPostPath: "post/",
  categoriesPath: "posts/page/1/categories/",
  categoriesSwrKey: "categories",
  tagsPath: "posts/page/1/tags/",
  tagsSwrKey: `tags?per_page=${tagsPerPage}`,
  searchPath: "posts/page/1/search/",
  indexImage: "image.jpg",
};

export const settings = {
  postsPerPage,
};

export const appData = {
  name: "<!DOCTYPE Adventures>",
  // Version: publicRuntimeConfig?.version || "0.0", deprecated in app router
  version: "6.0.1",
  author: "Vladimir Jankovic",
  githubRepo: "https://github.com/vl4d1m1r",
  // Dummy blur data image, sorry
  blurDataImage:
    "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
};

export const texts = {
  tagline: "Technology, security and stuff according to some guy.",
  websiteVersionText: `${appData.name} version: ${appData.version}`,
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
