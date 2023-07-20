import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { OfficialWithOffice } from "../../Interfaces.ts";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface RepresentativeModalProps {
  openProp: boolean;
  handleClose: () => void;
  official: OfficialWithOffice | undefined;
}

export default function RepresentativeModal({
  official,
  openProp,
}: RepresentativeModalProps) {
  const [open, setOpen] = React.useState(openProp);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        {/*{official ? (*/}
        {/*  <Box sx={style}>{JSON.stringify(official)}</Box>*/}
        {/*) : (*/}
        {/* null*/}
        {/*)}*/}
        <Box sx={style}>{JSON.stringify(official)}</Box>
      </Modal>
    </div>
  );
}
