import { IconButton } from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

interface historyToggleProps {
  setCallHistoryOpen: (open: boolean) => void;
}

export const HistoryToggle = ({ setCallHistoryOpen }: historyToggleProps) => {
  return (
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
  );
};
