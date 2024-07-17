"use client";
import {
  headerContainerClass,
  headerDrawerClass,
  headerDrawerWrapperClass,
  headerRightSideDesktopClass,
  headerRightSideMobileClass,
  headerSecondaryLogosClass,
  headerWrapperClass,
} from "@/styles/layouts";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ThemeSwitcher from "@/components/actions/ThemeSwitcher";
import { centerVerticalClass } from "@/styles/global";
import { Avatar, Backdrop, Button, Container, Drawer, Menu, MenuItem } from "@mui/material";
import Categories from "./Categories";
import { appConfig, headerConfig, imageConfig } from "@/models/config";
import Image from "next/image";
import { imagePlaceholder } from "@/public/images/placeholders/imagePlaceholder500x280";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { buttonGeneralClass } from "@/styles/buttons";
import Link from "next/link";
import { themeConfig } from "@/models/config";

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <>
      <Box component="header" sx={headerWrapperClass}>
        <Container sx={headerContainerClass}>
          <Link href="/">
            <Stack direction="row" sx={centerVerticalClass}>
              {headerConfig.showLogo ? <Avatar alt="Avatar" src={appConfig.logoImageUrl} sx={{ mr: 2 }} /> : null}
              <Box sx={headerSecondaryLogosClass}>
                {headerConfig.showLogoTextImage ? (
                  <Image
                    placeholder={imagePlaceholder}
                    src={appConfig.logoTextImageUrl}
                    alt="Logo Image Text"
                    sizes="100vw"
                    style={{ height: "auto" }}
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
