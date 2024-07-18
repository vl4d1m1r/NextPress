import { SeoDataType } from "@/types";

export default function SeoInjector({ title, description, image, url }: SeoDataType) {
  document.title = title;

  const metaTitle = document.querySelector("meta[name='title']");
  if (metaTitle) metaTitle.setAttribute("content", title);

  const metaDescription = document.querySelector("meta[name='description']");
  if (metaDescription) metaDescription.setAttribute("content", description);

  const metaImage = document.querySelector("meta[name='image']");
  if (metaImage) metaImage.setAttribute("content", image);

  const metaUrl = document.querySelector("meta[name='url']");
  if (metaUrl) metaUrl.setAttribute("content", url);

  const ogTitle = document.querySelector("meta[property='og:title']");
  if (ogTitle) ogTitle.setAttribute("content", title);

  const ogDescription = document.querySelector("meta[property='og:description']");
  if (ogDescription) ogDescription.setAttribute("content", description);

  const ogImage = document.querySelector("meta[property='og:image']");
  if (ogImage) ogImage.setAttribute("content", image);

  const ogUrl = document.querySelector("meta[property='og:url']");
  if (ogUrl) ogUrl.setAttribute("content", url);

  return null;
}
