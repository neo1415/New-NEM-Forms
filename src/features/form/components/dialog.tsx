import { Dialog as MuiDialog, DialogContent, DialogTitle } from "@mui/material";
import { cloneElement, ReactElement, useState } from "react";

interface Props {
  title: string;
  trigger: ReactElement;
  children: React.ReactNode;
}

export const Dialog = ({ title, trigger, children }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {cloneElement(trigger, { onClick: handleOpen })}
      <MuiDialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </MuiDialog>
    </>
  );
}; 