import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
  withStyles
} from '@material-ui/core';
import styles from '../styles';
import { compose } from 'recompose';

const Transition = props => {
  return <Slide direction="up" {...props} />
}

const DefaultMessageDialog = props => {
  const { classes, openKey, openValue, handleClose,
    transitionEffect, title, message } = props;

  return <div>
    <Dialog
      open={openValue}
      onClose={() => handleClose(openKey)}
      TransitionComponent={transitionEffect ? transitionEffect : Transition}
      disableBackdropClick
      disableEscapeKeyDown
      aria-labelledby="default-dialog"
      aria-describedby="default-dialog-display"
    >
      <DialogTitle aria-labelledby="default-dialog">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          aria-describedby="default-dialog-display"
          variant="subtitle1"
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleClose(openKey)}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  </div>
}

DefaultMessageDialog.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  openKey: PropTypes.string.isRequired,
  openValue: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default compose(withStyles(styles))(DefaultMessageDialog);

