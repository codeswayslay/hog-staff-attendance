import React from 'react';
import {
  Typography,
  Zoom,
  Fade,
  LinearProgress,
  withStyles,
  withWidth
} from '@material-ui/core';
import styles from '../styles';
import { compose } from 'recompose';
import logo from '../../hog-logo-alt.svg';

const WelcomePanel = (
  {
    classes,
    width,
    delay,
    duration,
    buffer,
    bar_health,
    welcome_fade_in,
    login_fade_in,
    switch_to_login
  }) =>
  <Fade
    in={welcome_fade_in}
    style={{ transitionDelay: welcome_fade_in ? 0 : delay*4 }}
    timeout={{ exit: duration }}
  >
    <div className={ classes.background_welcome } >
      <br/>
      <Zoom
        in={welcome_fade_in}
        style={{ transitionDelay: welcome_fade_in ? delay : delay*3 }}
        timeout={{ enter: duration }}
      >
        <img
          className={classes.img_center}
          src={logo}
          alt="House of Grace logo"
        />
      </Zoom>
      <Fade
        in={welcome_fade_in}
        style={{ transitionDelay: delay*2 }}
        timeout={{ enter: duration }}
      >
        { width==="md" || width === "lg"
          ?
          <Typography
            className={ classes.welcome_typography_white }
            variant="h2"
            color="secondary"
            align="center"
            gutterBottom
          >
            Attendance Monitoring System
          </Typography>
          :
          <h1
            className={ classes.welcome_typography_white }
            align="center"
          >
            Attendance Monitoring System
          </h1>
        }
      </Fade>
      <br/>
      <Fade
        in={welcome_fade_in}
        style={{  transitionDelay: welcome_fade_in ? delay*3 : delay }}
        timeout={{ enter: duration }}
      >
        <LinearProgress variant="buffer" value={bar_health} valueBuffer={buffer} />
      </Fade>
    </div>
  </Fade>

export default compose(withWidth(), withStyles(styles))(WelcomePanel);