import Hero from "@/components/sections/Hero";
import Box from "@mui/material/Box";

export default function PostRoute({ params }: { params: { postId: string } }) {
  console.log("Post ID: ", params.postId);
  return (
    <>
      <Hero postId={params.postId} />
    </>
  );
}
