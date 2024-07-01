import { API } from "@/models/constants";
import { PostType } from "@/types";
import parse from "html-react-parser";

/*
 *
 * This function converts props object (eg. { page: '1', categories: '2' }) to
 * an API route (eg. https://.../wp-json/wp/v2/posts/?_embed&slug=1&categories=2 )
 *
 */
export const convertPropsToApiRoute = (props: { [key: string]: number | string | undefined }) => {
  const propsKeys = Object.keys(props);
  const apiRoute = API.basePath + API.postsPath + props.page;
  return propsKeys.reduce((accumulator: string, key: string) => {
    if (!props[key]) return accumulator;
    accumulator += key !== "page" ? `&${key}=${props[key]}` : "";
    return accumulator;
  }, apiRoute);
};

/*
 *
 * This function converts props object (eg. { page: '1', categories: '2' }) to
 * local API route (eg. /posts/page/1/categories/2 )
 *
 */
export const convertPropsToLocalRoute = (props: { [key: string]: number | string }) => {
  const propsKeys = Object.keys(props);
  const apiRoute = API.localPostsPath + props.page;
  return propsKeys.reduce((accumulator: string, key: string) => {
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

export const ExtractPostData = (post: PostType, excerptLimit: number = 250) => {
  const imageData = post._embedded["wp:featuredmedia"][0];
  const excerpt: any = parse(post.excerpt.rendered);
  const excerptFirstParagraph = excerpt[0].props.children;
  const excerptLimited =
    excerptFirstParagraph.slice(0, excerptLimit) + (excerptFirstParagraph.length > excerptLimit ? "..." : "");
  return { imageData, excerptLimited };
};
