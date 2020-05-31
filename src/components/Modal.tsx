import React from "react"
import {
  makeStyles,
  Theme,
  Typography,
  Dialog,
  IconButton,
  Paper,
} from "@material-ui/core"
import { Close } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) => ({
  dialogPaper: {
    width: "80vw",
    height: "80vh",
  },
  paper: {
    padding: theme.spacing(2),
    height: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

type Props = {
  children: JSX.Element
  modalTitle: string
  open: boolean
  onClose: () => void
}
export const Modal = ({ children, modalTitle, open, onClose }: Props) => {
  const classes = useStyles()
  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.dialogPaper }}
    >
      <Paper className={classes.paper}>
        <div className={classes.title}>
          <Typography>{modalTitle}</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </div>
        {children}
      </Paper>
    </Dialog>
  )
}
