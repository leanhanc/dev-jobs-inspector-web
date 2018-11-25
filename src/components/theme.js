import { createMuiTheme } from '@material-ui/core/styles';

const violet = '#3784FF';
const cream = '#E8F0FF';
const red = '#E84855';

const theme = createMuiTheme({
  palette: {
    primary: { main: violet },
    secondary: { main: cream },
    error: { main: red }
  },
  typography: { fontSize: 10 }
});

export default theme;
