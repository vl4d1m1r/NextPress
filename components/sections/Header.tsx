"use client";
import ThemeSwitcher from "@/components/actions/ThemeSwitcher";
import { appConfig, headerConfig, imageConfig, themeConfig } from "@/models/config";
import { buttonGeneralClass } from "@/styles/buttons";
import { centerVerticalClass } from "@/styles/global";
import {
  headerContainerClass,
  headerDrawerClass,
  headerDrawerWrapperClass,
  headerRightSideDesktopClass,
  headerRightSideMobileClass,
  headerSecondaryLogosClass,
  headerWrapperClass,
} from "@/styles/layouts";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button, Container, Drawer, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Categories from "./Categories";

export default function Header() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <>
      <Box component="header" className="header" sx={headerWrapperClass}>
        <Container sx={headerContainerClass}>
          <Link href="/">
            <Stack direction="row" sx={centerVerticalClass}>
              {headerConfig.showLogo ? <Avatar alt="Avatar" src={appConfig.logoImageUrl} sx={{ mr: 2 }} /> : null}
              <Box sx={headerSecondaryLogosClass}>
                {headerConfig.showLogoTextImage ? (
                  <Image
                    src={isDarkMode ? appConfig.logoTextImageDarkUrl : appConfig.logoTextImageLightUrl}
                    alt="Logo Image Text"
                    sizes="100vw"
                    style={{ height: "auto", width: imageConfig.logoTextImageDimension.width }}
                    width={imageConfig.logoTextRatio.width}
                    height={imageConfig.logoTextRatio.height}
                  />
                ) : null}
              </Box>
              {/* Logo text will not show if showLogoTextImage is set to true */}
              <Box sx={headerSecondaryLogosClass}>
                {headerConfig.showLogoText && !headerConfig.showLogoTextImage ? (
                  <Typography variant="h4">{appConfig.name}</Typography>
                ) : null}
              </Box>
            </Stack>
          </Link>
          <Stack direction="row" spacing={2} sx={headerRightSideMobileClass}>
            <Button variant="outlined" onClick={toggleDrawer(true)} sx={buttonGeneralClass}>
              <MenuIcon />
            </Button>
            <ThemeSwitcher />
            <Drawer open={openDrawer} anchor="top" onClose={toggleDrawer(false)} sx={headerDrawerClass}>
              <Box sx={headerDrawerWrapperClass}>
                <Categories direction="COLUMN" />
              </Box>
            </Drawer>
          </Stack>
          <Stack direction="row" spacing={4} sx={headerRightSideDesktopClass}>
            <Categories direction="ROW" />
            {themeConfig.allowThemeChange ? <ThemeSwitcher /> : null}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
