import Box from "@mui/material/Box";

export default function PostRoute({ params }: { params: { postId: string } }) {
  console.log("Post ID: ", params.postId);
  return (
    <Box component="section" id="post">
      Post should be here
    </Box>
  );
}
