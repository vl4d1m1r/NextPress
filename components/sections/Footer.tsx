import { Box, Button, Container, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { centerHorizontalClass, centerVerticalClass } from "@/styles/global";
import {
  footerSocialWrapperClass,
  footerTextGridContainerClass,
  footerTextGridItemLeftClass,
  footerTextGridItemRightClass,
  footerWrapperClass,
  socialIconClass,
} from "@/styles/layouts";
import { socialNetworksConfig } from "@/models/config";
import Link from "next/link";
import { textsConfig } from "@/models/config";

export default function Footer() {
  return (
    <Container component="footer" className="footer" sx={footerWrapperClass}>
      <Stack direction="column" spacing={2}>
        <Stack className="footer-social" direction="row" spacing={2} sx={centerHorizontalClass}>
          <Box sx={footerSocialWrapperClass}>
            {socialNetworksConfig.map((network) => {
              if (!network.active) return;
              return (
                <Link key={network.name} target="_blank" href={network.url} passHref>
                  <Stack
                    className={`footer-social-item-${network.name}`}
                    direction="row"
                    spacing={2}
                    sx={centerVerticalClass}
                  >
                    <Box sx={socialIconClass}>
                      <network.Icon />
                    </Box>
                    <Typography variant="body2">{network.name}</Typography>
                  </Stack>
                </Link>
              );
            })}
          </Box>
        </Stack>
        <Grid container sx={footerTextGridContainerClass}>
          <Grid item xs={12} sm={6} sx={footerTextGridItemLeftClass}>
            <Typography variant="body2">© 2024 Doctype Adventures</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={footerTextGridItemRightClass}>
            <Tooltip title={textsConfig.disclaimer} placement="top-end">
              <Button variant="text" size="small">
                <Typography variant="body2">Privacy Policy</Typography>
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
