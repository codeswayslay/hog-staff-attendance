import { createMuiTheme } from '@material-ui/core/styles';

const themeName = "Denim Pomegranate";

const palette = {
  primary: {
    main: '#1565C0'
  },
  secondary: {
    main: '#F44336'
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