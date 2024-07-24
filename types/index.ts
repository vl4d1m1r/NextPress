import { SvgIconComponent } from "@mui/icons-material";

export type PostParamsType = { page: number; category?: number; tag?: number; search?: string };

export type HeroPostParamsType = {
  page?: number;
  category?: number;
  tag?: number;
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
    author: {
      name: string;
      slug: string;
      id: number;
      avatar_urls: { 24: string; 48: string; 96: string; 192: string };
      description: string;
    }[];
  };
  content: { rendered: string };
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

export type CategoryConfigType = {
  id: number;
  name: string;
  slug: string;
  Icon: SvgIconComponent;
};

export type TagType = {
  id: number;
  name: string;
  count: number;
  description: string;
  slug: string;
  taxonomy: string;
};

export type TagsDisplayVariantType = "ALL" | "MOST_POPULAR";

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

export type ThemeConfigType = {
  defaultTheme: "light" | "dark";
  allowThemeChange: boolean;
  localStorageName: string;
};

export type DirectionsType = "ROW" | "COLUMN";

export type InfoPageType = "error" | "notFound" | "empty" | "loading";

export type InfoDisplayDataType = {
  type: InfoPageType;
  messages: string[];
  animation: string;
  homeButton: boolean;
};

export type TaglineConfigType = {
  taglineText: string;
  taglineAdditionalText: string;
  headerTagline: {
    show: boolean;
    position: "above-header" | "below-header";
  };
};

export enum ReportTypes {
  LOADING = "loading",
  ERROR = "error",
  NOT_FOUND = "notFound",
  EMPTY = "empty",
}
