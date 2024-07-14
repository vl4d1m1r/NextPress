import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Container, Grid, Skeleton } from "@mui/material";
import { heroWrapperClass } from "@/styles/layouts";
import { textPillClass } from "@/styles/text";

export default function HeroSkeleton() {
  return (
    <Box sx={heroWrapperClass}>
      <Container sx={{ pb: "50px", zIndex: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Stack spacing={4}>
              <Skeleton variant="rectangular" width="100%" height="30px" />
              <Stack direction="row" spacing={2}>
                <Typography variant="body2" sx={textPillClass}>
                  <Skeleton variant="rectangular" width="100px" height="30px" />
                </Typography>
                <Skeleton variant="rectangular" width="100%" height="30px" />
              </Stack>
              <Skeleton variant="rectangular" width="100%" height="30px" />
              <Skeleton variant="rectangular" width="100%" height="30px" />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
