"use client";
import { postsFetcher } from "@/controllers/api";
import { convertPropsToApiRoute } from "@/controllers/utils";
import { centerVerticalClass } from "@/styles/global";
import { postsImageWrapperClass } from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import { PostParamsType } from "@/types";
import { Grid, Pagination, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import useSWR from "swr";

export default function Posts({ page, categories, tags, search }: PostParamsType) {
  const apiRoute = convertPropsToApiRoute({ page, categories, tags, search });
  console.log("API Route: ", apiRoute);
  const { data, error, isLoading } = useSWR(apiRoute, postsFetcher);

  console.log("Posts: ", data, error, isLoading);

  return (
    <>
      <Stack component="section" direction="column">
        {[1, 2, 3, 4].map((post) => (
          <Box key={post} className="blog-post-preview" sx={{ mb: 4 }}>
            <Grid container>
              <Grid item xs={12} sm={5}>
                <Box sx={postsImageWrapperClass}>
                  <Image
                    src="https://vl4di11ir.pw/doctypeadventures/wp-content/uploads/2024/06/Screenshot-2024-06-27-162819.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Post"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={7} sx={{ pr: { xs: 0, sm: 4 } }}>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h5">These striking photos capture the future of human flight</Typography>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body2" sx={textPillClass}>
                      Life
                    </Typography>
                    <Typography variant="body2">August 2004</Typography>
                  </Stack>
                  <Typography variant="body2">
                    Last week, news broke that James Dean will star in a new movie—64 years after his death. A
                    production company called Magic City got...
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Stack>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </>
  );
}
