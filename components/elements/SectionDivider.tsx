import { sectionDividerClass } from "@/styles/layouts";
import { Box, Container } from "@mui/material";

export default function SectionDivider() {
  return (
    <Container>
      <Box sx={sectionDividerClass}></Box>
    </Container>
  );
}
