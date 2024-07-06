export type PostParamsType = { page: number; categories?: number; tags?: number; search?: string };
export type HeroPostParamsType = {
  page?: number;
  categories?: number;
  tags?: number;
  search?: string;
  postId?: string;
};

export type ImageDataType = {
  source_url: string;
  title: { rendered: string };
};

export type PostType = {
  id: number;
  author: number;
  slug: string;
  featured_media: number;
  link: string;
  excerpt: { rendered: string };
  title: { rendered: string };
  date: string;
  modified: string;
  tags: number[];
  categories: number[];
  type: string;
  _embedded: {
    "wp:featuredmedia": [{ imageData: ImageDataType; source_url: string; title: { rendered: string } }];
  };
};

export type PostsDataType = {
  totalPages: string;
  totalPosts: string;
  posts: PostType[];
};

export type CategoryType = {
  id: number;
  name: string;
  count: number;
};

export type TagType = {
  id: number;
  name: string;
  count: number;
};

export type ReportPropType = {
  type: string;
  messages: string[];
  animation: string;
};

export type SeoDataType = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export type DirectionsType = "ROW" | "COLUMN";

export enum ReportTypes {
  LOADING = "loading",
  ERROR = "error",
  NOT_FOUND = "notFound",
  EMPTY = "empty",
}
