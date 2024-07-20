import { socialShareConfig } from "@/models/config";
import {
  shareSpeedDialFancyClass,
  shareSpeedDialNormalClass,
  shareWrapperFancyClass,
  shareWrapperNormalClass,
} from "@/styles/layouts";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

export default function Share({ headline }: { headline: string }) {
  const socialShareActions = socialShareConfig.actions.map((config) => ({
    ...config,
    shareUrl: config.shareUrl
      .replace(/_TEXT_/g, socialShareConfig.headlinePrefix + headline)
      .replace(/_URL_/g, window.location.href),
  }));

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Box sx={socialShareConfig.fancyShareButton ? shareWrapperFancyClass : shareWrapperNormalClass}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={socialShareConfig.fancyShareButton ? shareSpeedDialFancyClass : shareSpeedDialNormalClass}
        icon={<ShareIcon />}
        direction="right"
      >
        {socialShareActions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={<action.Icon />}
            tooltipTitle={action.name}
            onClick={() => handleShare(action.shareUrl)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
