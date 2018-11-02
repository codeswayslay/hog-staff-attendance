import Background from './BackgroundPics';
import Screen from './ScreenSize';

const styles = theme => ({
  img_center: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "60%",
    width: "60%"

  },
  background_welcome: {
    height: "100%",
    width: "100%",
    flexGrow: "1",
    backgroundImage: "linear-gradient(#c02425, #f0cb35)"
  },
  background_login: {
    height: "100%",
    width: "100%",
    // backgroundImage: `url(${background_login})`,
    backgroundImage: `url(${Background.background_login_2a})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    overflow: "hidden"
  },
  blur_background: {
    filter: "blur(8px)"
  },
  welcome_typography_white: {
    color: "white",
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
  },
  welcome_typography_amber: {
    color: "amber",
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
  },
  center_contents: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "50%"
  },
  textfield_full: {
    width: "100%"
  },
  textfield_half: {
    width: "50%"
  },
  paper: {
    width: "40%",
    [`@media ${Screen.this_and_less.laptop}`]: {
      width: "60%"
    },
    [`@media ${Screen.this_and_less.tablet}`]: {
      width: "80%"
    },
    [`@media ${Screen.this_and_less.mobileL}`]: {
      width: "100%"
    },
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  [theme.typography.fontSize]: 20
});

export default styles;