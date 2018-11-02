import React, { Component } from 'react';
import {
  Paper,
  TextField,
  Button,
  Fade,
  Slide,
  InputAdornment,
  Avatar,
  withStyles
} from '@material-ui/core';
import {
  PersonPinCircleOutlined,
  LockOutlined,
  LockOpenOutlined
} from '@material-ui/icons';
import styles from '../styles';
import { compose } from 'recompose';
import logo from '../../hog-logo-alt.svg';
import ForgotPassDialogMessage from '../dialogs/DefaultMessageDialog';

export default compose(withStyles(styles))(class extends Component {
  state = {
    openLoginDialog: false,
    openForgotPassDialog: false
  };

  handleClickOpenCloseDialog = (name) => {
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }

  render() {
    const { classes, delay, duration, login_fade_in } = this.props,
      { openLoginDialog, openForgotPassDialog } = this.state;
    return <Fade
      in={login_fade_in}
      style={{transitionDelay: login_fade_in ? 0 : delay * 3.3}}
      timeout={{enter: duration, exit: duration}}
    >
      <div
        className={
          [
            classes.background_login,
            classes.center_contents
          ].join(" ")
        }
      >
        <Slide
          direction="right"
          in={login_fade_in}
          style={{transitionDelay: login_fade_in ? delay : delay * 3, transform: "translate(-50%, -50%) !important"}}
          timeout={{enter: 500}}
          mountOnEnter
          unmountOnExit
        >
          <Paper
            className={classes.paper}
          >
            <div className={classes.center_contents}>
              <Avatar
                src={logo}
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </div>
            <form>
              <TextField
                id="username"
                label="Username"
                placeholder="Username"
                className={classes.textfield_full}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonPinCircleOutlined/>
                    </InputAdornment>
                  )
                }}
              />
              <br/>
              <TextField
                id="password"
                label="Password"
                placeholder="Password"
                type="password"
                className={classes.textfield_full}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined/>
                    </InputAdornment>
                  )
                }}
              />
              <br/><br/>
              <div className={classes.center_contents}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.button}
                >
                  Login
                  <LockOpenOutlined className={classes.rightIcon}/>
                </Button>
              </div>
              <div className={classes.center_contents}>
                <Button
                  size="small"
                  className={classes.button}
                  onClick={this.handleClickOpenCloseDialog.bind(this, "openForgotPassDialog")}
                >
                  Forgot Password?
                </Button>
              </div>
            </form>
          </Paper>
        </Slide>
        <ForgotPassDialogMessage
          key="forgotPass"
          openKey="openForgotPassDialog"
          openValue={openForgotPassDialog}
          handleClose={this.handleClickOpenCloseDialog}
          // transitionDirection="down"
          title="Forgot Password"
          message="This feature is currently not available on this release"
        />
      </div>
    </Fade>
  }
})