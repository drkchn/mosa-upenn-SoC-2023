import { IconButton, Tooltip } from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Fade from "@mui/material/Fade";

interface historyToggleProps {
  setCallHistoryOpen: (open: boolean) => void;
}

export const HistoryToggle = ({ setCallHistoryOpen }: historyToggleProps) => {
  return (
    <Tooltip
      arrow
      title="See Requests"
      placement={"bottom"}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 100 }}
    >
      <IconButton
        sx={{
          padding: "1px 6px",
          height: "80%",
          margin: "auto, 1rem, auto, 1rem",
        }}
        onClick={() => {
          setCallHistoryOpen(true);
        }}
        color="inherit"
      >
        <QueryStatsIcon />
      </IconButton>
    </Tooltip>
  );
};
