import { createTheme } from "@mui/material";

import { Link } from "@/controllers/link";

const theme = createTheme({
  palette: { mode: "dark" },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
  },
});

export { theme };
