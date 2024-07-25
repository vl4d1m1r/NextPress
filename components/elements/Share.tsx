import { socialShareConfig } from "@/models/config";
import { shareSpeedDialClass, shareWrapperClass } from "@/styles/layouts";
import { SpeedDialAdditionalPropsConfig } from "@/types";
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

  const speedDialAdditionalProps: SpeedDialAdditionalPropsConfig = {};

  if (socialShareConfig.speedDialAlwaysOpen) speedDialAdditionalProps.open = true;

  return (
    <Box className="share" sx={shareWrapperClass}>
      <SpeedDial
        ariaLabel="share-speed-dial"
        icon={<ShareIcon />}
        sx={shareSpeedDialClass}
        direction="right"
        {...speedDialAdditionalProps}
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
