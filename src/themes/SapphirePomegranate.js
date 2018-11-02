import { createMuiTheme } from '@material-ui/core/styles';

const themeName = "Sapphire Pomegranate";

const palette = {
  primary: {
      main: '#303F9F'
    },
  secondary: {
      main: '#F4511E'
    }
};

const typography = {
  useNextVariants: true
};

export default createMuiTheme({
  themeName,
  palette,
  typography
})