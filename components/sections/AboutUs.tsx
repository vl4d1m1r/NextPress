import { taglineConfig } from "@/models/config";
import { aboutUsHeadlineClass, aboutUsWrapperClass } from "@/styles/layouts";
import { Box, Stack } from "@mui/material";

export default function AboutUs() {
  return (
    <Box className="about-us" sx={aboutUsWrapperClass}>
      <Stack spacing={2}>
        <Box sx={aboutUsHeadlineClass}>'Bout us:</Box>
        <Box>{taglineConfig.taglineText}</Box>
        <Box>{taglineConfig.taglineAdditionalText}</Box>
      </Stack>
    </Box>
  );
}
