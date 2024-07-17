import { backdropInfoWrapperClass } from "@/styles/layouts";
import { Backdrop, Stack, Typography } from "@mui/material";
import { infoDisplayDataConfig } from "@/models/config";
import { InfoPageType } from "@/types";
import { textBackdropInfoClass } from "@/styles/text";
import Link from "next/link";

export default function BackdropInfo({
  type = "error",
  message = null,
}: {
  type?: InfoPageType;
  message?: string | null;
}) {
  const displayData = infoDisplayDataConfig[type];
  return (
    <Backdrop open={true} sx={backdropInfoWrapperClass}>
      <Stack spacing={2}>
        {displayData.messages.map((msg, index) => (
          <Typography key={index} sx={textBackdropInfoClass}>
            {msg}
          </Typography>
        ))}
        <Typography variant="h1">{displayData.animation}</Typography>
        {message ? <Typography sx={textBackdropInfoClass}>{message}</Typography> : null}
        {displayData.homeButton ? (
          <Stack direction="row" spacing={2}>
            <Link href="/">
              <Typography variant="h2">{`<< Home`}</Typography>
            </Link>
            <Typography variant="h2">or refresh the page yourself!</Typography>
          </Stack>
        ) : null}
      </Stack>
    </Backdrop>
  );
}
