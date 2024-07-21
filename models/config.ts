// import getConfig from "next/config"; deprecated in app router
import { ThemeConfigType } from "@/types";
import DrawIcon from "@mui/icons-material/Draw";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LockIcon from "@mui/icons-material/Lock";
import RedditIcon from "@mui/icons-material/Reddit";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TerminalIcon from "@mui/icons-material/Terminal";
import TwitterIcon from "@mui/icons-material/Twitter";

export const pageConfig = {
  postsPerPage: 5,
  tagsPerPage: 100,
  currentYear: new Date().getFullYear(),
  numberOfPopularTagsToShow: 10,
  sidebarCharactersPerLevel: 2500,
};

export const categoriesConfig = {
  coding: { id: 4, name: "Coding", slug: "coding", Icon: TerminalIcon },
  design: { id: 7, name: "Design", slug: "design", Icon: DrawIcon },
  security: { id: 16, name: "Security", slug: "security", Icon: LockIcon },
  gaming: { id: 2, name: "Gaming", slug: "gaming", Icon: SportsEsportsIcon },
};

export const mainMenuConfig = {
  buttonsOutlined: true,
  buttonsBackground: true,
};

export const apiConfig = {
  wordpressApiPath: `https://${process.env.WORDPRESS_DOMAIN}/doctypeadventures/wp-json/wp/v2/`,
  wordpressMediaPath: `https://${process.env.WORDPRESS_DOMAIN}/doctypeadventures/wp-content/uploads/`,
  postsPath: `posts?_embed&per_page=${pageConfig.postsPerPage}&page=`,
  localPostsPath: "/posts/page/",
  postPath: "posts/?_embed&slug=",
  localPostPath: "post/",
  categoriesPath: "posts/page/1/category/",
  categoriesSwrKey: "categories",
  tagsPath: "posts/page/1/tag/",
  tagsSwrKey: `tags?per_page=${pageConfig.tagsPerPage}`,
  searchPath: "posts/page/1/search/",
  indexImage: `https://${process.env.WORDPRESS_DOMAIN}/doctypeadventures/wp-content/uploads/2024/07/index.jpeg`,
};

export const appConfig = {
  name: "<!DOCTYPE Adventures>",
  slug: "doctype_adventures",
  author: "Vladimir Jankovic",
  githubRepo: "https://github.com/vl4d1m1r",
  logoImageUrl: apiConfig.wordpressMediaPath + "2024/07/logo.jpg",
  logoTextImageDarkUrl: apiConfig.wordpressMediaPath + "2024/07/logo-doctype-text-dark.png",
  logoTextImageLightUrl: apiConfig.wordpressMediaPath + "2024/07/logo-doctype-text-light.png",
};

export const headerConfig = {
  showLogo: true,
  showLogoTextImage: true,
  showLogoText: true, // logoText = name, will not show if showLogoTextImage is set to true
};

export const postsConfig = {
  showImageCaption: {
    posts: true,
    post: true,
    highlights: true,
  },
};

export const imageConfig = {
  ratio: {
    width: 500,
    height: 280,
  },
  logoTextRatio: {
    width: 230,
    height: 50,
  },
};

export const themeConfig: ThemeConfigType = {
  defaultTheme: "dark",
  allowThemeChange: true,
  localStorageName: `${appConfig.slug}-theme`,
};

export const textsConfig = {
  tagline: "Technology, security and stuff according to some guy.",
  copyrightNotice: `Ⓒ ${appConfig.author}, 2016-${pageConfig.currentYear}`,
  license: "Website engine released under the MIT license.",
  rant: "All the articles on this site represent my opinions, and I could be wrong. So take everything that I said here with a grain of salt. Also, I am not into monetization with my texts, so no tracking cookies, ads, or anything of that sort here. And, please, please, please don't f*ck something up after reading articles from this site! ",
  rantDisclaimer: "Therefore, here it is - the disclaimer - read it, and you're good to go.",
  disclaimer: `The information provided by this website ${appConfig.name} (“we,” “us” or “our”) on ${process.env.DOMAIN} (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk. The Site may contain (or you may be sent through the Site links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.`,
};

export const infoDisplayDataConfig = {
  loading: {
    type: "loading",
    title: "LOADING...",
    messages: ["LOADING MUTHA... LOADING!"],
    animation: "ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ",
    homeButton: false,
    homeLink: "/",
    image: "",
  },
  error: {
    type: "error",
    title: "LOOK AROUND YA! AN ERROR MUTHA!",
    messages: ["SOMETHIN' SNAPPED MUTHA!", "SOMETHIN' SNAPPED I'M TELLIN' YA!"],
    animation: "(ノಠ益ಠ)ノ彡┻━┻",
    homeButton: true,
    homeLink: "/",
    image: "https://vl4di11ir.pw/doctypeadventures/wp-content/uploads/2024/07/not-found.jpg",
  },
  notFound: {
    type: "notFound",
    title: "THAT PAGE ISN'T HERE MUTHA!",
    messages: ["I LOOKED EVERYWHERE MUTHA!", "I CAN'T FIND IT!", "BUT I DON'T GIVE A CARE!"],
    animation: `¯${String.fromCharCode(92)}_(ツ)_/¯`,
    homeButton: true,
    homeLink: "/",
    image: "https://vl4di11ir.pw/doctypeadventures/wp-content/uploads/2024/07/not-found.jpg",
  },
  empty: {
    type: "empty",
    title: "IT'S EMPTY MUTHA!",
    messages: [
      "NOTHIN' HERE!",
      "JUST EMPTY SPACE!",
      "WHAT HAVE YOU BEEN SEARCHIN' FOR MUTHA!",
      "WHATEVER IT IS, IT AIN'T HERE!",
      "DON'T PISS ME OFF MUTHA!.",
      `(╯°□°)╯`,
    ],
    animation: `(╯°□°)╯`,
    homeButton: true,
    homeLink: "/",
    image: "https://vl4di11ir.pw/doctypeadventures/wp-content/uploads/2024/07/not-found.jpg",
  },
};

export const defaultSeoConfig = {
  title: appConfig.name,
  description: textsConfig.tagline,
  image: apiConfig.indexImage,
  url: process.env.DOMAIN!,
};

export const socialShareConfig = {
  fancyShareButton: false,
  headlinePrefix: `Check out this article from ${appConfig.name}: `,
  actions: [
    { Icon: TwitterIcon, name: "Twitter", shareUrl: `https://twitter.com/intent/tweet?text=_TEXT_&url=_URL_` },
    { Icon: FacebookIcon, name: "Facebook", shareUrl: "https://www.facebook.com/sharer/sharer.php?u=_URL_" },
    {
      Icon: LinkedInIcon,
      name: "LinkedIn",
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=_URL_&title=_URL_`,
    },
    { Icon: RedditIcon, name: "Reddit", shareUrl: "https://www.reddit.com/submit?url=_URL_&title=_TEXT_" },
  ],
};

export const socialNetworksConfig = [
  { Icon: GitHubIcon, name: "GitHub", active: true, url: "https://github.com/vl4d1m1r" },
  { Icon: TwitterIcon, name: "Twitter", active: false, url: "https://twitter.com/" },
  { Icon: FacebookIcon, name: "Facebook", active: false, url: "https://www.facebook.com/" },
  { Icon: LinkedInIcon, name: "LinkedIn", active: false, url: "https://www.linkedin.com/" },
  { Icon: RedditIcon, name: "Reddit", active: false, url: "https://www.reddit.com/" },
];
