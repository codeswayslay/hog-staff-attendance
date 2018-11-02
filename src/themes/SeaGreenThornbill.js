import { createMuiTheme } from '@material-ui/core/styles';

const themeName = "Sea Green Thornbill";

const palette = {
  primary: {
    main: '#2E7D32'
  },
  secondary: {
    main: '#6A1B9A'
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