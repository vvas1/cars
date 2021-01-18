import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";

export default function DialogWindow() {
  const { state, send } = useContext(MainContext);

  const agreeHandler = () => send("DELETE");
  const disagreeHandler = () => send("CANCEL");

  return (
    <div>
      <Dialog
        open={state.context.open}
        onClose={disagreeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {state.context.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="button" variant="outlined" onClick={disagreeHandler} color="primary">
            no
          </Button>
          <Button type="button" variant="contained" onClick={agreeHandler} color="secondary" autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
