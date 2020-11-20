import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const dialogTitle = 'Car deleting';

export default function DialogWindow({ open, handleClose, dialogText }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant={'outlined'} onClick={handleClose} color="primary">
                    Disagree
          </Button>
          <Button variant={'contained'} onClick={handleClose} color="primary" autoFocus>
                    Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
