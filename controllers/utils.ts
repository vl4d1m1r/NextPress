import { apiConfig } from "@/models/config";
import { PostType } from "@/types";
import parse from "html-react-parser";

/*
 *
 * This function converts props object (eg. { page: '1', category: '2' }) to
 * an API route (eg. https://.../wp-json/wp/v2/posts/?_embed&slug=1&categories=2 )
 *
 */
export const convertPropsToApiRoute = (props: { [key: string]: number | string | undefined }) => {
  const propsKeys = Object.keys(props);
  const apiRoute = apiConfig.wordpressApiPath + apiConfig.postsPath + props.page;
  return propsKeys.reduce((accumulator: string, key: string) => {
    if (!props[key]) return accumulator;
    let adjustedKey = key;
    if (key === "category") adjustedKey = "categories";
    if (key === "tag") adjustedKey = "tags";
    accumulator += key !== "page" ? `&${adjustedKey}=${props[key]}` : "";
    return accumulator;
  }, apiRoute);
};

/*
 *
 * This function converts props object (eg. { page: '1', category: '2' }) to
 * local API route (eg. /posts/page/1/category/2 )
 *
 */
export const convertPropsToLocalRoute = (props: { [key: string]: number | string | undefined }) => {
  const propsKeys = Object.keys(props);
  const apiRoute = apiConfig.localPostsPath + props.page;
  return propsKeys.reduce((accumulator: string, key: string) => {
    if (!props[key]) return accumulator;
    accumulator += key !== "page" ? `/${key}/${props[key]}` : "";
    return accumulator;
  }, apiRoute);
};

/*
 *
 * Function for deep cloning an Array
 *
 */
export const deepCloneArray = (items: any) =>
  items.map((item: any) => (Array.isArray(item) ? deepCloneArray(item) : item));

function isObject<T>(item: T): item is T & Record<string, unknown> {
  return item !== null && typeof item === "object" && !Array.isArray(item);
}

export function deepClone<T>(item: T): T {
  if (Array.isArray(item)) {
    return item.map((element) => deepClone(element)) as unknown as T;
  } else if (isObject(item)) {
    const clonedObj: Record<string, unknown> = {};
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        clonedObj[key] = deepClone((item as Record<string, unknown>)[key]);
      }
    }
    return clonedObj as T;
  } else {
    return item;
  }
}

const emptyImage = { source_url: "", title: { rendered: "" } };

export const extractPostData = (post: PostType, excerptLimit: number = 150) => {
  if (!post) return { imageData: emptyImage, excerptLimited: "" };
  const imageData = post._embedded["wp:featuredmedia"][0];
  const authorData = post._embedded.author[0];
  const excerpt: any = parse(post.excerpt.rendered);
  const excerptFirstParagraph = excerpt[0].props.children;
  const excerptLimited =
    excerptFirstParagraph.slice(0, excerptLimit) + (excerptFirstParagraph.length > excerptLimit ? "..." : "");
  return { imageData, excerptLimited, authorData };
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const stripUnsupportedTitleCharacters = (title: string): string => {
  return title.replace(/[^a-zA-Z0-9\s-]/g, "").trim();
};

export const encodeHTMLEntities = (str: string): string => {
  return str.replace(/[\u00A0-\u9999<>\&]/g, (i) => "&#" + i.charCodeAt(0) + ";");
};
