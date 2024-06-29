import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ThemeSwitcher from "@/components/actions/ThemeSwitcher";
import { centerVerticalClass } from "@/styles/global";
import { Container, Grid } from "@mui/material";
import { heroWrapperClass } from "@/styles/layouts";

export default function Hero() {
  return (
    <Box
      sx={{
        ...heroWrapperClass,
        backgroundImage: `url('https://vl4di11ir.pw/doctypeadventures/wp-content/uploads/2024/06/obrisi.jpg')`,
      }}
    >
      <Container sx={{ pb: "100px" }}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Stack spacing={4}>
              <Typography variant="h4">
                The YouTuber who has become one of the Gen Zs most beloved celebrities
              </Typography>
              <Typography variant="body2">August 1971</Typography>
              <Typography variant="body1">
                Last week, news broke that James Dean will star in a new movie—64 years after his death. A production
                company called Magic City got the rights to Dean's image from the late actor's estate...
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
