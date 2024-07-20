import Box from "@mui/material/Box";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { socialShareConfig } from "@/models/config";

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
    <Box sx={{ height: 30, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 10, left: 20 }}
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
