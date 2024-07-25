import PostWrapper from "@/components/wrappers/PostWrapper";
import { extractPostData } from "@/controllers/utils";
import { apiConfig, appConfig } from "@/models/config";
import { PostPagePropsType } from "@/types";
import parse from "html-react-parser";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({ params }: PostPagePropsType, parent: ResolvingMetadata): Promise<Metadata> {
  const apiRoute = apiConfig.wordpressApiPath + apiConfig.postPath + params.postId;
  const post = await fetch(`${apiRoute}`).then((res) => res.json());
  const { imageData, excerptLimited } = extractPostData(post[0]);
  return {
    title: parse(post[0].title.rendered) as string,
    description: excerptLimited,
    /* Original author must not be changed */
    authors: [{ name: appConfig.author }],
    /* Original author must not be changed */
    openGraph: {
      title: parse(post[0].title.rendered) as string,
      description: excerptLimited,
      images: [imageData.source_url],
      url: `${process.env.DOMAIN}post/${post[0].slug}/`,
      type: "website",
    },
  };
}

export default function PostRoute({ params }: { params: { postId: string } }) {
  return <PostWrapper postId={params.postId} />;
}
