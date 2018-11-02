import { createMuiTheme } from '@material-ui/core/styles';

const themeName = "Persian Red";

const palette = {
  primary: {
    main: '#D32F2F'
  },
  secondary: {
    main: '#FFA000'
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