import { headerContainerClass, headerWrapperClass } from "@/styles/layouts";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ThemeSwitcher from "@/components/actions/ThemeSwitcher";
import { centerVerticalClass } from "@/styles/global";
import { Container } from "@mui/material";
import Categories from "./Categories";

export default function Header() {
  return (
    <Box component="header" sx={headerWrapperClass}>
      <Container sx={headerContainerClass}>
        <Stack direction="row" sx={centerVerticalClass}>
          <Typography variant="h4">My App</Typography>
        </Stack>
        <Stack direction="row" spacing={4} sx={centerVerticalClass}>
          <Categories direction="ROW" />
          <ThemeSwitcher />
        </Stack>
      </Container>
    </Box>
  );
}
