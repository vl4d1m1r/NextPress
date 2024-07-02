import { Box, Container, Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { centerHorizontalClass, centerVerticalClass } from "@/styles/global";
import { footerTextRowClass, socialIconClass } from "@/styles/layouts";

export default function Footer() {
  return (
    <Container component="footer" className="footer">
      <Stack direction="column" spacing={2}>
        <Stack className="footer-social" direction="row" spacing={2} sx={centerHorizontalClass}>
          <Stack className="footer-social-item" direction="row" spacing={2} sx={centerVerticalClass}>
            <Box sx={socialIconClass}>
              <TwitterIcon />
            </Box>
            <Typography variant="body2">Twitter</Typography>
          </Stack>
        </Stack>
        <Box sx={footerTextRowClass}>
          <Typography variant="body2">© 2024 Doctype Adventures</Typography>
          <Typography variant="body2">Privacy Policy</Typography>
        </Box>
      </Stack>
    </Container>
  );
}
