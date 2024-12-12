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
    MuiTextField: {
      defaultProps: {
        slotProps: {
          inputLabel: {
            shrink: true,
          },
        },
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
