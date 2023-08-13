import Drawer from "@mui/material/Drawer";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CallHistoryItem } from "./callHistoryItem/CallHistoryItem.tsx";
import { MyHttpResponseData } from "../../Interfaces.ts";
import { clearResponseData } from "../../utilities.ts";
import { HistoryChart } from "./historyChart/HistoryChart.tsx";

interface callHistoryDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CallHistoryDrawer = ({
  open,
  setOpen,
}: callHistoryDrawerProps) => {
  const [history, setHistory] = useState<MyHttpResponseData[]>([]);
  const [success, setSuccess] = useState<number>(0);
  const [failure, setFailure] = useState<number>(0);

  useEffect(() => {
    const history: string | null = localStorage.getItem("history");
    if (history) {
      setHistory(JSON.parse(history));
    }

    const success: string | null = localStorage.getItem("successful");
    const failure: string | null = localStorage.getItem("failure");

    if (failure) {
      setFailure(parseInt(failure));
    }
    if (success) {
      setSuccess(parseInt(success));
    }
  }, [open]);

  return (
    <Drawer
      anchor={"right"}
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          width: "80%",
          maxWidth: "800px",
          backgroundColor: "background.default",
          backgroundImage: "none",
        },
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{ margin: "10px", textAlign: "center" }}
      >
        Request History
      </Typography>
      <Box sx={{ height: "50%", overflowX: "auto" }}>
        {history && history.length > 0 ? (
          history.map((call: MyHttpResponseData, index) => {
            return <CallHistoryItem key={index} response={call} />;
          })
        ) : (
          <Typography sx={{ textAlign: "center" }}>
            Please make a request to see request history
          </Typography>
        )}
      </Box>
      {history && history.length > 0 ? (
        <>
          <Button
            sx={{
              width: "25%",
              alignSelf: "flex-end",
              marginTop: "20px",
              marginRight: "10px",
              transition: "all 0.15s ease-in-out",
              "&:hover": {
                cursor: "pointer",
                transform: "translateY(-5px) scale(1.05)",
              },
              "&:active": {
                transform: "translateY(0px) scale(1)",
              },
            }}
            variant={"contained"}
            onClick={() => {
              clearResponseData();
              setHistory([]);
            }}
          >
            Clear
          </Button>

          <Box>
            {/*<Typography*/}
            {/*  variant="h6"*/}
            {/*  component="h2"*/}
            {/*  sx={{ marginTop: "20px" }}*/}
            {/*>*/}
            {/*  Total : {success + failure}*/}
            {/*</Typography>*/}
            {/*<Typography*/}
            {/*  variant="h6"*/}
            {/*  component="h2"*/}
            {/*  sx={{ marginTop: "20px" }}*/}
            {/*>*/}
            {/*  Successful : {success}*/}
            {/*</Typography>*/}
            {/*<Typography*/}
            {/*  variant="h6"*/}
            {/*  component="h2"*/}
            {/*  sx={{ marginTop: "20px" }}*/}
            {/*>*/}
            {/*  Failed : {failure}*/}
            {/*</Typography>*/}
          </Box>
          <HistoryChart failure={failure} success={success} />
        </>
      ) : null}
    </Drawer>
  );
};
