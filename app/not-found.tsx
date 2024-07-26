import SectionDivider from "@/components/elements/SectionDivider";
import { infoDisplayDataConfig } from "@/models/config";
import { heroTextWrapperClass, notFoundContainerClass, notFoundHeroWrapperClass } from "@/styles/layouts";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <>
      <Box component="section" id="not-found-hero" sx={notFoundHeroWrapperClass}>
        <Container sx={notFoundContainerClass}>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <Stack spacing={4} sx={heroTextWrapperClass}>
                <Typography variant="h1">{infoDisplayDataConfig.notFound.title}</Typography>
                {infoDisplayDataConfig.notFound.messages.map((message, index) => (
                  <Typography key={index} variant="h3">
                    {message}
                  </Typography>
                ))}
                <Typography variant="h1">{infoDisplayDataConfig.notFound.animation}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
          </Grid>
        </Container>
      </Box>
      <SectionDivider />
    </>
  );
}
