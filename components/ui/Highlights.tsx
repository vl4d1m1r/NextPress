import { highlightsWrapperClass, imageWrapperClass } from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import { highlightsHeadlineClass } from "@/styles/layouts";

export default function Highlights() {
  return (
    <Container component="section" className="highlights">
      <Stack direction="row" spacing={2} sx={highlightsHeadlineClass}>
        <AlarmOnIcon sx={{ fontSize: "42px" }} />
        <Typography variant="h5">Highlights</Typography>
      </Stack>
      <Box sx={highlightsWrapperClass}>
        {[1, 2, 3].map((highlight) => {
          return (
            <Stack key={highlight} spacing={2}>
              <Box sx={imageWrapperClass}>
                <Image
                  src="https://vl4di11ir.pw/doctypeadventures/wp-content/uploads/2024/06/Screenshot-2024-06-27-162819.jpg"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  alt="Post"
                />
              </Box>
              <Box>
                <Typography variant="h5">These striking photos capture the future of human flight</Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <Typography variant="body2" sx={textPillClass}>
                  Life
                </Typography>
                <Typography variant="body2">August 2004</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Box>
    </Container>
  );
}
