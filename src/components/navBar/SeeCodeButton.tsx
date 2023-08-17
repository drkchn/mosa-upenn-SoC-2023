import { IconButton, Link, Tooltip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import Fade from "@mui/material/Fade";

export const SeeCodeButton = () => {
  return (
    <Tooltip
      arrow
      title="See Code"
      placement={"bottom"}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 100 }}
    >
      <IconButton
        sx={{
          padding: "15px 9px 9px 9px",
          height: "80%",
          margin: "auto, 1rem, auto, 1rem",
          alignItems: "end",
          display: "flex",
        }}
        color="inherit"
      >
        <Link
          sx={{ color: "#fff" }}
          href={"https://github.com/drkchn/mosa-upenn-SoC-2023"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <CodeIcon />
        </Link>
      </IconButton>
    </Tooltip>
  );
};
