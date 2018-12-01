import { createMuiTheme } from '@material-ui/core/styles';

// const violet = '#2998ff';
const violetDark = '#5643fa';
const cream = '#E8F0FF';
const red = '#E84855';

const theme = createMuiTheme({
  palette: {
    primary: { main: violetDark },
    secondary: { main: cream },
    error: { main: red }
  },
  typography: { fontSize: 10, useNextVariants: true }
});

export default theme;
