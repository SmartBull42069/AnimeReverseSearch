import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DonationDialog(props: { pop: boolean }) {
  const [open, setOpen] = React.useState(props.pop);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle id="alert-dialog-title" className="text-center	">
          {"Donation"}
        </DialogTitle>
        <DialogContent>
          <div className="flex justify-center ">
            <Image
              src={"/donation.jpg"}
              alt={"Image of hamster saying he is poor"}
              className="size-40 mb-2"
              width={100}
              height={100}
            ></Image>
          </div>
          <DialogContentText id="alert-dialog-description">
            If you are satisfied with the service consider giving donation.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            href="https://www.paypal.com/donate/?hosted_button_id=APXMKHWANTLGU"
            target="_blank"
            onClick={handleClose}
            autoFocus={true}
            variant="contained"
          >
            Yes
          </Button>
          <Button onClick={handleClose} variant="contained" color="error">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
