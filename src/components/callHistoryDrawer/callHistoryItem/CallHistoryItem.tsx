import { MyHttpResponseData } from "../../../Interfaces.ts";
import { Box, Typography, useTheme } from "@mui/material";

interface callHistoryItemProps {
  response: MyHttpResponseData;
}
export const CallHistoryItem = ({ response }: callHistoryItemProps) => {
  const theme = useTheme();

  const sharedStyles = {
    borderStyle: "solid",
    borderWidth: "2px",
    margin: "2px 30px",
    wordWrap: "break-word",
    padding: "2px",
  };

  const successStyle = {
    ...sharedStyles,
    borderColor: theme.palette.success.main,
  };

  const errorStyle = {
    ...sharedStyles,
    borderColor: theme.palette.error.main,
  };

  return (
    <Box sx={response.status == 200 ? successStyle : errorStyle}>
      <Typography>
        {response.method} : {response.status} : {response.url}
      </Typography>
    </Box>
  );
};
