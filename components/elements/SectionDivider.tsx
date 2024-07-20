import { sectionDividerClass } from "@/styles/layouts";
import { Box, Container } from "@mui/material";

export default function SectionDivider() {
  return (
    <Container className="section-divider">
      <Box sx={sectionDividerClass}></Box>
    </Container>
  );
}
